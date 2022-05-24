---
leap: 21
title: Bridging Emissions Until Avalon
status: Implemented
author: Nick Forster (@nickf24)
created: 2022-03-08
---
## Simple Summary
LEAP 13 mapped out the emissions schedule until April 1, 2022 for:
- Trading 
- LYRA/USDC Security Module 
- Option Market LPs 
- LYRA/ETH Token Pool emissions (Pool2) 
This LEAP will attempt to chart an emissions schedule which expires on the day of the Avalon release (and can be re-extended indefinitely should the tentative release date, May 10 2022, be missed). 

## Abstract
This proposal attempts to make token emissions programs more targeted, in order to rein in unproductive emissions and reduce dilution to existing tokenholders. Most of these changes to the emissions programs should persist post-Avalon release, however this LEAP only explicitly aims to chart the course until release date (targeted May 10th). 

## Specification 

### Overview
There are four key emissions programs that need to be addressed, they are outlined below: 
- Trading 
- USDC/LYRA Security Module
- Option LP Emissions
- LYRA/ETH Token Pool Emissions (Pool2)
Each of these components will be detailed below in the technical specification, together they will make up the emissions plan to carry the protocol through to the Avalon release. 

## Rationale
Given the intricacies of each program, the rationale and trade-offs for each program are addressed per-program in the technical specification below. 

### Trading Rewards
Trading rewards should remain as currently implemented, with the same values for short collateral as well as rebates. These structures will eventually be overhauled post-Avalon release. 

### USDC/LYRA Security Module 
**LEAP-13:**
A total of 6,000,000 LYRA was distributed over 77 days, split equally between USDC and LYRA stakers. 
3,000,000 LYRA emitted to USDC stakers (14.2m LYRA / year). The target TVL was $10m and the pool currently has $29m in deposits at an APY of 7.86%.
3,000,000 LYRA emitted to LYRA stakers, attracting $33.5m LYRA (~$5.9m value at time of writing) at a 42% APY.   
Both of these pools combined are insuring $35m in TVL (coverage ratio of 100% at current market LYRA value). 

**Proposal:**
- Reduce the emissions rate for the USDC Security Module to 5,000,000 LYRA/year (35% of current) which, at current rates, should attract ~$10m in USDC liquidity
- Reduce the emissions rate for the LYRA Security Module to 5,000,000 LYRA/year (35% of current) which, at current rates, should attract ~$2.1m worth of LYRA. 

These changes should be effected as soon as possible, with enough notice given so that stakers can move funds around. In this case, the cooldown period (10 days) + 48 hours notice (12 days total). 

### LP Emissions

**LEAP-13:** 
A total of 12,000,000 LYRA over the 84 days (52,142,857/year or 5.1% of supply annually) was distributed to option market LPs with a target TVL of $50,000,000 
In the latest round (beginning March 5th), the option market deposits totalled $37.1m. This totals roughly 21% APY across all pools (with a token price of $0.15). 

**Proposal:**
- Immediately shift to targeting a maximum of 70% peak utilization of non-delta hedging pool collateral (i.e. the high water mark for round capital usage is 70% of non-delta hedging funds). 
- Peak utilization is defined as: \\[max(\frac{lockedCollat + netPremium}{2/3 * TVL})\\] where _lockedCollat_ is equal to the amount of sUSD locked against puts and converted into sBase to collateralize calls. _netPremium_ is the amount the AMM has collected from selling options minus the amount paid to purchase options. The maximum is evaluated over the entirety of the previous round. 
- Rewards should increase if this target is exceeded in a given round, and decrease if not.
- This will be replaced by the target utilization framework proposed for Avalon in LEAP-20, which sets a target rolling monthly utilization of 60% NAV. 
- This can be modified if the Council has good reason to expect volumes to be materially different from previous months (e.g. if Lyra is expecting a large integration partner to begin executing with the AMM rewards may need to be increased) 


| Options Market | Current TVL | 70% Util Locked Collateral/Premiums | Util High Watermark (prev. round) | % of target | Proposed emissions change | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| ETH | $21.5m | $9.87m | $8m | 82% | -19% | 
| BTC | $8.27m | $3.86m | $2.9m | 75% | -25% | 
| LINK | $2.76m | $1.29m | $0.6m | 47% | -53%| 
| SOL | $4.96m | $2.31m | N/A | N/A | N/A | 

