// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract IoTeXDev is ERC1155, Ownable {
    constructor(string memory uri_) ERC1155(uri_) {
    }

    function setURI(string memory uri_) external onlyOwner {
        _setURI(uri_);
    }

    function mint(address account, uint256 id, uint256 amount) external onlyOwner {
        _mint(account, id, amount, "");
    }
}
