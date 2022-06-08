---
leap: 26
title: Bridging Tokenomics until xLYRA 
status: Draft
author: Nick Forster (@nickf24)
created: 2022-06-06
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
The earliest possible timeline for an audited set of tokenomics contracts from a reputable auditor is late-September. This LEAP proposes a set of interim tokenomics to accommodate the Avalon release until said time. 
## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
Deprecate the LYRA security module on L1 and launch a LYRA staking module on Optimism. Implement off-chain staking, trading and LP rewards until the xLYRA contracts are fully audited and LEAP-20 is approved. 

## Motivation
Initially, xLYRA was aimed to launch shortly after the Avalon release, however auditing constraints have delayed the xLYRA launch until at least September. The protocol should not wait to implement these important mechanics, and this proposal maps an implementable suite of changes that will support the protocol in its next phase. 
## Specification 
- Deprecate the LYRA security module on L1 
- Create a LYRA staking module on Optimism with a cooldown period of 14 days, and an unstaking period of 2 days
- This staking module would use the StakedTokenV3 contracts from AAVE that are slightly modified to allow for a migration period once xLYRA is live, enabling instant withdrawals for users once it is ready
- For the duration of of the cooldown and unstake periods, users will not receive any trading/LP/staking rewards
- Users will be unable to revert their cooldown once signalled
- Staked LYRA tokens will be labelled as stkLYRA, to be distinguished from the upcoming xLYRA system
- Trading/LP rewards will be distributed as stkLYRA in fortnightly (2-week) epochs
- The staking module will accrue LYRA rewards, which will be distributed 182 days after earning
- Trading and LP LYRA to be distributed 28 days after they are earned upon an epoch’s completion
- Staking module participants will be eligible for staking rewards, trading and LP boosts
- Staking rewards, trading and LP boosts to be enacted with the methodology specified in LEAP-20 (transcribed below) except for the following: 
    - Staked LYRA is transferable
    - xLYRA balances will not degrade during the cooldown period
    - Boosts will not apply for earned LYRA that is vesting (e.g. the staking module rewards that are locked for 182 days) 
    - LP boosts will be calculated using the average staked LYRA balance of an address over an epoch 
    - Trading boosts will be calculated using the instantaneous staked LYRA balance of an address 
- These mechanisms are to be implemented off-chain by the core contributors until the final audited contracts are ready (expected in late-September but could come later).
- Initial parameters for staking, trading and LP rewards will be determined by the Council before each epoch begins. 

Proposed reward rates:
- Staking module rewards: 15,000,000 LYRA/year (1.5% of total supply) 
- LP / Trading rewards to be determined by the Council closer to launch date 

## Rationale
The rationale behind the design decisions for xLYRA staking, trading and LP rewards methodology is outlined in LEAP-20. 

The 15,000,000 LYRA per year in staking rewards has been reduced relative to the proposed rate in LEAP-20. Council and the community should monitor the attractiveness of staking LYRA and can adjust this rate higher if need be. 

Due to the xLYRA auditing timelines, without this proposal the existing tokenomics framework would remain in place throughout the Avalon launch. The proposed mechanics provide a more supportive framework for growth during what is anticipated to be an exciting period for Lyra with the Avalon release and the ongoing development of the Optimism ecosystem. 

This proposal will be deprecated in favor of the full xLYRA suite once LEAP-20 is finalized and the codebase is production ready. 

## Test Cases
N/A

## Addendum: LEAP-20 Methodology (Edited for clarity) 

## Staking Rewards
- stkLYRA holders will receive a share of token rewards in proportion to their stkLYRA balance
- By default, this inflation rate should decrease by 50% each year, beginning one year after the first round of inflationary rewards are paid. The Council can elect to change this schedule with **one month’s notice** to the community.
- Staking rewards will be distributed **fortnightly** after a 6 month delay. 
- These emissions are independent of the security module, meaning that all stkLYRA is unable to be slashed should there be a shortfall event. 
- The LYRA security module will be **deprecated** until there is a better fit for it within the protocol. The USDC security module will remain.

