// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface StakingEncoding {
   function createStake(
       string calldata candName,
       uint256 amount,
       uint32 duration,
       bool autoStake,
       uint8[] calldata data
    ) external;
}
