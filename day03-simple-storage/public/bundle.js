const contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "data",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_data",
                "type": "string"
            }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const contractAddress = '0xb7c0943DDaC05e31Cbb4afb41A8aAAb6f9D21643';
const url = 'http://127.0.0.1:9545/';

const web3 = new Web3(url);
const simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    const $setData = document.getElementById('setData');
    const $data = document.getElementById('data');
    let accounts = [];

    web3.eth.getAccounts()
        .then(_accounts => {
            accounts = _accounts;
        });

    const getData = () => {
        simpleStorage.methods
            .get()
            .call()
            .then(result => {
                $data.innerHTML = result;
            });
    };

    getData();

    $setData.addEventListener('submit', e => {
        e.preventDefault();
        const data = e.target.elements[0].value;
        // Note: Web3 vs TruffleContract (syntax differ from test)
        simpleStorage.methods
            .set(data)
            .send({ from: accounts[0] })
            .then(getData);
    });
});
