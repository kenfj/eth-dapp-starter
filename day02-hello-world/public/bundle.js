var contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
];
var contractAddress = '0xb7c0943DDaC05e31Cbb4afb41A8aAAb6f9D21643';
var url = 'http://127.0.0.1:9545/';

var web3 = new Web3(url);
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
        .then(result => {
            document.getElementById('hello').innerHTML = result;
        });
});
