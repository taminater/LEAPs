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
The next phase of incentives for Lyra between January 7 and April 1, designed to see the project through to the Avalon release. In addition to continuing incentives for the option market LPs and traders, this phase will introduce the LYRA Security Module and build liquidity in the LYRA token.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This LEAP proposes distributing 24,600,000 LYRA (2.46% of total supply) between January 7 and April 1 to the following groups:

| Group  | Reward  | Notes |
| ----------- | ----------- | | ----------- |
| Security Module| 6,000,000 LYRA | Split between LYRA and USDC |
| LYRA Liquidity Mining | 5,000,000 LYRA | Split equally between L1 and L2 |
| Lyra Market LPs | 15,000,000 LYRA | Split between markets |
| Lyra Market Traders | Up to 1,600,000 LYRA | Split between markets |

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
With the launch of the LYRA token, there are three main priorities before the release of Avalon:
- Launch the LYRA Security Module
- Build liquidity in the LYRA token
- Transition toward more sustainable protocol incentives

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
First we provide an overview of the rewards for each section, then we consider the indicative yields based on the current token price.

#### 1. Security Module
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
| Group  | Reward  | Start | End |
| ----------- | ----------- | ----------- | ----------- |
| LYRA Security Module| 3,000,000 LYRA | Jan 14 | April 1 |
| USDC Security Module | 3,000,000 LYRA | Jan 7 | April 1 |

The LYRA security module will launch on L1 and will allow staked LYRA to backstop the system alongside USDC. The security module must have more than one asset to mitigate black swan events and LYRA is a good choice as holders are likely to be engaged and aware of the protocol's risks. The LYRA Security Module will launch in conjunction with the start of an L1 LM program to accommodate the expected increase in demand.

Question: How much capital do we want in the SM in relation to TVL in the pools?

#### 2. LYRA Token Liquidity
| Group  | Reward  | Notes | Start | End |
| ----------- | ----------- | | ----------- | ----------- | ----------- |
| LYRA L2 LM | 2,500,000 LYRA | Uniswap v3 | Jan 14 | April 1 |
| LYRA L1 LM | 2,500,000 LYRA | Sushi Onsen Program | Jan 14 | April 1|

Since the launch of LYRA on L2, we've attracted around $7M in liquidity and trading volumes have been less than $1m per day. This is somewhat lower than anticipated and may be due to users being unwilling to migrate liquidity and trade on Optimism. In addition to continuing the L2 program, we would like to build liquidity on L1 for three reasons:
- Test the market on L1 to see if we can attract more liquidity and trading volume given equal incentives.
- Accommodate the expected increase in demand from the launch of the LYRA SM on L1.
- Begin building liquidity on L1 to ensure the token's long-term success (independent of Optimism).

Sushi's Onsen program utilises the sushi AMM, a Uniswap V2 style system similar to the program we are emulating on L2. It also has a strong track record of helping early-stage projects build liquidity and improve visibility.

#### 3. LYRA Trading Incentives

There will be three trading rounds in this phase:
| Round  | Start  | End | Option Market LP Rewards | Trading Rewards |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| 4 | Jan 7 | Feb 4 | 5,000,000 | Up to 533,333 |
| 5 | Feb 4 | March 4 | 5,000,000 | Up to 533,333 |
| 6 | March 4 | April 1 | 5,000,000 | Up to 533,333 |

The goal of ignition incentives was two fold. First, ensure a meaningful token distribution to help decentralise ownership and control. Second, provide a strong enough incentive to migrate sUSD liquidity to Optimism given the difficulties imposed by non-fungibility.

With these goals achieved, it's important to reduce the incentives to a more sustainable rate as we approach the Avalon release. To do so, we start by considering the current TVL across the pools, which is approximately $62.5M. With the token trading around $0.35, 5,000,000 LYRA per round would offer roughly 36.5% APR if all LPs stayed. We expect some drop off from mercenary capital that will be able to find better rates, so the APR may move higher. A target range between 35%-50% APR feels like the right balance.

On the trading side, it would be nice to have higher rewards since utilisation was fairly low. Question: What's the max ratio we can have of trading rewards to LP rewards without slurp problems?

### APR Analysis

For the following analysis, we assume a token price of $0.35 and present the above programs' indicative APRs. In the case of the LYRA Security Module and LYRA L1 LM, we have provided targets for TVL in the absence of real values.

| Group  | Reward  | TVL | Duration | Indicative APR |
| ----------- | ----------- | ----------- | ----------- |  ----------- |
| LYRA Security Module| 3,000,000 | 25000000 | 77 days | 19.9% |
| USDC Security Module | 3,000,000 | 54000000 | 84 days | 8.45% |
| LYRA L2 LM| 2,500,000 | 7000000 | 77 days | 59.25% |
| LYRA L1 LM | 2,500,000 | 15000000 | 77 days | 27.65% |
| LYRA Option Market LPs | 15,000,000 | 62500000 | 84 days | 36.5% |

- It's likely that USDC will leave the Security Module as there are better yielding farms. This is acceptable as we do not need more capital in the SM than in the trading protocol.
- The difference in TVL between the L1 and L2 LM programs will allow us to work out how the market is pricing the risks of bridging to Optimism.
- We also expect some churn from the option market pools as LPs who were purely farming ignition rewards are unlocked and move capital elsewhere.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The values pertaining to the liquidity mining program are configurable and may be updated after discussion has taken place.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
