# 📝 Assignment for Week 4: NFTs and the Metaverse

In this week's assignment, we will work on building a simple NFT contract, setting up Hardhat tasks, and creating test cases to ensure proper functionality. The tasks involve deploying, minting, and interacting with an NFT smart contract, which we'll build using OpenZeppelin and Hardhat.

## Exercise Breakdown

### Exercise 1: Create Your Solidity Contract
You will write a simple ERC721-based contract for minting NFTs using OpenZeppelin libraries.

The contract file is located at:

- [contracts/MyNFT.sol](contracts/MyNFT.sol)

### Exercise 2: Create Hardhat Tasks for Deploying and Minting NFTs
We will create tasks to deploy the NFT contract and mint NFTs using Hardhat.

The task file is located at:

- [tasks/nft.ts](tasks/nft.ts)

### Exercise 3: Create Helpers
The helpers for interacting with our contract and environment variables are implemented in the following files:

- [lib/contract.ts](lib/contract.ts)
- [lib/env.ts](lib/env.ts)
- [lib/provider.ts](lib/provider.ts)
- [lib/wallet.ts](lib/wallet.ts)

### Exercise 4: Create Tests
We will write unit and integration tests to validate the NFT contract functionality. The tests will check minting functionality and balance tracking.

Test files:

- [test/MyNFT.spec.ts](test/MyNFT.spec.ts) – Unit tests for the NFT contract.
- [test/tasks.spec.ts](test/tasks.spec.ts) – Integration tests for Hardhat tasks.
- [test/test-helpers.ts](test/test-helpers.ts) – Helpers used in the tests.

### Exercise 5: Hardhat Configuration
We will configure Hardhat to use the Alchemy API and connect to the Ropsten test network.

Configuration file:

- [hardhat.config.ts](hardhat.config.ts)

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/nitk-surathkal-unidao/week-3.git
   cd week-3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```bash
   ALCHEMY_API_KEY=your-alchemy-api-key
   ETH_PRIVATE_KEY=your-private-key
   ```

4. Compile the smart contracts:

   ```bash
   npx hardhat compile
   ```

5. Deploy the contract:

   ```bash
   npx hardhat deploy-contract
   ```

6. Mint an NFT:

   ```bash
   npx hardhat mint-nft --tokenUri "https://example.com/token-metadata"
   ```

---

## Running Tests

To run the test cases, execute:

```bash
npx hardhat test
```

Example output:

```
mintNft
  ✓ calls through and returns the transaction object (60ms)

MyNFT
  mintNft
    ✓ emits the Transfer event (60ms)
    ✓ returns the new item ID
    ✓ increments the item ID (57ms)
    ✓ cannot mint to address zero
  balanceOf
    ✓ gets the count of NFTs for this address

6 passing (2s)
✨  Done in 5.66s.
```

---

## Resources

- [OpenZeppelin Documentation](https://docs.openzeppelin.com/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)

## What to Submit

- A link to your GitHub Pull Request with the implemented contract and tasks.

- Head over to the Coursework submission link: [Google Form](https://forms.gle/link) to submit your work.

Inform your UniDAO lead once the submission has been made.

Feel free to ask any questions or seek clarification on Discord.
