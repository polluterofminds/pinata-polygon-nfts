const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");  
  const URI = "ipfs://QmZu6UUBHo2bHLiRMZCoQf6hiSmnFVVzWqyEAyF9SJwxhx"
  const WALLET_ADDRESS = "YOUR WALLET ADDRESS"
  const CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"
  const contract = NFT.attach(CONTRACT_ADDRESS);

  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
