# Crud Smart Contract

* Custom type `struct`

## Code Smart Contract on Remix

* create `Crud.sol` at https://remix.ethereum.org/
* compile, deploy and run functions

## Local Test

```bash
truffle init
truffle create contract Crud
# save the code on Remix as contracts/Crud.sol
truffle compile
truffle create migration Crud
# update migrations/xxx_crud.js
# create test/crud.js
truffle test
```

## Frontend

```bash
truffle migrate   # == truffle deploy

# create package.json
npm init --yes
# update scripts as
# "start": "echo \"Error: nwebpack-dev-server"
npm install --save-dev web3 webpack webpack-cli webpack-dev-server
npm install --save-dev truffle-hdwallet-provider
# OR npm install
npm start
# open http://localhost:8080/
```

## Deploy to Ropsten public testnet

* Why Ropsten
  - https://forum.eattheblocks.com/t/which-ethereum-testnet-to-use/47
* cannot use Ganache - need to use these two to deploy
  - geth: https://github.com/ethereum/go-ethereum
  - parity: https://www.parity.io/
* but instead of these two, use INFURA
  - (free API service to connect Ethereum network includes Ropsten)
  - https://infura.io/
  - create account then use free endpoint to access blockchain
* add config in `truffle-config.js`

```bash
truffle develop
# check the output "Accounts" and "Mnemonic"

# to get free ropsten ether from faucet,
# copy first Account and paste to Ropsten Ethereum Faucet
# * https://faucet.ropsten.be/ (didn't work for me)
# * https://testnet.help/en/ethfaucet/ropsten (worked!)

# click the "transaction hash" link which will open
# https://ropsten.etherscan.io/
# (etherscan: blockchain explorer for Ethereum)

# create account in https://infura.io/
# (free API service to connect Ethereum network includes Ropsten)

# create project for example "etb-tutorial"
# select ENDPOINT Ropsten > copy URL

# npm install -D @truffle/hdwallet-provider

# create .secret
```

```json
{
  "mnemonic": "words words words",
  "projectId": "the last part of INFURA endpoint url"
}
```

```bash
# add config in truffle-config.js

# restart truffle console
truffle develop
truffle(develop)> migrate --reset --network ropsten
```

## Reference

* 意外と簡単？Ethereum Blockchain アプリのローカル開発手順。
  - https://blog.vivita.io/entry/2018/08/06/070000
