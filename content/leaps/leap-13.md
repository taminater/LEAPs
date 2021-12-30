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
This LEAP proposes the next phase of incentives for Lyra between January 7 and April 1, designed to see the project through to the Avalon release. In addition to continuing protocol incentives for option market LPs and traders, this phase will introduce the LYRA Security Module and build liquidity in the LYRA token.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
With the end of the ignition phase on January 7, we need to establish a new set of incentives that allows the protocol to keep growing in the leadup to xLYRA, which will introduce a long-term emissions structure that aligns token holders, LPs and traders. This LEAP proposes distributing 27,000,000 LYRA (2.7% of total supply) between January 7 and April 1 to the following groups:

| Group  | Reward  | Notes |
| ----------- | ----------- | | ----------- |
| Security Module| 6,000,000 LYRA | Split between LYRA and USDC |
| LYRA Liquidity Mining | 5,000,000 LYRA | Split equally between L1 and L2 |
| Lyra Market LPs | 12,000,000 LYRA | Spread over 3 rounds between all markets |
| Lyra Market Traders | Up to 4,000,000 LYRA | Spread over 3 rounds between all markets |

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Ignition was primarily about kickstarting trading activity on the protocol whilst achieving sufficient distribution of the token. Now that LYRA is live and we have around 6.7% of the supply circulating, the goals have shifted. There are three main priorities before the release of Avalon:
- Launch the LYRA Security Module.
- Build liquidity in the LYRA token.
- Transition toward more sustainable protocol incentives.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->


### Security Module
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
| Group  | Reward  | Start | End |
| ----------- | ----------- | ----------- | ----------- |
| LYRA Security Module| 3,000,000 LYRA | Jan 14 | April 1 |
| USDC Security Module | 3,000,000 LYRA | Jan 7 | April 1 |

The Security Module (SM) is designed to insure the protocol if it becomes insolvent and cannot fulfil its obligations to traders and/or LPs. If the Lyra Council approves a LEAP, funds staked in the SM may be slashed due to a shortfall event. Examples of a shortfall event include:
- Exchange solvency.
- Smart contract bugs.
- Other events that Lyra governance deems to have resulted in a shortfall.

The LYRA security module will launch on L1 and will allow staked LYRA to backstop the system alongside USDC. The security module must have more than one asset to mitigate black swan events and LYRA is a good choice as holders are likely to be engaged and aware of the protocol's risks. The LYRA Security Module will launch in conjunction with the start of an L1 LM program to accommodate the expected increase in demand.

### LYRA Token Liquidity
| Group  | Reward  | Notes | Start | End |
| ----------- | ----------- | | ----------- | ----------- | ----------- |
| LYRA L2 Liquidity Mining | 2,500,000 LYRA | Uniswap v3 full range | Jan 14 | April 1 |
| LYRA L1 Liquidity Mining | 2,500,000 LYRA | Sushi Onsen Program | Jan 14 | April 1|

Building liquidity in a new token is important. Since the launch of LYRA on L2, we've attracted around $7M in liquidity and recent trading volumes have been less than $500k per day. This is somewhat lower than anticipated and may be due to users being unwilling to migrate liquidity and trade on Optimism. In addition to continuing the L2 program, we would like to build liquidity on L1 for three reasons:
- Test the market on L1 to see if we can attract more liquidity and trading volume given equal incentives.
- Accommodate the expected increase in demand from the launch of the LYRA SM on L1.
- Begin building liquidity on L1 to ensure the token's long-term success (independent of Optimism).

Sushi's Onsen program utilises the sushi AMM, a Uniswap V2 style system similar to the program we are emulating on L2. It also has a strong track record of helping early-stage projects build liquidity and improve visibility.

### LYRA Protocol Incentives

There will be three trading rounds in this phase:
| Round  | Start  | End | Option Market LP Rewards | Trading Rewards |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| 4 | Jan 7 | Feb 4 | 4,000,000 | Up to 1,333,333.33 |
| 5 | Feb 4 | March 4 | 4,000,000 | Up to 1,333,333.33 |
| 6 | March 4 | April 1 | 4,000,000 | Up to 1,333,333.33 |

The goal of ignition incentives was twofold. First, ensure a meaningful token distribution to help decentralise ownership and control. Second, provide a strong enough incentive to migrate sUSD liquidity to Optimism given the difficulties imposed by non-fungibility. With these goals achieved, reducing the incentives to a more sustainable rate as we approach the Avalon release is important.

#### Option Market LP Rewards

The rewards for each round will be split 45:45:10 between the ETH, BTC and LINK markets. If new markets are launched throughout the program, the council has the right to update these ratios without passing a new LEAP.

#### Trading Rewards

The amount quoted is the maximum number of LYRA that can be distributed to traders for the round. The actual amount will be determined as follows:
- Long positions: 0.8 LYRA per $1 of fees paid
- Short positions: 1 LYRA per $1 of fees paid
- Short collateral: LYRA LP reward rate * 2/3 * time short position held

If the cap for a round is hit, rewards will be distributed among all traders equally. For example, if a trader is owed 100 LYRA but the total owed for the round is 20% more than the cap, the trader would only receive 100/120 = 83 LYRA.

The Council has the authority to update these values by providing 24 hours notice if the price of LYRA increases above $0.70. Updates will apply once the 24 hour period has finished.

### APR Analysis

For the following analysis, we assume a token price of $0.35 and present the above programs' indicative APRs with the targeted TVL.

| Group  | Reward  | Target TVL | Duration | Indicative APR |
| ----------- | ----------- | ----------- | ----------- |  ----------- |
| LYRA Security Module| 3,000,000 | 10000000 | 77 days | 49.77% |
| USDC Security Module | 3,000,000 | 20000000 | 84 days | 22.81% |
| LYRA L2 LM| 2,500,000 | 10000000 | 77 days | 41.48% |
| LYRA L1 LM | 2,500,000 | 10000000 | 77 days | 41.48% |
| LYRA Option Market LPs | 12,000,000 | 50000000 | 84 days | 36.5% |

- It's unlikely we can attract more than $10M TVL in the LYRA SM at $0.35 as this would be 28.5M tokens, which is ~40% of the circulating supply.
- USDC will likely leave the Security Module in search of better yielding farms. This is acceptable as we do not need more capital in the SM than in the trading protocol.
- The difference in TVL between the L1 and L2 LM programs will allow us to work out how the market is pricing the risks of bridging to Optimism.
- We also expect some churn from the option market pools as LPs who were purely farming ignition rewards are unlocked and move capital elsewhere.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
All rewards programs are configurable after discussion in Discord.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
