---
leap: 16
title:  Anytime Entry Exit
status: Draft
author: Sean Dawson (@SeanDaws), Domrom (@DominicRomanowski), Anton Jurisevic (@zyzek), Vladislav Abramov (@vladislavabramov)
created: 2022-02-01
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
If approved, this proposal will improve Lyra's user experience (UX) by abolishing the rounds system. Instead, liquidity providers (LPs) will be able to deposit and/or withdraw their funds at any time, subject to a short delay.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This is a proposal to abolish the rounds systems currently in place in V1.1. In its place, we introduce rolling expiries, where Lyra will constantly list 1,2,3,4,6,8,12 and possibly 16 week expiries. Users will now be able to deposit and withdraw their funds from the pool at any time. However, to protect existing LPs, users entering/exiting the pool will have to wait for a cooldown period before their funds are added/withdrawn. A user's share will be computed using the net asset value of the pool based on a geometric time weighted average volatility (GWAV). There are also certain circuit breakers that will prohibit deposits/withdrawals if the GWAV and spot volatility diverge, or if there is insufficient liquidity in the pool.


##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
There are three objectives with this LEAP:
- More efficient usage of LP funds: In V1, towards the end of a round there is a disproportionate amount of liquidity allocated for a single expiry. This is unacceptably inefficient with capital.
- Improved user experience for LPs: The current system of locking liquidity for an entire round may discourage prospective users from depositing funds. Users will now also be able to lock their funds in the pool for an indefinite period of time for potentially greater returns and less active fund management.
- More flexible option expiries for a deeper trading experience.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview
<!--This is a high level overview of *how* the LEAP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
The new mechanism for liquidity proposed in this LEAP is:
- All users can deposit or withdraw funds at any point in time. However, they need to signal their intention to do so several days in advance. A GWAV of baseline volatilities/skew ratios will be used to compute the net asset value (NAV) of the pool and determine an exiting/entering LP's share of the pool. Once signalled, an LP cannot change their mind about depositing/withdrawing.
- Rounds will be abolished. Instead, new expiries will be added periodically when existing expiries are liquidated.
- The longest dated expiry offered  will be increased to 12 weeks. There is also the potential to offer longer dated expiries (16 weeks). The amount of funds that can be used by each board will be capped with shorter dated expiries having larger allocations.

In the following, all parameters are preliminary values that are subject to change after further community discussion. For a list of all configurable parameters, see the end of this LEAP.

### Rationale

TBA

### Technical Specification

#### Geometric Time-Weighted Average Volatility

Lyra is an automated market maker (AMM) for volatility trading. Since the pool's value is a function of its options positions, every trade on the platform directly affects the value of each LP's share. A consequence of this is the possibility of a "dilution/concentration" attack. This is where an attacker manipulates the AMM's listed volatilities to artificially increase their share of the pool. This hurts continuing LPs since the value of their share decreases. A solution to this kind of problem has already been implemented widely in DeFi, namely the concept of a geometric time weighted average volatility or GWAV. Our implementation of a GWAV is heavily inspired by the work of [Euler](https://github.com/euler-xyz/uni-v3-twap-manipulation) and [Uniswap V3](https://uniswap.org/whitepaper-v3.pdf).

A GWAV is a time weighted moving average of a particular quantity. In Lyra, these quantities would be the skew ratios and baseline volatilities for each listing. The benefit of using a GWAV is that it smooths out large movements in the measured quantity, meaning such attacks become almost impossible to perform.

The AMM will maintain a \\(\\mathcal{T}=6\\) hour GWAV of each expiry's baseline volatility (\\(b\\)) as well as the skew for each individual strike (\\(R\\)). In the rest of this proposal, GWAVed values will be denoted by (GWAV) as a superscript.

Let \\((\sigma_i, t_i)\\) denote the \\(i^{th}\\) entry in a given time series of observations recorded on the smart contracts, with \\(t_i\\) being the time \\(\sigma_i\\) was recorded. Each observation is the instantaneous value of either a baseline volatility or a particular listing skew at a given moment in time.

