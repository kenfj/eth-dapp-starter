// ABI is available from build/contracts/SimpleSmartContract.json
var contractABI = [];
// the address is available from the output of "migrate"
var contractAddress = '0xb7c0943DDaC05e31Cbb4afb41A8aAAb6f9D21643';
// url is available from the output of "truffle develop"
var url = 'http://127.0.0.1:9545/';

var web3 = new Web3(url);
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
    .then(console.log);
