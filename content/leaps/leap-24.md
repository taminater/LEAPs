---
leap: 24
title: OP Incentives
status: Draft
author: mjs (@mjs-12)
created: 2022-05-01
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intend to achieve. This should be non-technical and accessible to a casual community member.-->
A proposal to distribute 3,000,000 OP to incentivise usage and activity on Lyra.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This LEAP seeks to ratify the [proposal](https://gov.optimism.io/t/gf-phase-0-proposal-lyra-finance/202/2) made to the OP governance fund inside of Lyra's governance framework.


##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate. It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
As part of the Optimism token launch, projects such as Lyra qualified for a distribution of OP.

## Specification
Most descriptive information resides in the original [proposal](https://gov.optimism.io/t/gf-phase-0-proposal-lyra-finance/202/2). This LEAP seeks to ratify only the specific quantities and which council has the authority.

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview
<!--This is a high level overview of *how* the LEAP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

| Group | Amount | Authority | Retroactive |
| ------ | ------ | ------ | ----- |
| Builders | 600,000 OP | Grants Council | 60,000 OP |
| Liquidity |  1,700,000 OP | Lyra Council | 0 |
| Traders | 500,000 OP | Lyra Council | 0 |
| Ecosystem | 200,000 OP | Lyra Council | 0 |


### Rationale
Extensive discussion in Discord - see LEAP-24 thread in #dao-chat - and in the original [proposal](https://gov.optimism.io/t/gf-phase-0-proposal-lyra-finance/202).

### Technical Specification

#### Builders
- Amount: 600,000 OP
- Authority: Grants Council
- Retroactive: 60,000 OP

Eligible builders will apply to the [Grants Council](https://www.notion.so/Lyra-Grants-060f945ae1bc4802813249f191453a91).

#### Liquidity
- Amount: 1,700,000 OP
- Authority: Lyra Council
- Retroactive: 0 OP

##### Market Maker Vaults 
OP can be allloated by the Lyra Council every fortnight, as per [LEAP-26](https://leaps.lyra.finance/leaps/leap-26/).

##### LYRA Token Liquidity
OP can be allocated by the Lyra Council at anytime to the Uniswap v3 LYRA/WETH pair as per [LEAP-21](https://leaps.lyra.finance/leaps/leap-21).

#### Traders
- Amount: 500,000 OP
- Authority: Lyra Council
- Retroactive: 0 OP

##### Rebates
OP can be allocated as part of the trading rebates outlined in [LEAP-26](https://leaps.lyra.finance/leaps/leap-26/).

#### Ecosystem
- Amount: 200,000 OP
- Authority: Lyra Council
- Retroactive: 0 OP

##### Hackathon
Lyra will host a virtual hackathon and create content to educate builers on (i) what to build with options and (ii) how to build on Lyra.

### Configurable Values
<!--Please list all values configurable under this implementation.-->

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