The geometric time-weighted average value over the time interval \\(t\in[t_a,t_b]\\) is defined as
\\[GWAV(t_a, t_b) \ = \ \left(\prod_{i=a}^{b-1}{\sigma_i^{t_{i+1}-t_i}}\right)^{\frac{1}{t_b-t_a}} \\]
where the index \\(i\\) iterates over all volatilities \\(\sigma_{i}\\) that occur in the interval.

A more numerically useful formulation is in terms of an accumulator \\(q_j\\) which records the logarithm of the time-weighted geometric mean of all observations up to the \\(j^{\text{th}}\\) entry

\\[q_j = \sum_{i=0}^{j-1}{(t_{i+1} - t_i)\ln(\sigma_i)} \\]

The accumulator allows the constant-time calculation of GWAV values since it is easily verified that
\\[GWAV(t_a, t_b) \ = \ e^\frac{q_b - q_a}{t_b - t_a}\\]

The first entry in the observation sequence \\((\sigma_0, t_0)\\) will be initialised as follows. At the launch of a new baseline (similarly for a new strike), the core contributors will determine an appropriate fair market value \\(b_{f}\\). The accumulator will then be initialised as \\(q_{0} = \mathcal{T} \log(b_f)\\) to ensure the launch value of the GWAV will be \\(b_f\\).

#### Pool Net Asset Value

When a user comes to deposit/withdraw, the AMM must determine the value of the pool to compute the value of a single LP token.
Let the trading liquidity \\(L\\) denote the amount of sUSD available for trading (i.e. used to buy/collateralise options). Further, we define the hedging liquidity \\(H\\) to be the sum of free sUSD for hedging, purchased sAssets (if net long), sUSD locked for short sold assets and sAssets debt (if net short).

There are 3 other components needed to determine to the net value (NAV) of the pool:

1. Locked short collateral \\((LSC)\\): The amount of sUSD and the sUSD-denominated amount of synth underlyings (sETH, sBTC, etc) used to collateralize the AMM’s short positions. When the AMM shorts an option, the required collateral is subtracted from the trading liquidity and added to \\(LSC\\).
2. \\(O_L\\): The mark-to-market value of the options the pool is long using the GWAV values of the volatility. This is a sum of the AMM's positions over all listings of this asset using the GWAV values of the skews and baseline volatilities. Suppose the pool has \\(n_T\\) expiries and \\(n_K\\) strikes. Let \\(S\\) be the spot price of the asset, \\(r=0\\) the risk free rate, \\(K_i\\) the \\(i^{\text{th}}\\) strike and \\(T_j\\) the \\(j^\text{th}\\) expiry. Then we define \\(O_L\\) as \\[O_{L} = \sum_{j=1}^{n_{T}}\sum_{i=1}^{n_{K}}\left[n_{i,j}^{(\text{long call})}C(\sigma_{i,j}^{GWAV},K_{i},S,r,T_{j})+n_{i,j}^{(\text{long put})}P(\sigma_{i,j}^{GWAV},K_{i},S,r,T_{j})\right]\\] where \\(n_{i,j}^{(\text{long call/put})}\\) is the number of long calls/puts the AMM owns of this listing, \\(\sigma_{i,j}^{(GWAV)} = b_{j}^{(GWAV)} \times R_{(i,j)}^{(GWAV)}\\) is the GWAV trading volatility and \\(C\\), \\(P\\) are the Black Scholes prices of the call/put options using the given parameters
3. \\(O_S\\): the mark-to-market value of the options the pool is short. This is defined in the same way as \\(O_L\\) except the sum is taken over all short positions the AMM holds.

We define the net asset value (NAV) of the pool \\(\Omega\\) as:
\\[\Omega =L + H + LSC + E\\]
where \\(E = O_{L} - O_{S}\\) is the exposure of the pool.

Each LP token is a claim on an equal share of the pool, so that the value of a single LP token \\(\omega\\) is simply the NAV divided by the number of tokens in circulation plus those burnt for pending withdrawals. If there are \\(N\\) such tokens in all, then:
    \\[
    \begin{equation}
        \omega = \frac{\Omega}{N} \label{eq:tokenvalue}
    \end{equation}
    \\]

