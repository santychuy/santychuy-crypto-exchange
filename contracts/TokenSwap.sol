// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "./SantychuyToken.sol";
import "hardhat/console.sol";

contract TokenSwap {
    SantychuyToken public santychuyToken;

    uint256 public tokenPerEth;

    event BuyTokens(address buyer, uint256 amountETH, uint256 amountTokens);
    event SellTokens(address seller, uint256 amountTokens, uint256 amountETH);

    constructor(uint256 _tokenPerEth) {
        tokenPerEth = _tokenPerEth;
        santychuyToken = new SantychuyToken("Santychuy Token", "SCHY");
    }

    function buyTokens() external payable {
        uint256 amountToBuy = msg.value * tokenPerEth;
        uint256 dexBalance = santychuyToken.balanceOf(address(this));

        require(amountToBuy > 0, "Send ETH to start the operation");
        require(amountToBuy <= dexBalance, "Not enough tokens in DEX");

        (bool sent) = santychuyToken.transfer(msg.sender, amountToBuy);
        require(sent, "Failed to buy tokens");

        emit BuyTokens(msg.sender, msg.value, amountToBuy);
    }

    function sellTokens(uint256 _tokenAmountToSell) external {
        require(_tokenAmountToSell > 0, "Specify an amount");

        uint256 allowance = santychuyToken.allowance(msg.sender, address(this));

        require(allowance >= _tokenAmountToSell, "Check the token allowance");

        uint256 userBalance = santychuyToken.balanceOf(msg.sender);

        uint256 amountOfETHToTransfer = _tokenAmountToSell / tokenPerEth;
        uint256 ownerETHBalance = address(this).balance;
        require(ownerETHBalance >= amountOfETHToTransfer, "DEX has not enough funds to accept the sell request");
        require(userBalance >= _tokenAmountToSell, "Your balance is lower than the amount of tokens you want to sell");

        (bool sent) = santychuyToken.transferFrom(msg.sender, address(this), _tokenAmountToSell);
        require(sent, "Failed to transfer tokens");

        payable(msg.sender).transfer(amountOfETHToTransfer);

        emit SellTokens(msg.sender, _tokenAmountToSell, amountOfETHToTransfer);
    }
}