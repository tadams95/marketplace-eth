//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {

    enum State{
        Purchase,
        Activated,
        Deactivated
    }

    struct Course {
        uint id;
        uint price;
        bytes32 proof;
        address owner;
        State state;
    }

}