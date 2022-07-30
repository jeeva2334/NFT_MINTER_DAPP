const {expect} = require("chai");
const {ethers} = require("hardhat");

describe ("MYNFT",function(){
  it("Minting",async function(){
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();
  })
})