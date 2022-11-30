pragma solidity ^0.8.7;

contract Demo {
   uint public balance;

   constructor() public 
   {
       balance = 0;
   }

   function contribute() public payable 
   {
       // msg.value is the value of Ether sent in a transaction 
       balance += msg.value;
   }

}
