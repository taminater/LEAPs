---
leap: 31
title: Guardian Specification
status: Draft
author: Sean (@SeanDaws), Ksett (@ksett737), Domrom (@DominicRomanowski)
created: 2022-09-05
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a pull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
This LEAP will detail the exact nature and responsibilities of the Guardians introduced in LEAP 16.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This LEAP will formalize the role of Guardians, previously introduced in LEAP 16 as members of the core team/council responsible for speeding up deposits and withdrawals into the LP when the liquidity or volatility circuit breakers are triggered.

## Motivation
<!--This is the problem statement. This is the *why* of the LEAP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the LEAP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the LEAP will address the issue!-->
- The role of the Guardians was introduced in LEAP 16 as members of the CCs/Council with the power to fast track deposits/withdrawals into the LP.
- The specifics and powers the Guardians possess was left unclear.
- This LEAP will formalize the specifics of this role.

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
Guardians

\\(\textbf{Who is it:}\\) The Guardians is a smart contract with a multi-sig consisting of all 5 members of the Council and 2 members of the core team (who are not on the Council).

\\(\textbf{Length of Service:}\\) All Guardians serve for the duration of the Council.

\\(\textbf{Selection:}\\)  Two CCs (not on the Council) are put forward by the core team. There is no election process to select these Guardian members.

\\(\textbf{Responsibilities/Powers:}\\)
Fast Track Deposits and Withdrawals: Guardians will have the ability to fast track deposits and/or withdrawals when a circuit breaker or cooldown prevents processing.
Guardians can fast track a transaction when:
a) a deposit (withdrawal) has been stalled (by circuit breakers, cooldowns) for longer than max_dep = 3 days (max_withdraw = 3 days)
b) the LP has less than min_free_liq = 5% of its NAV as free liquidity, Guardians can instantly process deposits to boost free liquidity.



### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
As explained earlier, it is important to specify roles for crucial components of the protocol like entry/exit. The above specification achieves this.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Lyra currently exposes or the creations of new ones.-->

Initially this will be handled by the signees themselves. They will observe the markets and determine if there is a need to fast track based on the parameters specified in this leap. There will be a multisig which will require 4/7 signatures to pass.

Over time this can be replaced with a smart contract which encodes even more specific cases on-chain, to increase automation of this/reduce the number of signers needed to execute these transactions.


### Configurable Values
<!--Please list all values configurable under this implementation.-->
```
max_dep = 3 days
max_withdraw = 3 days
min_free_liq = 5% of NAV
sig_to_pass = 4
```

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
