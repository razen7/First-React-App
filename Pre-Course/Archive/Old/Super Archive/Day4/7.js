// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

function isSubset(arr1, arr2) {
    for (const v of arr1) {
        if (!arr2.some(val => val === v)) return false;
    }
    return true;
}
console.log(
isSubset([3, 2, 5], [5, 3, 7, 9, 2]) // should return true
,
isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) // should return true
,
isSubset([1, 2], [3, 5, 9, 1]) // should return false
)