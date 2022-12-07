---
leap: 38
title: GMX hedging and deploy on Arbitrum
status: Draft
author: Domrom (@0xdomrom), NF (@nickf24), Cameron (@beefmaster)
created: 2022-11-25
---

## Simple Summary
Integrate Lyra with GMX and deploy a version of the contracts on Arbitrum. Initially deploying a USDC/wETH market.

## Abstract
Deploy the Lyra protocol to Arbitrum, using GMX perpetuals as the source of liquidity with which to collateralize and delta hedge the AMM. This would require supporting USDC as a quoteAsset, whilst using wETH, wBTC, and native tokens (e.g. UNI) as collateral against short call positions.

## Motivation
This deployment would primarily be in response to user and integrator requests for an Arbitrum deployment. By running two instances of the protocol on multiple L2s, the resiliency of the protocol to an individual shock to one of them increases. Arbitrum has been successful at attracting a large DeFi user base and developer community. By expanding to Arbitrum, Lyra can reach these potential integrators, driving more volume through the protocol.

Further, the use of USDC as quote collateral (and wrapped ETH/BTC + native collateral for DeFi tokens), will increase the pool liquidity available to Lyra for use within the protocol. This should improve the user experience, and increase the volumes that the protocol can feasibly support.

## Specification 
The Lyra protocol contracts will need to be modified to handle `quoteAsset` and `baseAsset` ERC20 tokens that do not have 18 decimals (e.g. USDC with 6dp and wBTC with 8dp). These changes are included under the specifications of LEAP-36.

The `SynthetixAdapter` will be replaced by a `GMXAdapter` contract. This will facilitate retrieval of spot price from the GMX contracts, as well as comparing those values to Chainlink. The GMXAdapter will also be responsible for handling swapping covered call collateral (baseAsset) collected at settlement and during liquidations into quoteAsset.

### Delta Hedging
The`ShortPoolHedger` will be replaced by a `GMXFuturesPoolHedger` contract. This will be responsible for opening and managing perpetual future positions against the GMX pool to delta hedge the liquidity pool.

Within the GMXFuturesPoolHedger a target leverage can be specified, allowing for greater capital efficiency of the Liquidity Pool funds being used to hedge.

### Liquidity Pool Changes
There will be an additional `canHedge` check added to the LiquidityPool contract, which will block the opening of trades when the hedging module (GMXFuturesPoolHedger) deems the position to increase risk beyond an acceptable threshold (i.e. the delta exposure increases beyond the available hedging liquidity on GMX).

## Configurable Values

| Parameter              | Description                                                             | Value     |
|------------------------|-------------------------------------------------------------------------|-----------|
| acceptableSpotSlippage | The maximum difference between the CL price and executed GMX price      | 1.02 (2%) |
| deltaThreshold         | Bypass the interaction delay if the required hedge is greater than this | 100       |
| targetLeverage         | Target leverage ratio                                                   | 1.5       |
| leverageBuffer         | Leverage tolerance before allowing collateral updates                   | 0.4       |
| minCancelDelay         | Seconds until a pending order can be canceled                           | 120       |


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
