import { ethers } from 'hardhat';

async function main() {
  const Token = await ethers.getContractFactory('SantychuyToken');
  const token = await Token.deploy('Santychuy Token', 'SCHY');

  await token.deployed();

  console.log('SantychuyToken deployed to:', token.address);

  const TokenSwap = await ethers.getContractFactory('TokenSwap');
  const tokenSwap = await TokenSwap.deploy(200, token.address);

  await tokenSwap.deployed();

  console.log('Token Swap deployed to:', tokenSwap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
