import { expect } from 'chai';
import { ethers } from 'hardhat';

import { SantychuyToken } from '../src/types/typechain';

describe('Santychuy Token', () => {
  let santychuyToken: SantychuyToken;

  before(async () => {
    const SantychuyTokenContract = await ethers.getContractFactory(
      'SantychuyToken'
    );

    santychuyToken = (await SantychuyTokenContract.deploy(
      'Santychuy Token',
      'SCHY'
    )) as SantychuyToken;

    await santychuyToken.deployed();
  });

  it('Get Balance of Contract', async () => {
    const balance = await santychuyToken.balanceOf(santychuyToken.address);

    expect(balance.toString()).to.be.a('string');
  });
});
