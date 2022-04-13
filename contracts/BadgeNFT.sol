// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

contract BadgeNFT is ERC721EnumerableUpgradeable, OwnableUpgradeable {
    using StringsUpgradeable for uint256;

    event MinterAdded(address indexed minter);
    event MinterRemoved(address indexed minter);

    mapping(address => bool) private minters;
    string private _uri;
    bool private _withTokenId;

    modifier onlyMinter() {
        require(minters[_msgSender()], 'BadgeNFT: caller is not the minter');
        _;
    }

    function initialize(
        string memory name,
        string memory symbol,
        string memory uri,
        bool withTokenId
    ) external initializer {
        __Ownable_init();
        __ERC721_init(name, symbol);
        _uri = uri;
        _withTokenId = withTokenId;
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

    function setTokenURI(string memory uri) external onlyMinter {
        _uri = uri;
    }

    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        require(_exists(tokenId), "BadgeNFT: URI query for nonexistent token");
        if (_withTokenId) {
            return string(abi.encodePacked(_uri, tokenId.toString(), ".json"));
        }
        return _uri;
    }

    function batchMint(address[] memory receivers, uint256[] memory tokenIDs) external onlyMinter {
        require(
            receivers.length == tokenIDs.length,
            "BadgeNFT: array length dismatch"
        );
        for (uint256 i = 0; i < receivers.length; i++) {
            _safeMint(receivers[i], tokenIDs[i]);
        }
    }

    function mint(address receiver, uint256 tokenID) external onlyMinter {
        _safeMint(receiver, tokenID);
    }
}
