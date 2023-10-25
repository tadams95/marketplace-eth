//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {
    //used to create a user-defined data type in Solidity.
    //ued to define a set of values for a variable
    enum State {
        Purchase,
        Activated,
        Deactivated
    }

    //data structure used to represent a course
    struct Course {
        uint id;
        uint price;
        bytes32 proof; //0x0000000000000000000000000000313000000000000000000000000000003130
        address owner;
        State state;
    }

    function purchaseCourse(
        bytes16 courseId,
        bytes32 proof
    ) external payable returns (bytes32) {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        return courseHash;
    }
}