## Trading Rewards
- Following the introduction of partial collateralization in Avalon, trading rewards will shift to a rebate only model. Where users are eligible for a LYRA rebate on their stablecoin fees paid on opening and closing trades. 
- Fee rebates will be paid out as a percentage of trading fees. For instance, a trade involving $40 of fees may receive a 25% rebate ($10) paid out in LYRA.
- This percentage will be a continuous function of the amount of stkLYRA auser has staked. Specifically, the percentage rebate R will be given by: \\[R = min(R_{max}, c + max(0, a(b + log(\frac{x}{d})))\\] where _x_ is a user's staked stkLYRA and _a_, _b_, _c_, _d_ are parameters. The reward percentage _R_ will be capped at a fixed percentage \\(R_{max}\\). 
- A preliminary choice of values is (_a_, _b_, _c_, _d_, \\(R_{max}\\)) = (4.5236, 10.39, 3, 5000000, 50%), meaning thhe maximum rebate will be 50%. Using the formula, this max rebate can only be obtained if a user has at least 5M stkLYRA staked. All users will receive at least a 3% on fees paid. The choice of a logarithm function means that users with small amounts of stkLYRA receive the vast majority of this rebate, making the benefits of holding stkLYRA available to all holders. 
- For example, a user with 10,000 stkLYRA will have a rebate of 21.89% while a user with 1,000,000 stkLYRA will have a rebate of 42.72%.
- The Council can choose different parameters per asset and tweak the maximum rebate percentage \\(R_{max}\\) (50% in the previous example). This can only be updated with 48 hours notice to the community. 
- Rebate rewards will be capped at no more than w LYRA per dollar of trading fees. A preliminary value is _w_ = 3 LYRA per dollar of fees. For example, if Alice has a 40% rebate and makes a trade of $100, then she receives back $40 worth of LYRA. If LYRA is trading at $0.1 (based on a Uniswap TWAP price), then she would receive back 400 LYRA. If _w_ = 3, then the maximum amount of LYRA she can receive is capped at 300 LYRA.
- Rewards will also be capped to 3,000,000/LYRA per fortnightly epoch as a safety measure. If the cap is reached, rewards are to be distributed to traders in proportion to their eligible LYRA rewards, as is currently the case with trading rewards. 
- Strategic trading rewards targeting integration partners may be authorized by the Council. 
- Trading rebates are to be distributed as stkLYRA in fortnightly epochs.   

## LP Rewards
- Council sets a monthly rate of LP rewards to be distributed across all pools
- Council determines the distribution of rewards across markets (e.g 45% ETH, 45% BTC, 10% LINK)
- Reward rates should target a utilization rate across all pools of 60% NAV monthly
- Council can only decrease rewards for a pool with notice of 72 hours longer than the current cooldown period for exiting the liquidity pool. 
- An increase in rewards can only be implemented with notice of 72 hours longer than the current cooldown period for entering the liquidity pool. 
stkLYRA holders can boost their reward, in proportion to their balance. The maximum boost will be equal to 2x their USD pro-rata share of the pool. One stkLYRA balance can be used to simultaneously boost multiple pools. 
- LP rewards will be distributed as stkLYRA.  

#### Implementation 
A user receives LP rewards based on their **effective liquidity** in a given pool. Effective liquidity is a function of the liquidity and xLYRA dedicated to a particular pool. This means that a LP can use xLYRA to boost their rewards. This boost will be capped at 2 times the original liquidity provided.
Let M be the amount of LP tokens a given user has received for providing liquidity to an options pool. This user's effective liquidity \\(\M_{e})\\ is given by:

\\[M_{e} = min(xM + (1-x)\frac{L}{L_{tot}} M_{tot}, M)\\]

where \\[(M_{tot})\\] is the total number of LP tokens issued from the pool, L is the amount of xLYRA staked by the user, \\[(L_{tot})\\] is the total amount of xLYRA staked amongst pool LPs, and _x_ = 0.5 is a parameter. From the above formula, the minimum amount of xLYRA a user needs to obtain the maximum 2x boost is:

\\[L_{min} = L_{tot} \frac{M}{M_{tot}}\\]

That is, a user's share of the xLYRA in the pool needs to be at least that of their share of the liquidity in the pool to get the max boost. In other words, if a user has provided 10% of the LP tokens in a pool, to get the max boost, they must have at least 10% of the xLYRA dedicated to this pool. 

If a user stakes xLYRA for only part of an epoch, then these quantities are multiplied by the fraction of the epoch they are active for. For instance, if a user only stakes xLYRA for half of the epoch, then _L_ in the above formula will be replaced with _0.5L_ and similarly for liquidity _M_.
