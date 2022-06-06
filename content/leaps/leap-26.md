---
leap: 26
title: Bridging Tokenomics until xLYRA 
status: Draft
author: Nick Forster (@nickf24)
created: 2022-06-06
---

<!--You can leave these HTML comments in your merged LEAP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new LEAPs. Note that a LEAP number will be assigned by an editor. When opening a p ull request to submit your LEAP, please use an abbreviated title in the filename, `leap-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
The earliest possible timeline for an audited set of tokenomics contracts from a reputable auditor is late-September. This LEAP proposes a set of interim tokenomics to accommodate the Avalon release until said time. 
## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the LEAP is implemented, not *why* it should be done or *how* it will be done. If the LEAP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
Deprecate the LYRA security module on L1 and launch a LYRA staking module on Optimism. Implement off-chain inflationary, trading and LP rewards until the xLYRA contracts are fully audited and LEAP-20 is approved. 

## Motivation
Initially, xLYRA was aimed to launch shortly after the Avalon release, however auditing constraints have delayed the xLYRA launch until at least September. The protocol should not wait to implement these important mechanics, and this proposal maps an implementable suite of changes that will support the protocol in its next phase. 
## Specification 
- Deprecate the LYRA security module on L1 
- Create a LYRA staking module on Optimism with an unstaking period of 28 days 
- Trading/LP rewards will be distributed in fortnightly epochs
- The staking module will accrue inflationary LYRA rewards, which will be distributed 182 days after earning
- Trading and LP LYRA to be distributed 28 days after they are earned upon an epoch’s completion
- Staking module participants will be eligible for inflationary rewards, trading and LP boosts
- Inflationary rewards, trading and LP boosts to be enacted with the methodology specified in LEAP-20 except for the following: 
    - Staked LYRA is transferable
    - xLYRA balances will not degrade during the cooldown period
    - Boosts will not apply for earned LYRA that is vesting (e.g. staking module rewards that are locked for 28 weeks) 
    - LP boosts will be calculated using the average staked LYRA balance of an address over an epoch 
    - Trading boosts will be calculated using the instantaneous staked LYRA balance of an address 
- These mechanisms are to be implemented off-chain by the core contributors until the final audited contracts are ready (expected in late-September but could come later).
- Initial parameters for inflationary, trading and LP rewards will be determined by the Council throughout the course of this LEAP before each epoch begins. 

Proposed reward rates:
- Staking module rewards: 15,000,000 LYRA/year (1.5% of total supply) 
- LP / Trading rewards to be determined by the Council closer to launch date 

## Rationale
The rationale behind the design decisions for xLYRA staking, trading and LP rewards methodology is outlined in LEAP-20. 

The 15,000,000 LYRA per year in staking rewards has been reduced relative to the proposed rate in LEAP-20. Council and the community should monitor the attractiveness of staking LYRA and can adjust this rate higher if need be. 

Due to the xLYRA auditing timelines, without this proposal the existing tokenomics framework would remain in place throughout the Avalon launch. The proposed mechanics provide a more supportive framework for growth during what is anticipated to be an exciting period for Lyra with the Avalon release and the ongoing development of the Optimism ecosystem. 

This proposal will be deprecated in favor of the full xLYRA suite once LEAP-20 is finalized and the codebase is production ready. 

## Test Cases
N/A
