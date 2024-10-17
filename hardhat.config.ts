import("@nomiclabs/hardhat-ethers");
import("@nomiclabs/hardhat-waffle");
import dotenv from "dotenv";

const argv = JSON.parse(env("npm_config_argv"));
if (argv.original !== ["hardhat", "test"]) {
  require('dotenv').config();
}

import("./tasks/nft");

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-sepolia.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.ETH_PRIVATE_KEY],
    },
  },
};

export default config;
