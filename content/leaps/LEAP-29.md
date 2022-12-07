---
leap: 29
title: Establishing Lyra’s Treasury Council
status: Draft
author: ksett(@ksett737), Lochrest
created: 2022-8-17
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->



## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
This LEAP proposes to expand the Lyra DAO with the creation of The Lyra Treasury Council and outline its responsibilities.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
The Lyra Treasury Council will be a four-seat committee responsible for the management of Lyra DAO funds. 

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
The Lyra DAO needs a structure in place to manage its treasury. Since introducing the Lyra Council and Grants Council, we have created a simple yet effective governance process. Lyra’s Treasury Council (TC) will improve upon this framework by establishing a decentralized mechanism for the financial management of the Lyra Treasury.

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
This LEAP establishes a Treasury Council with four members voted on by LYRA token holders. The Treasury Council will sit for six calendar months, after which a new Treasury Council will be elected. The election will hold the same rules as the Lyra’s Council and GrantsDAO elections. see [LEAP-15](https://leaps.lyra.finance/leaps/leap-15).

The Treasury Council has been delegated the power to spend and manage treasury funds by the Lyra Council’s approval of this LEAP and elected by the holders of LYRA. The Treasury Council will have the responsibility to make strategic decisions for the duration of the epoch. If the TC does not perform well or is within the best interest of LYRA Holders for any reason, their powers may be revoked through a LEAP by the Super Majority vote of first Council and then LYRA Holders.
 
This LEAP places the following functions of the Lyra DAO under the control of the Treasury Council:

1. Treasury Management
2. OTC and Strategic Deal Making
3. Metagovernance Participation
4. Governance Stipends
5. Funding Initiatives Approved by Council VIA the LEAP Framework
6. Providing Budgets for Grants DAO
7. Issuing Discretionary Incentives
8. Partnership Operational Costs
9. Funding Operational Costs of the Lyra Protocol
10. Funding the Operations Committee 

Each of these functions is critical to the continued operation of the Lyra Protocol and will be the Treasury Council’s responsibility going forward. This LEAP is designed to ensure that these critical functions are performed by community members elected specifically for their ability to manage these responsibilities.

**Treasury Management**

The Treasury Council is to manage the 20% of the token supply that is currently marked for the "DAO". As per [LEAP-7](https://leaps.lyra.finance/leaps/leap-7), these tokens are to be used to ensure the Lyra protocol’s ongoing development and the overall growth of the Lyra ecosystem. They are responsible for the protection and investment of the treasury funds to ensure that the operating expenses of the protocol are covered well into the future and proper runway is maintained. The TC shall work towards achieving an infinite time horizon so that Lyra may exist in perpetuity and diversification of funds to ensure that critical expenses will be covered even if the LYRA token has a significant drawdown.

The current estimate of the treasury is ~ $87,000,000

The Lyra DAO wallets to be managed under this LEAP are:
- 0x246d38588b16dd877c558b245e6d5a711c649fcf
- 0xb6dacae4ef97b4817d54df8e005269f509f803f9

To balance risk management and operational efficiency, the multisig will require 3/4 signatures.

**OTC and Strategic Deal Making:**

The Treasury Council will engage in OTC and strategic deal-making on behalf of the Lyra DAO. This includes pursuing any DAO mergers, treasury swaps, or strategic partnerships and investments that may fall outside the scope or budget of GrantDAO.

**Metagovernance Participation:**

TC shall participate in the governance of other DAOs to further the interests of Lyra token holders. Examples include staking and locking governance tokens of different protocols to increase voting power and bribes to drive value to LYRA holders.

**Governance Stipends:**

The TC will manage payments for all elected members of eligible governance bodies including the TC itself. This is an incentivized role and each council member will receive the following each month:

- $2500 worth of LYRA, using the open price on Coingecko on the first of each month. If this price is less than $0.05, the TC may pay council members in USDC or ETH.

To avoid any conflict of interest, any change in governance stipends must be approved by a Super Majority vote of both Lyra’s Treasury Council and Operations Committee.


**Funding Initiatives Approved by Council VIA the LEAP Framework**

The Lyra Council can drive protocol changes through LEAPs. The council shall communicate and discuss with Treasury Council before the approval of any LEAP requiring funding, that the proposal is reasonable and suitable for funding.

**Providing Budgets for GrantsDAO**

The GrantsDAO will retain its current DAO allocated funds to cover the next epoch of funding. After which, the TC will set a quarterly budget in collaboration with the GrantsDAO.

**Issuing Discretionary Incentives**

Lyra’s TC may issue discretionary incentives within a pre-approved incentives budget for programs such as liquidity mining, protocol-owned liquidity, and bug bounties used to improve the protocol.

**Partnership Operational Costs**

The Treasury Council will fund the operational costs of new and existing partnerships. This may include joint liquidity incentives, rebate programs, and other related community and promotional events surrounding a partnership. They will also actively participate in the governance of other protocols in which the Lyra DAO has a stake to further Lyra’s interests.

**Funding Operational Costs of the Lyra Protocol**

The Lyra Protocol requires funding for running and maintaining the protocol each month, the TC will be responsible for ensuring the Lyra DAO has funds needed for testing and administration of the protocol. TC shall also fund any contracts with DevCo established in LEAP 27 approved through LEAP by Council or any other entity contracted by the Lyra Council.

**Funding the Operations Committee:**
Funding the Operations Committee: At inception, an Operations Committee will be funded with 18 months of expenses for Core Contributor Operations. While Lyra’s Treasury multi-sig has full visibility, names and compensation of individuals will not be published as a security precaution for the recipients. Going forward, the Treasury Council will negotiate quarterly and yearly budgets for Contributor’s expenses with the Operations Committee. The TC shall replenish funding to the OC quarterly to maintain a 15 to 18-month runway for Core Contributor Operations. As unexpected needs may arise, the OC and TC may negotiate changes to the budget as needed.



**Additional responsibilities of the Treasury Council to be formalized via LEAP include but are not limited to:** 

- Creating policies around custody 
- Outlining compliance
- Setting up operating rules and procedures 
- Establishing analytics and reporting policies 

These policies and procedures are to be maintained by subsequent Treasury Councils and updated via LEAP when necessary. 

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The formation of Lyra’s Treasury Council ensures that these critical functions are carried out by community members that are elected by token holders for their ability to carry out these functions. 


### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->


### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->
The Lyra Operations Committee is looking to onboard an additional contributor, they negotiate with Treasury Council to fund the additional expense. 

### Configurable Values
<!--Please list all values configurable under this implementation.-->
Number of Seats =  4
Multi sig approvals = 3/4
Length of term = 6 months
Super Majority = 75%

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

References:
https://newsletter.banklesshq.com/p/how-daos-should-approach-treasury
https://sips.synthetix.io/sips/sip-155/









