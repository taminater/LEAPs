---
leap: 39
title: LEAP Generalized Rebate Whitelist
status: Draft
author: Taminater (@Taminater#0002), Muir (@Muir#0814)
created: 2022-11-23x
---

## Simple Summary
Define a process for adding integrators to a rebate whitelist

## Abstract
This proposal is for creating a temporary whitelisting policy for integrator rebates that allows the council to quickly add/remove whitelisted integrators via Discord.

## Motivation
Providing a fee rebate to integrators benefits Lyra via increased volume and usage of Lyra.  Currently it is not possible for integrators to stake Lyra to earn rebates for their vaults, and the process to add whitelisted integrators via LEAPs is cumbersome.

## Specification
The Lyra council will approve rebate requests for integrators on a case by case basis via Discord.  The integrator list will be maintained manually and the rewards script will be adjusted to provide rebates for the whitelisted integrators, based on their staked amount. The program will last until it is terminated by the Lyra Council.

The whitelisting proposals will include
- Amount staked
- Rebate tier
- Designated vaults (Max 2)
- Claimant address
- Rebate duration

Each staked Lyra account is limited to a maximum of **two** corresponding whitelisted vaults.  If an integrator wishes to receive rebates for more than two vaults, they can stake Lyra on multiple addresses and submit additional whitelisting proposals.  

The vote to approve whitelisted integrators will occur on Discord via an emoji snap vote, requiring a simple majority to pass.  There are no time constraints for the snap vote.

At any time the Lyra Council reserves the right to revoke whitelist spots, or to cancel the entire program.  The Lyra Council also reserves the right to deny any integrator payouts if it is shown that this program was abused.

## Rationale
Lyra does not currently offer delegation of boosting from staked Lyra which puts integrators at a disadvantage. Integrators will hold an amount of stkLYRA that would otherwise earn traders a rebate. Lyra should support integrators and partnership by ensuring they receive an appropriate rebate while evaluating delegation models in future tokenomics. 

## Configurable Values

