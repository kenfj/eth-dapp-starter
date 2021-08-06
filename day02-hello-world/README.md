# Hello World Smart Contract

## Code Smart Contract on Remix

* create `HelloWorld.sol` at https://remix.ethereum.org/
  - `pure`: read only function (not modify the contract)
* compile, deploy and run the `hello` function

## Local Test

* `truffle init .` and save it as `contracts/HelloWorld.sol`
* create `migrations/2_hello_world.js` (necessary for `truffle test`)
* create `test/helloWorld.js` and run `truffle test`

## Deploy contract on local blockchain

* run local blockchain `truffle develop` and deploy `migrate --reset`
  - copy `abi` in `build/contracts/HelloWorld.json`
  - copy `address` in the output of `migrate --reset`
  - `truffle compile` also works
* copy `public` and update `bundle.js`
  - instantiate web3
  - instantiate contract instance
  - call smart contract function with contract instance
* start server by `static-server public`
