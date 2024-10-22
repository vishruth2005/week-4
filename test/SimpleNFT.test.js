const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleNFT", function () {
  let simpleNFT;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    
    const SimpleNFT = await ethers.getContractFactory("SimpleNFT");
    simpleNFT = await SimpleNFT.deploy();
    // Wait for the deployment transaction to be mined
    await simpleNFT.waitForDeployment();
  });

  it("Should mint a new NFT", async function () {
    await simpleNFT.safeMint(owner.address);
    expect(await simpleNFT.balanceOf(owner.address)).to.equal(1);
  });

  it("Should increment token ID correctly", async function () {
    await simpleNFT.safeMint(owner.address);
    await simpleNFT.safeMint(owner.address);
    expect(await simpleNFT.balanceOf(owner.address)).to.equal(2);
    expect(await simpleNFT.totalSupply()).to.equal(2);
  });

  it("Should emit Transfer event on mint", async function () {
    await expect(simpleNFT.safeMint(owner.address))
      .to.emit(simpleNFT, "Transfer")
      .withArgs(ethers.ZeroAddress, owner.address, 0);
  });
});