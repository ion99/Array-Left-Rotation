# Array-Left-Rotation

A left rotation operation on an array of size N shifts each of the array's elements one unit to the left. For example, if two left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array and a number, N, perform N left rotations on the array. Then return the updated array.

## Explanation:

Array = [1, 2, 3, 4, 5];

When we perform N=4 left rotations, the Array undergoes the following sequence of changes:

[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]

