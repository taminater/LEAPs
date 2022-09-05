---
leap: 34
title: Simplifying Trader Rebates
status: Draft
author: Nick Forster (@nickf24)
created: 2022-09-05
---

## Simple Summary 
Simplify the fee rebates structure to improve UX by introducing flat tiers which map stkLYRA balances to fee rebate percentage.

## Abstract
The current trading rebates system (a key piece of incentives/rewards), described in LEAP-26, uses a logarithmic function (with various weighting parameters) in order to scale a user’s rebate from the minimum 20%, to the maximum 60% of fees paid. This should be altered to a tiered system which is based on a user’s stkLYRA balance. 

## Motivation
Whilst theoretically sound, this mechanism is overly complicated and is difficult for new users to understand versus the more traditional tier model. In order to convey which rebates a prospective user is eligible for, a custom calculator would need to be built (which adjusts over time based on parameter/weighting changes), and said user would have to locate and use the calculator in order to understand their rebates. Compared to simply observing a tiered rebate table, this is extremely cumbersome. 


## Specification
The tiers for the new system are proposed in the below table (table with old system shown for reference). 

### Old Program 
| stkLYRA Balance | Rebate |
| ------------- | ------------- |
| 0 | 20% | 
| 1000 | 25.56% | 
| 5000 | 32.48% | 
| 10000 | 35.46% | 
| 20000 | 38.44% |
| 50000 | 42.38% | 
| 100000 | 45.36% | 
| 250000 | 49.30% | 
| 500000 | 52.29% | 
| 1000000 | 55.27% | 
| 2000000 | 58.24% | 
| 3000000 | 59.99% | 

### New Tiers
| stkLYRA Balance | Rebate |
| ------------- | ------------- |
| 0 | 20% | 
| 1000 | 25% | 
| 5000 | 30% | 
| 10000 | 35% | 
| 20000 | 40% |
| 50000 | 45% | 
| 100000 | 47.5% | 
| 250000 | 50% | 
| 500000 | 52.5% | 
| 1000000 | 55% | 
| 2000000 | 57.5% | 
| 3000000 | 60% | 

## Rationale
This new system preserves the mathematical properties of the old system whilst being intuitive to understand and easy to relay. This simplifies onboarding and will therefore drive higher uptake of the rebates program. 

## Test Cases
N/A 
