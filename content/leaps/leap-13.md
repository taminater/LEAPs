---
leap: 13
title: Post Ignition
status: Draft
author: mjs (@mjs-12)
created: 2021-12-23
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
The next phase of incentives for Lyra between January 7 and April 1, designed to see the project through to the Avalon release. In addition to continuing incentives for market pools and traders, this phase will introduce the LYRA security module and build liquidity in the LYRA token.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This LEAP proposes distributing 24,600,000 LYRA (2.46 % of total supply) between January 7 and April 1 to the following groups:

| Group  | Reward  | Notes |
| ----------- | ----------- | | ----------- |
| Security Module| 6,000,000 LYRA | Split between LYRA and USDC |
| LYRA Liquidity Mining | 5,000,000 LYRA | Split equally between L1 and L2 |
| Lyra Market LPs | 12,000,000 LYRA | Split between markets |
| Lyra Market Traders | Up to 1,600,000 LYRA | Split between markets |

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
With the launch of the LYRA token, there are three main priorities before the release of Avalon:
1. Launch the LYRA Security Module
2. Build liquidity in the LYRA token
3. Transition toward more sustainable protocol incentives

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


#### 1. Security Module
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
| Group  | Reward  | Start | End |
| ----------- | ----------- | ----------- | ----------- |
| LYRA Security Module| 3,000,000 LYRA | Jan 14 | April 1 |
| USDC Security Module | 3,000,000 LYRA | Jan 7 | April 1 |

The LYRA security Module will launch in conjunction with the start of the L1 LM program.

#### 2. LYRA Token Liquidity
| Group  | Reward  | Notes | Start | End |
| ----------- | ----------- | | ----------- | ----------- | ----------- |
| LYRA L2 LM | 2,500,000 LYRA | Uniswap v3 | Jan 14 | April 1 |
| LYRA L1 LM | 2,500,000 LYRA | Sushi Onsen program | Jan 14 | April 1|

In addition to continuing the L2 program, we would like to build liquidity on L1 for three reasons:
- With the introduction of the LYRA security module, there will be increased demand for the token on L1.
- The current LM program on L2 has ammassed around $7m in liquidity and there is little trading activity. We speculate this is due to a number of users that are unwilling to migrate to Optimism to LP and trade. An incentivised L1 pool will allow us to test this empirically.
- Depsite being an L2 native project, we still need to build liquidity on L1 for the longterm health of the token.

Sushi's Onsen program has a strong track record, providing visibility and additional SUSHI incentives.

#### 3. LYRA Trading Incentives

There will be three trading rounds in this phase:
| Round  | Start  | End | Market Pool Rewards | Trading Rewards |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| 4 | Jan 7 | Feb 4 | 4,000,000 | Up to 533,333 |
| 5 | Feb 4 | March 4 | 4,000,000 | Up to 533,333 |
| 6 | March 4 | April 1 | 4,000,000 | Up to 533,333 |

With the ignition phase over, it's important to reduce the incentives to a more sustainable rate as we approach the Avalon release, which will be a significant improvement to the current incentive model.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The values pertaining to the liquidity mining program are configurable and may be updated after discussion has taken place.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