**Rationale:** 
- The ETH market peaked in the last round (Feb 5-March4) at ~$8m in locked collateral + premiums with $27m in liquidity. Given $9m was reserved for delta hedging, this represents 42% of peak utilization in the pool. The new ETH market has $21m of liquidity, if the same trading volumes were to occur this round, this would be roughly ~57% of peak utilization. Given the peaks didn’t last long, and occurred just prior to each expiry, aiming for a peak utilization of ~70% seems reasonable which would imply targeting $17m in ETH market liquidity for the next round.

- BTC market peaked at ~$2.9m in locked collateral + premiums on $10.25m TVL, representing peak utilization of 42% ($2.9m/$6.8m). Therefore target TVL for next round should be ~$6.2m. 

- LINK market peaked at ~$600,000 in locked collateral + premiums on $3.36m TVL, representing peak utilization of 26.7% (0.6m/2.24m). Therefore target TVL for next round should be $1.28m.

These values will have to be re-calculated using the data from the Round ending on April 1st, but the logic can remain the same. To calculate emissions for each pool, therefore, the council should assume that the APY required by LPs remains constant, and emit enough tokens to attract the target TVL. 


### LYRA-ETH Token LPs (Pool2) 

**LEAP-13:** 
- DAO currently spending 65,000 LYRA/day (5m LYRA/2.5 months, 2.4% supply in 1 year) to attract a total of $6m in liquidity across Uniswap and SushiSwap
- No target TVL

**Proposal:** 
- The LYRA DAO should maintain a base layer of liquidity on Uniswap v3, depositing ~$500,000 worth of ETH and LYRA each, and using a managed Uniswap v3 contract (e.g. Gelato network) to ensure that the liquidity is active. 
- Rewards for the L1 Sushiswap pool should cease on April 1st, as per LEAP-13. It will be deprecated.
- Following April 1st, the Uniswap pool rewards (on Optimism) should be reduced to target 10,000,000 LYRA / year (or 27397 LYRA/day). Until the relevant infrastructure is built to support rewards accruing to the Uniswap-native v3 staking contract (i.e. front-end, audited contract), rewards should accrue to a Gelato managed contract. 
- LP rewards should only accrue to Uni LPs whose liquidity is in Gelato pool contract with a specfied liquidity range of (0.2x, 5.0x) of the token spot price on April 1st. This should yield ~1.8x more capital efficiency per $1 of liquidity in the pool. 
- This range can be updated at the earliest of [once per month, 50% change in the spot price from last update], with a minimum notice of 24 hours from the Council to LPs. Should the price of LYRA fall outside of the incentivized range, the Council can update the incentivized range immediately. 
- Once there is an audited Uniswap native staking contract + front end, the Council should be quick to migrate the program to said contract. 
- When token trading volumes are high, the Council should be quick to increase rewards (no notice required) and decrease rewards when token trading volumes are low (requiring 48 hours notice). 
- Tighter ranges can also be incentivized by Council if desired, for greater capital efficiency. 

**Rationale:**
There will be periods throughout the year where the spotlight will be off Lyra and required token liquidity is minimal. There will also be times where the need for liquidity will be very high, and required liquidity in the pools should rise. The pool2 is arguably the biggest source of token emissions for the lowest benefit for the protocol, and therefore should be managed carefully. 
- A Uniswap v3 range of (0.2, 5x) current spot offers a ~180% improvement in capital efficiency relative to Uniswap v2 (https://uniswap.org/blog/uniswap-v3). 
- At time of writing, the Lyra DAO is emitting an annualized rate of ~24,000,000 tokens (2.4% supply) to attract $6m across Sushiswap (L1) and full-range Uniswap v3 (effectively Uniswap v2) on L2. 
- As an example, $6m of total liquidity (ETH + LYRA) on Uniswap v2 could be matched by incentivizing $3.33m of liquidity on v3. This gives us the ability to significantly reduce LYRA rewards paid to LPs, whilst preserving most of the existing token liquidity.

## Test Cases
N/A

## Configurable Values
- Proposed range for liquidity: \\((0.2spot, 5spot)\\) where _spot_ is the LYRA price on program launch (April 1st)
- Annual Rewards to Uniswap v3 pool (on Optimistic Ethereum, in Gelato contract): 10,000,000 LYRA / year
- Annual Rewards to Sushiswap pool on L1: 0 (deprecated)
- USDC Security Module emissions rate: 5,000,000 LYRA / year 
- LYRA Security Module emissions rate: 5,000,000 LYRA / year (to be deprecated following the launch of xLYRA staking, as outlined in LEAP-20)
- Liquidity Pool Utilization target: 60%

