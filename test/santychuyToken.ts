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

  it('Get correct symbol and name', async () => {
    const symbol = await santychuyToken.symbol();
    const tokenName = await santychuyToken.name();

    expect(symbol).equal('SCHY');
    expect(tokenName).equal('Santychuy Token');
  });

  it('Get correct total supply count of 100,000', async () => {
    const totalSupply = await santychuyToken.totalSupply();

    expect(ethers.utils.formatUnits(totalSupply)).equal('100000.0');
  });

  it('Do successful transfer of SCHY tokens to one account to another', async () => {
    const accounts = await ethers.getSigners();
    const [account1, account2] = accounts;

    const approveTransaction = await santychuyToken.approve(
      account1.address,
      ethers.utils.parseUnits('2.0', 18)
    );

    await approveTransaction.wait();

    const transaction = await santychuyToken.transferFrom(
      account1.address,
      account2.address,
      ethers.utils.parseUnits('2.0', 18)
    );

    const { status } = await transaction.wait();

    expect(status).equal(1);
  });

  it('Check balance of 2 accounts with different balance', async () => {
    const accounts = await ethers.getSigners();
    const [account1, account2] = accounts;

    const balance = await santychuyToken.balanceOf(account1.address);
    const balance2 = await santychuyToken.balanceOf(account2.address);

    expect(ethers.utils.formatUnits(balance)).not.equal(
      ethers.utils.formatUnits(balance2)
    );
  });
});
