---
leap: 19
title: Launch SOL Market
status: Proposed
author: Nick Forster (@nickf24)
created: 2022-02-21
---

LEAP-19: Launch SOL market

## Simple Summary

Soft launch the SOL market on Optimism using DAO seeded funds only and with delta hedging enabled. Should the soft launch function as expected, expand the rewards program and incentivize LPing for all users alongside the existing ETH, BTC and LINK markets. 

## Abstract
Launch the SOL market with an initial two-week pilot round with ~$300,000 sUSD in liquidity funded by the DAO. This market should launch with delta hedging enabled, to ensure that the integration with Synthetix works as expected, and that the resultant fees are manageable. 

## Motivation
The Lyra AMM generalizes to any asset with a liquid spot market that is listed on Synthetix. sSOL is now tradeable on OE, and the addition of a SOL market would expand the range of assets available to traders. SOL is one of the most liquid tokens, attracting large trading volumes across major exchanges, which makes it a suitable candidate for Lyra’s fourth listed asset. 

## Specification 

DAO initializes an sSOL market with $300,000 in sUSD and no extra incentives or UI for users to deposit, beginning ASAP with the round end set to coincide with the existing round (latest expiry on the 4th of March 8am UTC time 2022)
Delta hedging to be switched on for this initial deploy
The UI should support trading on the SOL market ASAP
Assuming the DAO round performs as expected (delta hedging fees are reasonable, the integration works), the SOL LP interface should open at least 72 hours prior to beginning of the next round (on the 5th of March), and the Council should incentivize deposits to this market
The LYRA rewards allocation for the round starting March 5th should initially change from 65/25/10 (ETH/BTC/LINK) to 55/25/10/10 (ETH/BTC/LINK/SOL). Should the demand for SOL options be higher than expected, the Council should be quick to increase the SOL rewards at the expense of less-utilized markets
Delta hedging for other markets (ETH, BTC, LINK) should only be implemented following the conclusion of the first public SOL round (with delta hedging switched on), subject to confirmation by the Council.

## Rationale
The delta hedging integration is untested in production, and should be eased in slowly/with caution 
SOL rewards should be initially low, and scaled up with demand
Reducing the ETH rewards allocation is due to the relatively low utilization of ETH markets, so there is leeway to reduce rewards without capping liquidity for traders 

## Configurable Variables
SOL market parameters will be determined by CCs, in consultation with the community, prior to market launch.



