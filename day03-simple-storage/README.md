# Simple Storage Smart Contract

## Key Points

* function execution types
  - __transaction__: modify the state of the blockchain
  - __call__: readonly function (used `view` keyword)
* functions 2 types
  - `view`: read storage of the smart contract
  - `pure`: read static value hardcoded in function

## Code Smart Contract on Remix

* create `SimpleStorage.sol` at https://remix.ethereum.org/
  - `pure`: read only function (not modify the contract)
* compile, deploy and run the `set` `get` function

## Local Test

* `truffle init .` and save it as `contracts/SimpleStorage.sol`
* create `migrations/2_simple_storage.js` (necessary for `truffle test`)
* create `test/simpleStorage.js` and run `truffle test`

## Deploy contract on local blockchain

* run local blockchain `truffle develop` and deploy `migrate --reset`
  - copy `abi` in `build/contracts/SimpleStorage.json`
  - copy `address` in the output of `migrate --reset`
  - `truffle compile` also works
* copy `public` and update `bundle.js`
  - instantiate web3
  - instantiate contract instance
  - call smart contract function with contract instance
* start server by `static-server public`
