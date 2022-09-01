---
leap: 28
title: Increase Council and Grants DAO Terms, Sync elections
status: Implemented
author: Ksett
created: 2022-7-26
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->



## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
This LEAP proposes to increase Lyra Council and Grants DAO terms to 4 months and sync both election cycles.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
If this proposal is passed, all subsequent Lyra Council and Grants DAO terms will be increased to 4 months and the Grants DAOs next election shall coincide with the next Lyra Council election. This will effectively extend the current Grants DAO term by two months. The Lyra Council established in [LEAP-15](https://leaps.lyra.finance/leaps/leap-15) and Grants DAO established in [LEAP-17](https://deploy-preview-58--lyra-leaps.netlify.app/leaps/leap-17) currently sits for 3 calendar months at a time. 


## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Running elections too frequently creates unnecessary administrative overhead without any additional gains to decentralization.

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
Increasing the Lyra Council epochs by one month will reduce the number of elections held and eliminate unnecessary admin work and community strain.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
The current 3 month epochs are too short and leave sitting council members rushing to pass through heavily discussed and researched programs prior to handoff to the next council. Additionally, running frequent elections can be a detriment to the productivity of the Council, Core Contributors and the Lyra Community.


### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->


### Test Cases
<!--Test cases for an implementation are mandatory for LEAPs but can be included with the implementation..-->


### Configurable Values
<!--Please list all values configurable under this implementation.-->
Council Election Cycle = 4 Calendar Months

Grants DAO Election Cycle = 4 calendar Months
## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
