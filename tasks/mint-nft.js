// Create a new file named 'mint-nft.js' in the 'tasks' directory of your Hardhat project
// tasks/mint-nft.js

task("mint-nft", "Mints a new NFT")
  .addParam("to", "The address that will receive the NFT")
  .setAction(async (taskArgs, hre) => {
    const SimpleNFT = await hre.ethers.getContractFactory("SimpleNFT");
    // Replace with your actual deployed contract address
    const simpleNFT = await SimpleNFT.attach("0x4EeeF3532d691e778A3b524d2F0610889A4800db");

    console.log("Minting NFT...");
    const tx = await simpleNFT.safeMint(taskArgs.to);
    await tx.wait();

    console.log(`NFT minted successfully to: ${taskArgs.to}`);
  });

module.exports = {};