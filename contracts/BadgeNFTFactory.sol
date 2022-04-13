// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

interface NFTInitializer {
    function initialize(
        string memory name,
        string memory symbol,
        string memory uri,
        bool withTokenId
    ) external;

    function transferOwnership(address newOwner) external;
}

contract BadgeNFTFactory is Ownable {
    address public instance;
    
    constructor(address _instance) {
        instance = _instance;
    }

    function setInstance(address _instance) external onlyOwner {
        instance = _instance;
    }

    function createNFT(
        string memory name,
        string memory symbol,
        string memory uri,
        bool withTokenId
    ) external returns (address) {
        address token = Clones.clone(instance);
        NFTInitializer(token).initialize(name, symbol, uri, withTokenId);
        NFTInitializer(token).transferOwnership(msg.sender);

        return token;
    }
}
