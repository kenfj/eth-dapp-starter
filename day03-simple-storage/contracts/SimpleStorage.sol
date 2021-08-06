pragma solidity ^0.5.0;

contract SimpleStorage {
    // when declare variable outside of function
    // it default to "storage" allocation (saved on blockchain)
    string public data; // = 'mydata'; // it's possible to set initial value

    // when define public variable, solidity automatically create "data" getter function

    // specify memory allocation as temporaly variable
    // if variable name is data, it will shadow the storage data inside this function
    // so need to use _data
    function set(string memory _data) public {
        data = _data;
    }

    // after deploy, confirm if set button works on remix
    // and check "transaction receipt" in the console
    // set button will modify the state of blockchain [so called transaction]

    // view is similar to pure
    // pure: read static value hardcoed in function
    // view: read storage of the smart contaract
    function get() public view returns (string memory) {
        return data;
    }
}
