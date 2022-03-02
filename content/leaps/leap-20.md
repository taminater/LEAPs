---
leap: 20
title: xLYRA Tokenomics
status: Draft
author: Nick Forster (@nickf24)
created: 2022-03-01
---

## Simple Summary

This LEAP proposes a new tokenomics framework to support the long term growth of the protocol with vote-locked xLYRA, revamped trading/LP rewards schemes and guidelines for liquidity incentives.  

## Abstract

This proposal introduces vote-locked LYRA (xLYRA) as the basic mechanic underpinning Lyra’s tokenomics. Users can lock LYRA for a maximum period of a year, receiving xLYRA in proportion to their time-lock length. xLYRA aims to align governance, traders and LPs over the long term by paying rewards to stakers, and boosting rewards for LPs and traders who carry xLYRA balances. The proposal also describes a framework for emission-rates, which are to be utilized by the council in determining future liquidity rewards.

## Motivation

The Avalon release will represent an enormous step forward for the protocol, adding:
- Consistent, rolling expiries out to 3 months 
- Capital efficient short options positions 
- The ability to close a position at any time
- A wider selection of strikes per expiry
to the extensive suite of features Lyra currently offers, including: 
- Buying/selling calls/puts 
- Market leading spreads 
- Always-on liquidity

This presents an opportunity to push Lyra’s markets and options as far as they can go via partnerships, integrations and trading volumes which match the standards set by the best options protocol in DeFi. The LYRA token is an ideal fit to accentuate this process, by incentivizing liquidity, trading activity, and rewarding long-term governance decisions.  

The vision for the token is as a gateway to Lyra governance, trading, and liquidity provision. Token rewards will be diverted from short-term, inactive holders and into the hands of long-term aligned stakers, market LPs and traders. This will drive repeatable liquidity and volume to the protocol, and establish Lyra as the premier on-chain options venue.  

## Out of Scope
- **Long term emissions schedule**: Lyra is still an early-stage protocol, and as such requires flexibility surrounding emissions and rewards. Each token emitted by the DAO should have a clear purpose that drives more value to the protocol. This is extremely difficult to do by committing to multi-year emissions plans when both the protocol and DeFi landscape change so rapidly. 
- **Voting gauges/on-chain liquidity direction**: Gauges are an important mechanism for value-accrual to the token and efficient liquidity direction. However, with limited markets and engineering resources, they are best left to be built on top of this proposal in the future, should the Lyra community deem it appropriate. 
- **Fees accruing to stakers**: This proposal suggests temporarily deprecating the LYRA Security Module until there is a more natural fit for it version 2 (which will extend margin and capital efficiency to the AMM) Until then, LYRA stakers will not be performing a service which backstops the protocol, and should not be eligible for a share of fees/liquidations.


## Specification 

## Overview

**Proposal:** LYRA holders can elect to lock their tokens for a period of up to 1 year. In return, they receive a linearly proportional balance of xLYRA which decays over time. 

xLYRA holders receive:
- Governance rights: voting for the quarterly Council will be restricted to xLYRA holders and holders of escrowed LYRA 
- Inflationary rewards 
- Boosts to liquidity provision rewards (for option market pools) of up to 2x
- Trading rewards (rebates only)

xLYRA:
- Will be non-transferable
- Decays linearly with time, therefore LYRA holders will have to re-lock in order to receive the maximum boost
- Locking and boosting functionality will be available on Optimism only
- LP rewards boosts will be delegatable 

Token allocations established in LEAP-7 are to be merged into a single pool of tokens that can be used for any purpose that advances the protocol. The allocations in question are: 
- LP rewards (15%)
- Trading rewards (15%)
- Security module (10%)
- Token liquidity (5%) 

### (1) Inflationary Rewards 
#### Current
- No direct inflationary rewards for stakers, however token holders can stake LYRA in the Security Module on L1 (and putting themselves at risk of slashing due to a shortfall event) in return for 38,961 LYRA / day (3,000,000 LYRA over 2.5 months, 1.44% of supply annualized) 

