---
leap: 17
title: Establishing GrantsDAO
status: Draft
author: Cinque (@Cinqu3), Burtrock
editor: Ksett
created: 2022-02-03
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intend to achieve. This should be non-technical and accessible to a casual community member.-->
This LEAP proposes to establish a GrantsDAO.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
GrantsDAO is a three-seat Committee responsible for evaluating and considering grant proposals for contributing to Lyra Protocol or LyraDAO.

##  Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate. It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
Community grants are a great way to reward contributors for providing meaningful contributions to the Lyra Protocol or LyraDAO. The GrantsDAO offers a sustainable way to reward contributors and transparency to these decisions. As Lyra evolves, sub-DAO's will help Lyra streamline the management process and promote stability and accountability for DAO's actions.

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
GrantsDAO will be governed by three members that are elected by token holder vote. GrantsDAO members are responsible for rewarding grants and allocating the GrantDAO funds.
GrantsDAO will consist of Two DAO members and One Core Contributor.


### Rationale
Setting up a GrantsDAO is another step towards decentralized governance. This will enable LyraDAO to manage funds towards the betterment of the protocol and attract the talent, skills and, culture to develop and sustain the growth of Lyra.

### Technical Specification

Build a smart contract + frontend that allows GrantsDAO members to vote on grant proposals for contributing to the Lyra Protocol or DAO.

1. Grants

   	A grant is a financial award given to a contributor who provides significant value to the Lyra DAO or protocol
	- Anyone can propose a grant.
	- Accepting or Rejecting a grant requires a majority of GrantDAO member votes in favor (i.e., 2/3).

	The scope of the GrantsDAO in regards to grants include:
	- Defining processes and templates for submitting a grant proposal
	- Guiding applicants through the processes
	- Interviewing applicants and evaluating proposals
	- Voting on proposals and distributing the funds outlined in the proposal

2. Token Holder

	 - Token holders are eligible to vote in Grants DAO elections.
	 - Tokens that the Lyra DAO controls are NOT eligible to vote.

3. GrantsDAO

	The Grants DAO will be a three-seat committee and will sit for three calendar months at a time. The responsibilities of Grants DAO include, but are not limited to:
	- Being an active member in Discord and the broader Defi community
	- Recognize contributions made by the community members and reward them accordingly.
	- Attract talent and incentivize protocols and contributors to integrate with Lyra
	- Vote to Pass or Deny grant proposals promptly

	GrantsDAO position is an incentivized role and will be paid a monthly discretionary stipend by the LyraDAO.

4. Election

	The initial Grants DAO members will be appointed by the Lyra's council to address the urgency and serve a term of at least 3 full months. Once a full three-month period has passed, GrantsDAO members will hold their positions until the next regularly scheduled token holder vote.

	The GrantsDAO election process starts exactly after the council election ends. The election process will hold the same election rules as the LyraDAO Council election. see [LEAP-15](https://leaps.lyra.finance/leaps/leap-15/).

5. Removal and Appointment

	Lyra council may remove any number of GrantsDAO members at any time. However, to avoid frivolous removal of committee members and protect the interests of token holders, a council vote to remove committee members must achieve a 75% or greater supermajority of votes to pass. The supermajority threshold will ensure that GrantsDAO members are removed in exceptional circumstances, such as abandonment of duties or gross mismanagement of funds. Additional criteria for removal will be at the council's discretion and should allow the council to respond quickly and efficiently to unforeseen circumstances.

	If a committee seat becomes vacant at any time, a member of the community may be self-nominated or nominated by any member of the community to fill the role. If at least one council member approves and the nominee accepts the nomination, the council will vote to appoint the nominee to the vacant seat. The nominee may be appointed with a council vote by achieving a 50% or greater simple majority. The approval of at least one council member and acceptance of the nomination by the nominee will ensure that a council vote will only occur when there is a reasonable likelihood of a successful appointment. A simple 50% majority threshold will ensure that council is able to quickly fill vacancies.

	GrantsDAO seats filled using the council appointment mechanism will not be subject to a token holder vote until the appointed member has served one entire epoch. After this period, the seat will be available to candidates during the next regularly scheduled token holder vote. 

6. Management of Funds
	
	Initially, grants approved by the GrantsDAO will be agreed on and funded by Lyra's DAO multisig.
	Once the Lyra treasury is established, the monetary responsibilities of GrantsDAO include, but are not limited to:
	- Maintaining a budget in the GrantsDAO multisig contract
	- Submitting a budget proposal to the Lyra Treasury each epoch to receive the required funding. Accepting or rejecting the budget is at the council's discretion.

7. Non-obligations

	There are some responsibilities that the GrantsDAO are not responsible for:
	- Perform any work related to executing a funded project, including writing a proposal, development, or maintaining a delivered product. These are at the discretion of the GrantsDAO members.
	- Growing the GrantsDAO treasury in the domain of active trading and investment strategies.

### Configurable Values
<!--Please list all values configurable under this implementation.-->
	Number of seats = 3

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
