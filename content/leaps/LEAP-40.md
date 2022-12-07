---
leap: 40
title: Incentivize Velodrome Liquidity on Optimism
status: Draft
author: ksett (@ksett737), Cody
created: 2022-12-07
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Add pool 2 liquidity mining programs to Velodrome on Optimism.


## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP proposes moving 50% of liquidity incentives from Arrakis managed liquidity on Uniswap V3 to Velodrome as a pilot to measure the relative effectiveness of incentives.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
The purpose of this proposal is to improve the efficiency of LYRA Pool2 liquidity mining rewards, creating sustainable, DAO-owned liquidity on L2. At the time of writing, these incentives are attracting [$1m in liquidity](https://info.uniswap.org/#/optimism/tokens/0x50c5725949a6f0c72e6c4a641f24049a917db0cb), offering an APR of >50%. By utilizing the Velodrome bribes and Lyra’s voting power to direct VELO emissions to the LYRA/USDC pool, the Lyra DAO can achieve greater liquidity and volume per $1 of incentives distributed to LPs. 

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
The Lyra DAO should provide 250,000 OP incentives (as bribes) annually to support the LYRA/USDC pair on Velodrome
The Lyra DAO should continue to use their veNFT voting position to vote to direct VELO emissions to LYRA/USDC
The Lyra DAO will use all fees/bribes earned by their veNFT voting position to bribe the LYRA/USDC, further boosting the capital efficiency of the incentives / growing TVL
Rewards in the Arrakis/Uniswap pool should be reduced to 250,000 OP upon approval of this LEAP
After 6 weeks, this pilot should be evaluated comparing the TVL/Incentive and Volume/Incentive of the Arrakis and Velodrome strategies.

What is Velodrome?

Velodrome is a trading and liquidity marketplace on Optimism. It allows protocols to incentivize token liquidity by locking VELO tokens as veVELO which is used to direct votes to specific liquidity pairs and in return earn fees on the pool, not just emissions. Since launching in June 2022, over 2.5B in volume has been traded through the protocol with a TVL of $65m+. As a launch partner, Lyra received an 8M veVELO voting position (~2% of veVELO).

Website: https://app.velodrome.finance/
Twitter: https://twitter.com/VelodromeFi


### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Lyra is currently distributing 10,000,000 LYRA per year to maintain $1m of liquidity at the time of this LEAP. This works out to paying around 50c per $1 of liquidity annually at a $0.05 LYRA valuation. Velodrome has demonstrated itself as the most capital-efficient liquidity partner on Optimism and supports the liquidity needs of key ecosystem protocols such as Synthetix (SNX), Aelin (AELIN), and Thales (THALES). 

By collaborating with Velodrome Lyra can:
- Reduce the cost of liquidity incentives
- Increase TVL 
- Increase volume per amount of incentives
- Qualify for Velodrome’s incentive programs

Velodrome has committed to matching Lyra’s bribes at a 20% rate, which will further boost the votes/emissions/TVL Lyra earns. These boosts will also apply the compounded bribes that Lyra DAO will commit to the Lyra-USDC pool, creating a virtuous cycle of rewards.



### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->
Lyra will allocate 4,807.6923 (250k/52) OP per week over a 6-week period to bribe the LYRA-USDC pool on Velodrome. In addition, Lyra will use its 8M veVELO position to vote on the pool. 

Given Velodrome's design, the veVELO votes will automatically receive a portion of the weekly bribes and fees generated by the pool. Lyra will compound these rewards into additional veVELO to benefit from Velodrome's Tour de OP incentives, which include a base lock bonus and additional bribe matches:

![Bribe Matching](https://user-images.githubusercontent.com/88052534/206236764-07a3707f-0d50-4693-a68f-622ccd6d02ad.png)

Growing its veVELO position will allow Lyra to further reduce its net cost of incentivizing liquidity on Velodrome over time and thereby reduce the need for Lyra-denominated incentives.


### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
![Uni Vs. Velo](https://user-images.githubusercontent.com/88052534/206236376-925733d3-9b26-4457-b9e4-4236e5ab5124.png)

### Configurable Values
<!--Please list all values configurable under this implementation.-->
The following values are configurable and updateable by Council with consensus in Discord. 
```
epoch length = 6 weeks
Reward amount for Velo pool (annualized) = 250,000 OP 

```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
