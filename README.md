# Ethereum Dapp Starter

Quick start sample code to build Ethereum Dapp

## Basic Terms

* Smart Contract: small program run on Ethereum blockchain
* Solidity: popular language to build smart contract
* Remix: online IDE for solidity
  - https://remix.ethereum.org/
* Truffle: framework to develop and test smart contract
  - https://www.trufflesuite.com/
* Ganache: local blockchain for development provided by Truffle framework
  - included in Truffle so you don't need to install Ganache separately
* Web3: enables client side app to talk to blockchain (JS library)
* Metamask: enable browser to talk to blockchain (browser extension)

## Sample Dapps

* `SimpleSmartContract`: contract which have no data no method

## Setup Notes

* Remix: Solidity Compiler > check Auto compile
* install Truffle
  - https://nodejs.org/en/ (install LTS)
  - `npm install -g truffle`
* check version
```bash
truffle version
Truffle v5.1.44 (core: 5.1.44)
Solidity v0.5.16 (solc-js)
Node v12.18.0
Web3.js v1.2.1

solcjs --version
0.7.1+commit.f4a555be.Emscripten.clang
# NOTE: this solc-js version difference might cause error in VSCode
```
* install VSCode Solidity extension
  - https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity
  - if pragma version error when open `.sol`, set version as explained in above
  - `"solidity.compileUsingRemoteVersion": "v0.5.16+commit.9c3226ce"`
* clone Bootstrap code
  - `git clone https://gitlab.com/jklepatch/eattheblocks-pro`
  - `cd eattheblocks-pro/dapp-30/day1-simple-smart-contract/tests/`
* Truffle project structure
  - `contracts`: for smart contract
  - `test`: for tests
  - `migrations`: deploy smart contract to blockchain
  - `truffle-config.js`: configuration file for Truffle
* unit test: https://mochajs.org/
* setup empty truffle project: `truffle init .`
* run test: `truffle test`
* install static-server: `npm i -g static-server`
* create `package.json`: `npm init --yes`
  - update `"scripts"` as `"start": "static-server public"`

## Web Interface

* Client side
  - Wallet: Metamask
  - Frontend: Web3
* Blockchain (Ganache)
  - Ethereum node
  - Smart contract
* Backend
  - static content server

## Reference

* Build 5 Dapps on the Ethereum Blockchain
  - https://www.youtube.com/watch?v=8wMKq7HvbKw
* Build a Dapp in 20 Minutes (without Truffle)
  - https://www.youtube.com/watch?v=KkZ6iYnSDRw
  - https://github.com/dappuniversity/20_minute_dapp
