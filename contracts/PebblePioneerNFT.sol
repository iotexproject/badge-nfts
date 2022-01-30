// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract PebblePioneerNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    event MinterAdded(address indexed minter);
    event MinterRemoved(address indexed minter);

    mapping(address => bool) private minters;
    string private _uri;

    modifier onlyMinter() {
        require(minters[_msgSender()], 'PebblePioneerNFT: caller is not the minter');
        _;
    }
    
    constructor(
        string memory name,
        string memory symbol,
        string memory uri
    ) ERC721(name, symbol) Ownable() {
        _uri = uri;
        minters[msg.sender] = true;
    }

    function addMinter(address minter) external onlyOwner {
        if (!minters[minter]) {
            minters[minter] = true;
            emit MinterAdded(minter);
        }
    }

    function removeMinter(address minter) external onlyOwner {
        if (minters[minter]) {
            minters[minter] = false;
            emit MinterRemoved(minter);
        }
    }

    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        require(_exists(tokenId), "PebblePioneerNFT: URI query for nonexistent token");
        return string(abi.encodePacked(_uri, tokenId.toString(), ".json"));
    }

    function batchMint(address[] memory receivers, uint256[] memory tokenIDs) public onlyMinter {
        require(
            receivers.length == tokenIDs.length,
            "PebblePioneerNFT: array length dismatch"
        );
        for (uint256 i = 0; i < receivers.length; i++) {
            _safeMint(receivers[i], tokenIDs[i]);
        }
    }
}
