---
leap: 12
title: Distribute LYRA on Optimism
status: Implemented
author: mjs (@mjs-12)
created: 2021-11-29
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Conduct the full distribution of LYRA on Optimism and commence a one-month liquidity program for the LYRA/ETH pair.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This LEAP proposes the specifics of the LYRA token launch, which includes two components. First is the actual distribution itself, which requires a discussion of the tradeoffs between launching on Optimism and L1. Second is the liquidity program, which is designed to bootstrap enough liquidity to enable effective price discovery.

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
The current plan outlined in [LEAP-8](https://leaps.lyra.finance/leaps/leap-8) separates the LYRA distribution between L1 and Optimism, in an attempt to minimise gas costs for smaller recipients. However, with gas consistently above 100 gwei, L1 is unsuitable for almost all users and distributing the token on two networks increases technical complexity and fragments liquidity. 

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
A unified distribution will increase the chance of a successful launch and allow liquidity incentives to be more effective. While Optimism is clearly superior from a cost perspective, there are far fewer protocols deployed, limiting the choices available for liquidity programs.

First, we provide a breakdown of the ~66m LYRA to be distributed on December 14. The final number will depend on the trading rewards for the second round of ignition.

| Group  | Reward      |
| ----------- | ----------- |
| Ignition Market LPs | 27,000,000 LYRA |
| Ignition Traders | 1,052,054 LYRA |
| Ignition Security Module Stakers | 3,181,818 LYRA |
| Discord Community | 8,000,000 LYRA |
| Retro Traders | 3,000,000 LYRA|
| Retro LP Boost | 2,250,000 LYRA |
| SNX stakers | 20,000,000 LYRA |
| Pre Ignition Market LPs | 1,125,000 LYRA |
| Uniswap sUSD / DAI LPs | 1,068,750 LYRA |

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->

#### 1. Distribution
All (see edit below) 66m LYRA will be distributed on Optimism via this [distribution contract](https://github.com/lyra-finance/lyra-protocol/blob/master/contracts/governance/LyraDistributor.sol). Each address will contain a single entry that holds the cumulative LYRA they have earned across all programs. Tokens will become claimable on December 14 at 00:00 UTC which corresponds to `1639440000` in Unix time.

**Edit**: After discussion, the security module LYRA will be distributed on L1 so that the contracts can be used as originally intended.

#### 2. Fast Bridge
We cannot make the assumption that all users wish to keep their LYRA on Optimism. With the current one week withdrawal period, a user who wishes to migrate back to L1 will have a very poor experience. To mitigate this, the LYRA token will be supported by Celer on their [cBridge](https://cbridge.celer.network/#/transfer), providing a fast transfer experience between Optimism and Ethereum mainnnet. The Lyra DAO will seed LYRA into the cBridge pools on Ethereum and Optimism.

#### 3. LYRA Liquidity Program

A successful token launch requires enough liquidity to enable price discovery. By choosing to launch on Optimism, we are limited in the methods at our disposal. On L1, there are innovative bonding models that enable protocols to purchase liquidity, whereas Optimism currently only supports traditional liquidity mining via Uniswap V3.

Uniswap v3 affords liquidity providers more flexibility than v2. However, it also makes on-chain staking incentives difficult. The staking contract allows large one tick liquidity positions to accumulate the majority of rewards. Ribbon's LM program has been a victim of this behaviour.

For the launch of LYRA, we want to enjoy the benefits of Optimism without incurring any additional risks. That is why we are proposing a program that rewards full range positions only. By approximating V2, we lose capital efficiency but greatly reduce the chance of being exploited. The program will run for one month, after which it may be extended or alternative methods may be used if they have come online by then.

Rewards will be computed off-chain using the same infrastructure as the ignition program and will be distributed at the conclusion of the program via the distribution contract.

```
Pool: LYRA/ETH
Fee Tier: 1%
Amount: 1,000,000
Start: 1639440000
End: 1642118400
minPrice: 0
maxPrice: Infinity
```

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The values pertaining to the liquidity mining program are configurable and may be updated after discussion has taken place.

```
Pool: LYRA/ETH
Fee Tier: 1%
Amount: 1,000,000
Start: 1639440000
End: 1642118400
minPrice: 0
maxPrice: Infinity
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
