// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SimpleNFT is ERC721 {
    uint256 private _nextTokenId;

    constructor() ERC721("SimpleNFT", "SNFT") {
        _nextTokenId = 0;
    }

    function safeMint(address to) public {
        uint256 tokenId = _nextTokenId;
        _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }
}