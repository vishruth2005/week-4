const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying SimpleNFT contract with account:", deployer);

  const simpleNFT = await deploy("SimpleNFT", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 1,
  });

  console.log("SimpleNFT deployed to:", simpleNFT.address);
  
  // Verify the contract on Etherscan
  if (network.name !== "hardhat") {
    try {
      await hre.run("verify:verify", {
        address: simpleNFT.address,
        constructorArguments: [],
      });
    } catch (error) {
      console.error("Error verifying contract:", error);
    }
  }
};

module.exports.tags = ["SimpleNFT"];