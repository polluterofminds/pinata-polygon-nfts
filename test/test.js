const { expect } = require("chai");

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0xd72203b26D887a60Af3a11178eF4A48BE8DecbA6", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)   
  });
});
