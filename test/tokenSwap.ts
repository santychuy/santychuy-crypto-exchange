import { expect } from 'chai';
import { ethers, waffle } from 'hardhat';

import { SantychuyToken, TokenSwap } from '../src/types/typechain';

describe('Token Swap', () => {
  let tokenSwap: TokenSwap;
  let account: string;
  let account2: string;

  before(async () => {
    const accounts = await ethers.getSigners();

    account = accounts[0].address;
    account2 = accounts[1].address;

    const TokenSwapContract = await ethers.getContractFactory('TokenSwap');

    tokenSwap = (await TokenSwapContract.deploy(200)) as TokenSwap;

    await tokenSwap.deployed();

    const address = await tokenSwap.santychuyToken();

    const contract = (await ethers.getContractAt(
      'SantychuyToken',
      address
    )) as SantychuyToken;

    await contract.approve(tokenSwap.address, ethers.utils.parseUnits('1000'));
  });

  it('Check balance of ETH', async () => {
    const { provider } = waffle;

    const balance = await provider.getBalance(account2);
    const formatBalance = Number(ethers.utils.formatUnits(balance));

    expect(formatBalance).to.be.a('number');
    expect(formatBalance).be.greaterThan(5.0);
  });

  it('Buy some SCHY tokens', async () => {
    const transaction = await tokenSwap.buyTokens({
      value: ethers.utils.parseUnits('2'),
    });

    const { status } = await transaction.wait();

    expect(status).equal(1);
  });

  it('Check balance of SCHY after buying some', async () => {
    const address = await tokenSwap.santychuyToken();

    const contract = (await ethers.getContractAt(
      'SantychuyToken',
      address
    )) as SantychuyToken;

    const balance = await contract.balanceOf(account);
    const formatBalance = ethers.utils.formatUnits(balance);

    expect(formatBalance).to.equal('400.0');
  });

  it('Sell SCHY token from the balance of the same account', async () => {
    const tokenSell = ethers.utils.parseUnits('100');

    const transaction = await tokenSwap.sellTokens(tokenSell);

    const { status } = await transaction.wait();

    expect(status).equal(1);
  });
});
