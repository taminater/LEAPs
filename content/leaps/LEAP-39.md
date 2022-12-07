---
leap: 39
title: LEAP dHEDGE Whitelist
status: Draft
author: Taminater (@Taminater#0002)
created: 2022-11-23
---

## Simple Summary
Whitelist dHEDGE Vaults for rebate

## Abstract
This proposal is for whitelisted dHEDGE Vaults to receive a flat fee rebate of 50% on a trial basis. The length will be variable and decided by Lyra Council.

## Motivation
Providing a fee rebate to the dHEDGE Vault and Toros Vaults benefits Lyra via increased volume and usage of Lyra through automated strategies (Toros) and active asset management (dHEDGE). 

## Specification
dHEDGE addresses will be provided rebates under Lyra’s rewards script:

Lyra's rewards script will call isPool(address) on dHEDGE Factory contract https://optimistic.etherscan.io/address/0x5e61a079A178f0E5784107a4963baAe0c5a680c6#readProxyContract

Rewards will be claimed directly to dHEDGE vaults that make the trades https://optimistic.etherscan.io/address/0x5e61a079A178f0E5784107a4963baAe0c5a680c6

Managers can claim rewards for the vault.

Specific dHEDGE pools to be approved by Lyra Council:

Whitelist 2 initial Toros Vaults for rebates:

ETH Covered Call - https://optimistic.etherscan.io/address/0xe6da92fca08d540aa624e9949f9e7768fee80e6c
ETH Long Volatility - https://optimistic.etherscan.io/address/0x44ca2d499e6254dfdc17fdef8c23e7283e7c24e4

dHEDGE DAO will purchase and stake 250k LYRA tokens for at least the period of the fee rebate trial. 
stLYRA will be at this address: https://optimistic.etherscan.io/address/0x352Fb838A3ae9b0ef2f0EBF24191AcAf4aB9EcEc

## Rationale
Lyra does not currently offer delegation of boosting from staked Lyra which puts dHEDGE managers at a disadvantage. dHEDGE will hold an amount of stkLYRA that would otherwise earn traders a rebate. Lyra should support dHEDGE and our partnership by ensuring they receive an appropriate rebate while evaluating delegation models in future tokenomics. dHEDGE is an integration that can drive steady volume to Lyra’s MMVs and we should strive for long-term alignment between the protocols. 

## Configurable Values
Percentage Rebate = 50%
Rewards Period = Variable as set by Lyra Council
dHEDGE stkLYRA Position = 250,000 stkLYRA
