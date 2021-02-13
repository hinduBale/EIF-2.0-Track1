// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;

contract DeadTransc {
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        require(c >= a);
        c = a + b;
    }
}

contract BackUp is DeadTransc {

    address payable owner;
    address payable preSetAddress;
    
    uint256 _duplicateBalance = 10000;
    uint256 deployedBlockNumber=0;
    uint256 currentBlockNumber=0;

    mapping(address => uint) balanceCheck;

    constructor() public {
        owner = msg.sender;
        balanceCheck[owner] = _duplicateBalance;
    }
    
    function checkBalance(address inputAddress) public returns (uint balance) {
        return balanceCheck[inputAddress];
    }

    function stayAlive() public returns(uint) {
        require(msg.sender == owner , "Invalied User. Only the current Owner can access.");
        deployedBlockNumber = block.number;
        return block.number;
    }
    
    function inheritToSecondOwner(address payable addr) public {
        require(msg.sender == owner , "Invalied User. Authentication failed.");
        preSetAddress = addr;
    }

    function checkIsDead() public payable returns (bool) {
        currentBlockNumber = block.number;
        if( (currentBlockNumber - deployedBlockNumber ) > 10 ) {
            balanceCheck[preSetAddress] = safeAdd( balanceCheck[preSetAddress] , balanceCheck[owner] );
            balanceCheck[owner] = 0;
            owner = preSetAddress;
            selfdestruct(preSetAddress);
            return true;
        }
        else {
            return false;
        }
    }

}