// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "./SantychuyToken.sol";

contract TokenSwap {
    SantychuyToken santychuyToken;

    uint256 public tokenPerEth;

    event BuyTokens(address buyer, uint256 amountETH, uint256 amountTokens);
    event SellTokens(address seller, uint256 amountTokens, uint256 amountETH);

    constructor(uint256 _tokenPerEth, address tokenAddress) {
        tokenPerEth = _tokenPerEth;
        santychuyToken = SantychuyToken(tokenAddress);
    }

    function buyTokens() public payable returns (uint256 tokenAmount) {
        require(msg.value > 0, "Send ETH to start the operation");

        uint256 amountToBuy = msg.value * tokenPerEth;

        uint256 vendorBalance = santychuyToken.balanceOf(address(this));
        require(vendorBalance >= amountToBuy, "Vendor has not enought tokens");

        (bool sent) = santychuyToken.transfer(msg.sender, amountToBuy);
        require(sent, "Failed to transfer");

        emit BuyTokens(msg.sender, msg.value, amountToBuy);

        return amountToBuy;
    }

    function sellTokens(uint256 tokenAmountToSell) public payable returns (uint256 ethAmount) {
        require(tokenAmountToSell > 0, "Specify an amount");

        uint256 userBalance = santychuyToken.balanceOf(msg.sender);
        require(userBalance >= tokenAmountToSell, "Your balance is lower than the amount of tokens you want to sell");

        uint256 amountOfETHToTransfer = tokenAmountToSell / tokenPerEth;
        uint256 ownerETHBalance = address(this).balance;
        require(ownerETHBalance >= amountOfETHToTransfer, "Vendor has not enough funds to accept the sell request");

        payable(msg.sender).transfer(amountOfETHToTransfer);

        (bool sent) = santychuyToken.transferFrom(msg.sender, address(this), tokenAmountToSell);
        require(sent, "Failed to transfer tokens");

        (sent,) = msg.sender.call{value: amountOfETHToTransfer}("");
        require(sent, "Failed to send ETH to the user");

        return amountOfETHToTransfer;
    }
}