At the creation of a pool, LP tokens equal to the liquidity it begins with will be minted, which will fix \\(\omega = 1\\) sUSD per token. For example, if the initial deposit into a pool is \\(\$20{,}000{,}000\\) sUSD then \\(20{,}000{,}000\\) LP tokens will be initially issued to the depositor.

#### Deposits and Withdrawals

When a user wishes to deposit or withdraw funds, they signal their intention to do so, along with the quantity of tokens involved. Upon signaling, a record of the transaction is added to a queue. Once signalled, a user is committed to depositing/withdrawing their funds. Any transactions older than the signalling period of \\(\mathcal{S} = 7\\) days can be processed and removed from the queue, provided the system's cached data are not stale and no circuit breaker (described below) has fired recently. The signalling period \\(\mathcal{S}\\) is a parameter that is currently \\(7\\) days but can change after further testing. When a transaction is processed, LP tokens are minted or burnt such that the value of all other LP tokens are kept constant.

#### Deposits

At all times, the contract is constantly tracking the sUSD value \\(X\\) of all unprocessed deposits in the queue; these funds are not used for trading, and do not contribute to the pool's NAV.
When a user signals a deposit of \\(x\\) sUSD, a record of this transaction is added to a deposit queue. The user's funds are transferred to the pool immediately and locked while the deposit is unprocessed.
Once the signalling period has elapsed, if the deposit is at the head of the queue, it may be processed. At this time, \\(n\\) new tokens are issued to the depositor to account for the new liquidity, where:
\\[
    \begin{equation}
        n = \frac{x}{\omega} \label{eq:NAVshare}
    \end{equation}
\\]
Finally, \\(X\\) is decremented by \\(x\\), so that the deposited funds come available for trading, and the deposit record is deleted from the queue.

#### Withdrawals

Similarly with deposits, the pool tracks total number of LP tokens that have signalled to withdraw (\\(Y\\)), and keeps \\(Y \times \omega\\) sUSD reserved to service these withdrawals. We note that this value can change as both \\(Y\\) and \\(\omega\\) are not constant.
In particular, when an individual user signals the withdrawal of \\(y\\) LP tokens, a record is added to a withdrawal queue, \\(Y\\) is incremented by \\(y\\), and those LP tokens are burned.
After the signalling time, the withdrawal can be processed from the queue if there are no unprocessed withdrawals ahead of it. Upon processing, \\(Y\\) is decremented by \\(y\\) and the user receives a value \\(v\\) sUSD from the reserved sUSD, where:
    \\[v = \omega \times y \times (1 - \phi)\\]
To prevent attacks and protect continuing LPs, a small fee of \\(\phi = 0.005\\) (i.e. 0.5%) is charged on all withdrawals. This fee is added back into to the pool to benefit continuing LPs. When there are no listed boards (such as when migration to V2 occurs) the fee will be set to \\(\phi = 0\\). The withdrawal fee \\(\phi\\) can be adjusted based on Council votes.

Note that if there are insufficient funds free to process outstanding withdrawals, then all users will wait for open contracts to close or for existing boards to be liquidated. This will free up liquidity that will be immediately set aside for queued withdrawals.

#### Liquidity Circuit Breaker

It is important to ensure the pool always has sufficient free liquidity to trade options against so that volatility spikes or GWAV attacks can be arbed down by the market. This ensures that the NAV of the pool using the GWAV volatilities is always within some small margin of that using the AMM's spot values.

Motivated by this, we implement a liquidity circuit breaker that prevents all deposits and withdrawals if the trading liquidity falls below a critical threshold. The minimum liquidity \\(M\\) is defined as
\\[M = m \times \Omega\\]
where \\(m\\) is a parameter tuned for each pool. For instance, \\(m\\) could be 2% for the ETH pool.

When \\(L < M\\) the liquidity circuit breaker will fire and all deposits and withdrawals will be blocked. The circuit breaker will continue to fire until \\(L \ge M\\). A countdown timer of \\(\tau_{liq} = 3\\) days then begins, during which deposits and withdrawals will continue to be blocked. After this period, deposits and withdrawals will recommence.

