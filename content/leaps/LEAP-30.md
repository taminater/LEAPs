---
leap: 30
title: Reintroducing Short Collateral Trading Rewards
status: Draft
author: nf (@nickf24), domrom (@0xdomrom)
created: 2022-8-29
---

## Simple Summary
This LEAP proposes re-establishing the short collateral rewards program for traders, in order to keep markets efficient and competitive, drive trading volume and increase usage and activity of the protocol. 

## Abstract
Extend the Lyra trading rewards program to reward users who post collateral against their short options positions with additional yield in the form of $OP and stkLYRA tokens. Implementation can remain with off-chain scripts as per LEAP-26. 

## Motivation
Despite the marked improvement in capital efficiency from v1 to Avalon, there are still inefficiencies in selling options that users face using the protocol. Currently, options on Lyra are trading 10-15 implied volatility percentage points higher than centralized exchanges. A short collateral rewards program will likely close most of this gap, leading to better prices for buyers, higher volumes and fees for LPs, and a better experience for options sellers. 

## Specification
- Traders who sell options are also eligible for short collateral rewards, earning an interest rate on the collateral that is locked against options sold.
- For options expiring in 4 weeks or less, traders will earn a rate of $0.15 (in $OP and stkLYRA) per contract per day, for options that are >= 0.10 delta.
- This rate must be normalized for BTC (and other future markets) according to the ratio of ETH/BTC prices.
- This rate increases linearly to $0.25/contract/day up to 0.90 delta.
- These rates are discounted by a parameter (initially set to 0.5) for options that expire in more than 4 weeks.
- Option deltas are snapshotted and updated daily. If an option falls outside the 10-90 delta range, the collateral posted will no longer be eligible for rewards.
- These rates are all updatable by the core contributors or Council, and will be set at the beginning of each 2 week epoch as with all other incentive programs proposed in LEAP-26.
- The rewards will share the same split/reward caps as the trading rebates proposed in LEAP-26.

## Rationale 

Given the lack of portfolio margin / spreads in the system, this is a reasonable rate to encourage options sellers to try the platform. With IV’s currently 10-15% above other markets, it’s possible that the current markets are at an equilibrium where: 
- Options are too expensive for buyers 
AND
- The capital efficiency issues mean that sellers aren’t sufficiently incentivized to arbitrage prices back down
Leading to a lower volume equilibrium state. By bridging this capital efficiency gap with $OP incentives (of which there are 600,000 $OP allocated to traders), we can observe how the system will perform when this gap is closed. 

## Test Cases 
1. Alice sells 2x 50-delta ETH 1600 calls expiring in 2 weeks. She will be earning: ($0.15 + 0.1 * ((0.5-0.1)/(0.9-0.1))) * 2 = $0.20 * 2 = $0.40 per day in short collateral rewards.
2. Bob sells 5x 20-delta ETH 1200 puts expiring in 6 weeks, he will be earning: ($0.15 + 0.1 * (0.2-0.1)/(0.9-0.1))) * 5 = $0.1625 * 5 = $0.8125 per day in rewards. 

## Configurable Values 
- 10 delta rate: $0.15/day/contract
- 90 delta rate: $0.25/day/contract
- Greater than 4 week option discount rate: 50% (0.5) 