#### Proposal
- xLYRA holders will receive a share of token rewards in proportion to their xLYRA balance, which will begin at 750,000 locked LYRA / week (39,000,000/year, 3.9%)
- By default, this inflation rate should decrease by 50% each year, beginning one year after the first round of inflationary rewards are paid. The Council can elect to change this schedule with **one month’s notice** to the community.
- Inflationary rewards will be distributed **weekly** in LYRA locked for 6 months (into xLYRA). This can be immediately relocked if desired. 
- These emissions are independent of the security module, meaning that all LYRA locked into xLYRA is unable to be slashed should there be a shortfall event. 
- The LYRA security module will be **deprecated** until there is a better fit for it within the protocol. The USDC security module will remain. 
- Governance voting will be restricted to xLYRA holders and holders of escrowed LYRA. Lyra council votes will be determined by xLYRA balances, and escrowed tokens will be treated as if they were locked into xLYRA for the minimum of (time until unlock, maximum xLYRA lock time) with a 0.25 weighting penalty to their vote weight.

#### Rationale
Paying inflation to Lyra stakers encourages holders to both participate in governance, trade/LP on the protocol, and hold the token for longer periods of time. Increased volume and liquidity make governance power more valuable, creating a flywheel effect. Flywheel effects can be extremely powerful when initiated at the correct time, but can backfire when invoked poorly. Without a credible plan to substitute inflationary rewards for intrinsic token utility, continued inflation can debase token value by diluting existing holders and inflicting losses on users who acquire the token late in this cycle. However, Lyra’s path to transitioning from inflationary rewards is clear. 

The Avalon release will result in predictable liquidity and a capital-efficient trading experience, and should drive record volumes to the protocol. However, the cost of onboarding new users is attracting liquidity, which can risk the token falling into the spiral described above. The focus for this release should be on driving as much organic volume (integrations, traders, institutions) and establishing Lyra as the clear leader in on-chain options.

Following Avalon, engineering and development work will be dedicated to making the AMM consistently profitable, with capital efficiency, liquidation fees, and a revamped volatility model making it an attractive place for users to deposit capital and generate returns. Once this occurs, inflationary rewards will no longer be necessary to sustain the protocol. If successful, there will be an abundance of opportunities for token utility. In particular relating to functions like liquidations and backstopping the AMM in case of a shortfall event. In return for this work, LYRA stakers could be eligible for fees. 


### (2) Trading Rewards 
#### Current
Users are eligible for:
- LYRA rebates on their fees paid 
- An interest rate (paid in LYRA) on collateral posted to the AMM when selling options

#### Proposal
- Following the introduction of partial collateralization in Avalon, trading rewards will shift to a rebate only model. Where users are eligible for a LYRA rebate on their stablecoin fees paid on opening and closing trades. 
- Fee rebates will be tiered
- The Council can specify different rebate tier values per asset. This process can eventually be replaced by gauge voting. 
- The Council will be responsible for setting the baseline rebate (in terms of X LYRA per $1 in fees paid). This can only be updated with 48 hours notice to the community or if the LYRA price on one of the top two most liquid DEX venues (by TVL) would make a rebate profitable to wash trade (i.e. rebate per $1 of fees paid exceeds $1).
- Rebates will be paid in LYRA and must be substantially less than $1 worth of LYRA per $1 in fees paid, to prevent wash trading. As such, there will be a hard cap of $0.75 worth of LYRA per $1 in fees paid (based on uniswap twap price)
- Strategic trading rewards targeting integration partners may be authorized by the Council. 
- Trading rebates are distributed immediately, in the form of unlocked LYRA 
Here is an example of a potential rewards structure, assuming that the xLYRA balance is read at the time of trade execution:  

| Minimum xLYRA Balance  | LYRA rebate per $1 fees paid |
| ----------- | ----------- | 
| 1,000 | 0.25 |
| 5,000 | 0.50 |
| 20,000 | 0.75 |
| 100,000 | 1.00 | 
| 500,000 | 1.25 |
| 1,000,000 |1.50 | 
| 5,000,000 | 2.00 |

#### Rationale
Avalon will see the introduction of capital-efficient options selling. Therefore the protocol should cease paying extra rewards to options sellers. This reduces the dilution of existing token holders, and allows the community to accurately assess organic usage of the protocol in the absence of any incentives. 

Rebates remain a useful way of rewarding power users of the protocol with governance rights. Further, since rebates are strictly worth less than the fees paid, wash trading/inorganic volume is not incentivized. 