A deposit/withdrawal that has signalled for at least \\(G=14\\) days can be approved by a "guardian" (a multisig consisting of core contributors and Council members). Guardians have the ability to bypass the circuit breaker and approve deposits/withdrawals which have been signalled for at least \\(G\\) days and/or block new expiries from being listed until funds are freed.

If a user is meant to have their funds processed while deposits/withdrawals are blocked, then these transactions can occur immediately after the embargo lifts.

Users can signal to withdraw funds that could send the free liquidity in the pool to 0 and thereby trigger the circuit breaker.
#### Volatility Circuit Breaker

The second circuit breaker ensures that the GWAV and spot volatilities/skews are sufficiently close. If these quantities diverge, then it is most likely unfavourable to current LPs to permit deposits and/or withdrawals. Let
\\[
D(x) = \lvert{x-x^{(GWAV)}}\rvert
\\]
be the absolute difference between a quantity (\\(x\\)) and its corresponding GWAV value.

Whenever a trade occurs on the listing \\((K_{i},T_{j})\\), the AMM will check if the baseline volatility and traded skew are within some threshold of their GWAV values, i.e.
\\[
\begin{equation}
    \max_{i,j} D(R_{i,j})\ge R_m \text{ or } \max_{j} D(b_{j})\ge b_m.
\end{equation}
\\]
Here \\(R_m = 0.05\\) and \\(b_m = 0.05\\) are the maximum absolute differences of the skews and baselines.
If either of these conditions fails, then the volatility circuit breaker fires.
When the volatility circuit breaker fires, all deposits and withdrawals cannot be processed. This lockout continues until the circuit breaker stops firing, at which point a cooldown period of \\(\tau_{vol} = 2\times\mathcal{T} = 12\\) hours begins. During this cooldown period, deposits and withdrawals are locked. At the end of the cooldown period, deposits and withdrawals are immediately able to recommence.

Guardians have the ability to bypass the liquidity and/or volatility circuit breakers if a deposit/withdrawal has been signalled for at least \\(G\\) days.
#### Rolling Expiries

As mentioned earlier, Avalon seeks to improve the trading experience of users by offering a much larger set of expiries, namely 1, 2, 3, 4, 6, 8 and 12 weeks. Every two weeks new 3 and 12 week boards will be added to maintain this structure.

Each board will have a maximum usage (measured as a percentage of the NAV) that increases as the time to expiry approaches 0. For instance, boards with less than a week to expiry will be able to use up to 100\% of the pool’s NAV. That is, up to 100\% of the pool's NAV can be used to buy and/or collateralise options with this expiry. This does not include the costs/collateral needed for delta hedging. Boards with 2 weeks or less to expiry will be capped at 80\% and so forth. This decay continues up to 12 week expiries which will be capped at 10\%. These percentages are preliminary values and will be set after further community discussion.


### Configurable Values
<!--Please list all values configurable under this implementation.-->
The table below shows a list of the configurable variables used in this LEAP. Many of these parameters will be changed after further investigation.

Once Avalon is deployed, these parameters can only be changed by a multisig held by the core contributors that acts on behalf of the council. Changing a parameter applies to all new and existing positions. For instance, if the signalling time of 7 days is updated to 3 days, then a user who has already waited 5 days to deposit can have their funds processed immediately (assuming ideal conditions).

Any change to these parameters will typically be given well in advance (at least 7 days) so users will be well informed. However, in the event of an emergency, any parameter can be immediately changed to ensure the safety of the AMM and LPs.

| Name | Symbol | Value |
| ---- | ------ | ----- |
| Withdrawal Fee | \\(\phi\\) | 0.5\% |
Signalling Time | \\(\mathcal{S}\\) | 7 days |
GWAV Length | \\(\mathcal{T}\\) | 6 hours |
Max Skew Difference | \\(R_m\\) | 0.05 |
Max Baseline Difference | \\(b_m\\) | 0.05 |
Minimum Trading Liquidity | \\(m\\) | Pool Dependent |
Liquidity Circuit Breaker Cooldown | \\(\tau_{liq}\\) | 3 days |
Volatility Circuit Breaker Cooldown | \\(\tau_{vol}\\) | \\(2\times \mathcal{T}\\) hours |
Guardian bypass timer | \\(G\\) | 14 days |

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
