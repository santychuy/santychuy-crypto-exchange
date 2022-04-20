import { ethers } from 'hardhat';

async function main() {
  const Token = await ethers.getContractFactory('SantychuyToken');
  const token = await Token.deploy('Santychuy Token', 'SCHY');

  await token.deployed();

  console.log('SantychuyToken deployed to:', token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