There will be no cap on LYRA emissions via trading rebates, since emissions via trading rebates are strictly less than fees paid. Fees are also a relatively small percentage of volumes through the protocol, which are already constrained by the size of the liquidity pool. Therefore, it is almost certain that any emissions via trading rebates will be smaller than LP emissions by an order of magnitude. 

### (3) LP Rewards 

#### Current
- Council sets LP rewards before a range of option market rounds. LPs deposit sUSD and receive unlocked LYRA rewards up front. 

#### Proposal
- Council sets a monthly rate of LP rewards to be distributed across all pools
- Council determines the distribution of rewards across markets (e.g 45% ETH, 45% BTC, 10% LINK)
- Reward rates should target a utilization rate across all pools of 60% NAV monthly
- Council can only decrease rewards for a pool with notice of 72 hours longer than the current cooldown period for exiting the liquidity pool. 
- An increase in rewards can only be implemented with notice of 72 hours longer than the current cooldown period for entering the liquidity pool. 
xLYRA holders can boost their reward, in proportion to their balance. The maximum boost will be equal to 2x their USD pro-rata share of the pool. One xLYRA balance can be used to simultaneously boost multiple pools. 
- LP rewards will be distributed in locked LYRA (into xLYRA) that is staked for 30 days (after which it will be redeemable for LYRA). This can be immediately relocked if desired. 

#### Rationale
The liquidity pool will remain fully collateralized in the Avalon release. The focus for v2 will be ripping out this backend and replacing it with a flexible, capital-efficient structure that could potentially support features like native spreads, straddles, strangles, and portfolio margin. Until then, inflationary rewards to LPs will be necessary to provide them with a base yield on their stablecoins, ensuring that there is adequate liquidity to onboard integration partners and supporting trader demand. 

LP emission rates should be responsive to the utilization of the protocol: 
- If trading volumes are low relative to the size of the liquidity pool, LP rewards should decrease
- If trading volumes are high relative to the size of the liquidity pool, LP rewards should increase

Pool utilization is defined as the sum of : 
- Quote asset (e.g. sUSD) collateral locked by the AMM to sell puts
- Base asset (e.g. sETH) collateral locked by the AMM to sell calls 
- Premiums paid (as a debit) for options the AMM has purchased
- Premiums collected (as a credit) for options the AMM has sold
- sUSD used for purchasing or shorting the base asset (delta hedging) 

divided by the Net Asset Value (NAV) of the pool. The methodology for determining pool NAV is described in LEAP-16. Specifying a desired pool utilization will help to identify when trading volumes are relatively high or low. 

60% is the proposed target pool utilization, since it strikes a balance between a high rate of capital usage whilst ensuring that traders will always have sufficient liquidity to open/close positions in turbulent market conditions. Target utilization should be measured by taking daily snapshots of the pool utilization and calculating a moving average per asset. 


#### LP Rewards Boosting Implementation 

A user receives LP rewards based on their **effective liquidity** in a given pool. Effective liquidity is a function of the liquidity and xLYRA dedicated to a particular pool. This means that a LP can use xLYRA to boost their rewards. This boost will be capped at 2 times the original liquidity provided.
Let M be the amount of LP tokens a given user has received for providing liquidity to an options pool. This user's effective liquidity \\(\M_{e})\\ is given by:

\\(\M_{e})\\ = \texttt{min}(\texttt{xM} + (1-x)\frac{L/L_{tot})M_{tot}, M)

where \\(M_{tot})\\ is the total number of LP tokens issued from the pool, L is the amount of xLYRA staked by the user, \\(L_{tot})\\ is the total amount of xLYRA staked amongst pool LPs, and _x_ = 0.5 is a parameter. From the above formula, the minimum amount of xLYRA a user needs to obtain the maximum 2x boost is:

\\(\L_{min})\\ = \\(\L_{tot})\\ x \\(frac{M}{\M_{tot}})\\

That is, a user's share of the xLYRA in the pool needs to be at least that of their share of the liquidity in the pool to get the max boost. In other words, if a user has provided 10% of the LP tokens in a pool, to get the max boost, they must have at least 10% of the xLYRA dedicated to this pool. 

If a user stakes xLYRA for only part of an epoch, then these quantities are multiplied by the fraction of the epoch they are active for. For instance, if a user only stakes xLYRA for half of the epoch, then _L_ in the above formula will be replaced with _0.5L_ and similarly for liquidity _M_.

