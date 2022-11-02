---
leap: 34
title: Simplifying Trader Rebates
status: Implemented
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
The tiers for the new system are proposed in the below table (table with old system shown for reference). The Council can choose to alter these tiers from epoch to epoch, if necessary. 

**Old Program**
| stkLYRA Balance | Rebate |
| ------------- | ------------- |
| 0 | 20% | 
| 1,000 | 25.56% | 
| 5,000 | 32.48% | 
| 10,000 | 35.46% | 
| 20,000 | 38.44% |
| 50,000 | 42.38% | 
| 100,000 | 45.36% | 
| 250,000 | 49.30% | 
| 500,000 | 52.29% | 
| 1,000,000 | 55.27% | 
| 2,000,000 | 58.24% | 
| 3,000,000 | 59.99% | 

**Proposed Tiers**
| stkLYRA Balance | Rebate |
| ------------- | ------------- |
| 0 | 5% | 
| 1,000 | 20% | 
| 5,000 | 30% | 
| 10,000 | 35% | 
| 20,000 | 40% |
| 50,000 | 45% | 
| 100,000 | 47.5% | 
| 250,000 | 50% | 
| 500,000 | 52.5% | 
| 1,000,000 | 55% | 
| 2,000,000 | 57.5% | 
| 3,000,000 | 60% | 

## Rationale
This new system preserves the mathematical properties of the old system whilst being intuitive to understand and easy to relay. This simplifies onboarding and will therefore drive higher uptake of the rebates program. 

## Test Cases
N/A 
