//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CourseMarketplace {
    //used to create a user-defined data type in Solidity.
    //ued to define a set of values for a variable
    enum State {
        Purchased,
        Activated,
        Deactivated
    }

    //data structure used to represent a course
    struct Course {
        uint id;
        uint price;
        bytes32 proof;
        address owner;
        State state;
    }

    //mapping of courseHash to Course data
    mapping(bytes32 => Course) private ownedCourses;

    //mapping of courseID to courseHash
    mapping(uint => bytes32) private ownedCourseHash;

    //number of all courses + id of the course
    uint private totalOwnedCourses;

    address payable private owner;

    constructor() {
        setContractOwner(msg.sender);
    }

    // Course already has an Owner
    error CourseHasOwner();

    function purchaseCourse(
        bytes16 courseId, //0x00000000000000000000000000003130
        bytes32 proof ////0x0000000000000000000000000000313000000000000000000000000000003130
    ) external payable {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if (hasCourseOwnership(courseHash)) {
            revert CourseHasOwner();
        }

        uint id = totalOwnedCourses++;

        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function getCourseCount() external view returns (uint) {
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint index) external view returns (bytes32) {
        return ownedCourseHash[index];
    }

    function getCourseByHash(
        bytes32 courseHash
    ) external view returns (Course memory) {
        return ownedCourses[courseHash];
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
        owner.transfer(10);
    }

    function hasCourseOwnership(
        bytes32 courseHash
    ) private view returns (bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