### (4) Boosting Delegation
#### Proposal
xLYRA holders can delegate their LP rewards boost to other users. Note that boosting delegation will be enabled by the contracts but full functionality will not be explicitly built by the core team on launch, and will be introduced at a later stage. 

- Users can delegate xLYRA for 2 discrete time intervals beginning at 4 and 8 weeks and counting down to 1 + 5 weeks before resetting.
- Only LP boosts can be delegated
- A user’s effective xLYRA balance per boost type is equal to: effectiveBalance = xLYRABalance - delegatesGiven + delegatesHeld. 
- Example: Alice has 100,000 xLYRA and has delegated 50,000 LP boosts, her effective xLYRA balance for LPing is 50,000. 
- Voting power for council elections cannot be delegated 
- xLYRA can only be delegated according to the user’s xLYRA balance at the end of the delegation period. That is, if Bob has 50,000 xLYRA after locking LYRA for 8 weeks and wishes to delegate his LP boost for 4 weeks, he will have 25,000 xLYRA’s worth of boosts to delegate (since half his xLYRA balance will have decayed once 4 weeks has passed)
- The delegation of trading boost xLYRA was considered, and will be a useful feature in time. However, we currently have not settled on a non-gameable implementation of rebate delegation, and as such leave this as an open ended consideration for the community. 

#### Rationale

xLYRA token holders could be a mix of: 
- Long term aligned, active governance participants
- Protocol supporters
- Active traders
- Active liquidity providers

Different individuals may have some, but not all of these attributes. For example, an xLYRA holder might be a long-term aligned believer in the protocol, however is uninterested in providing liquidity. Such a holder would be able to delegate their boost in exchange for bribes, whilst retaining their governance power. 

Council vote delegation will not be natively supported. This is important to encourage long-term decision making and retain voting power in the hands of those who are long term-invested in the protocol. 


### (5) USDC Security Module Rewards 

**Current:** An annualized rate of 12,000,000 LYRA/year (1.2%) is allocated to the USDC security module. At time of writing this has attracted $29.25m USDC at a 10% APY, securing $40m in market TVL.  

#### Proposal 
Immediately reduce the annualized rate of rewards to 8,000,000/year (0.8%), targeting $20m USDC TVL and 50% coverage of the market pool TVL. 
After the Avalon release has been live on mainnet for 3 months, the target market pool percentage coverage should fall to 25%. For example, if TVL remained at $40m USD, the reward rate should fall to 4,000,000 LYRA/year. 

#### Rationale 
An insurance fund for LPs is a necessary and important part of any DEX, however currently the coverage ($29.25m USDC securing $40m in options liquidity) is very high, suggesting that Lyra is overpaying for this fund.

Further, in Avalon, the USDC security module will be eligible for a percentage of liquidation fees, which should increase the attractiveness of providing liquidity (and supplementing the Lyra rewards offered).  


### Timeline
The first features of this proposal are designed to be shipped shortly after the Avalon release (estimated release date is mid-May). The proposed schedule is:

Phase 1 (ASAP - accomodating or following Avalon release)
- Basic xLYRA locking mechanics + inflationary rewards
- LP boosting
- Trade rebates
- Council voting 

Phase 2 (Proposed for future work) 
- Gauge voting/liquidity direction
- Delegation marketplace 

### Conclusion

This proposal aims to: 
- Retain and grow Lyra’s TVL to support trading volume and integrations
- Incentivize long-term decision making and governance 
- Align traders, LPs, and token-holders with the goal of maximizing long term trading volume

Whilst:
- Not creating reflexive tokenomics dynamics via unsustainable staking/LP rewards
- Not locking the protocol into a multi-year emissions plan that may be unsuited to the protocol’s goals in the future 

## Points of Interest
Points of Interest

1. What should the maximum lock time be for xLYRA? Consider:
- Locking will occur on Optimism, a new L2
- Lyra is a new protocol that will likely change significantly in the next year 

2. How long should we lock earned rewards for? 
- The longer the time period the better alignment between LPs and the protocol
- Might cost more total LYRA rewards per $1 of liquidity attracted 

3. What is an optimal tier system for trading rewards? 

4. What should the annualized rate of tokens accruing to xLYRA holders be? (proposed: 39,000,000 per year)

5. Implementation logic for trading rebate delegation
















