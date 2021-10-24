const { expect } = require("chai");
const { ethers } = require("hardhat");

before(async () => {
    //A Signer in ethers.js is an object that represents an Ethereum account
    [deployer, user0, user1, user2] = await ethers.getSigners();
    //A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, 
    //so Token here is a factory for instances of our token contract.
    RewardTokens = await ethers.getContractFactory("RewardTokens", deployer);
    Stacker = await ethers.getContractFactory("Stacker", deployer);
});

beforeEach(async () => {
  // Calling deploy() on a ContractFactory will start the deployment, and return a Promise that resolves to a Contract. 
  // This is the object that has a method for each of your smart contract functions.
  rewardTokens = await RewardTokens.deploy("RewardToken","RT");
  // await rewardTokens.connect(deployer).initialize();

  stacker = await Stacker.deploy(rewardTokens.address);
  // await stacker.connect(deployer).initialize();
});

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
      console.log(RewardTokens);
      console.log(Stacker.address);
  });
});
