require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("./tasks/mint-nft");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.27",
      },
    ],
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};