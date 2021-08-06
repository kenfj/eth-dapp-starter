pragma solidity ^0.5.0;

contract AdvancedStorage {
    uint256[] public ids;

    function add(uint256 id) public {
        ids.push(id);
    }

    function get(uint256 position) public view returns (uint256) {
        return ids[position];
    }

    // simple type (int): no need to specify memory allocation
    // complex type (int[]): need to specify memory allocation
    function getAll() public view returns (uint256[] memory) {
        return ids;
    }

    function length() public view returns (uint256) {
        return ids.length;
    }
}
