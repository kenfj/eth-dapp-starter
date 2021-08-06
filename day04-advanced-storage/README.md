# Advanced Storage Smart Contract

Store array instead of string

## Code Smart Contract on Remix

* create `AdvancedStorage.sol` at https://remix.ethereum.org/
  - `pure`: read only function (not modify the contract)
* compile, deploy and run functions

## Local Test

* `truffle init .` and save it as `contracts/AdvancedStorage.sol`
* create `migrations/2_advanced_storage.js` (necessary for `truffle test`)
* create `test/advancedStorage.js` and run `truffle test`

## Setup Web Client

* create `webpack.config.js`
* create `package.json` by `npm init --yes`
* update `scripts` as `"start": "webpack-dev-server"`
* install packages `npm install`
  - `npm install --save-dev web3 webpack webpack-cli webpack-dev-server`
* `npm start` open http://localhost:8080/

## Deploy contract on local blockchain

* run local blockchain `truffle develop` and deploy `migrate --reset`
* copy `public/index.html` and update `client/index.js`

## How to MetaMask

* click `Import wallet` to use local blockchain
  - `Seed phrase`: truffle console > `Mnemonic` > copy paste these words
  - input password and import
* Add custom network
  - click icon > Network > Custom RPC
  - Network Name: `Ganache`, New RPC URL: `http://localhost:9545` > Save
* Connect Request notification: connect Dapp and account
  - now the MetaMask can see the account
* click Confirm to accept the update
* trouble shooting
  - try Settings > Advanced > Reset Account
  - logout and login

## Reference

* Big Number library
  - https://github.com/indutny/bn.js
