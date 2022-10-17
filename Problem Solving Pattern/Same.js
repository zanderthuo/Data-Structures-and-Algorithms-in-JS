//Write a function called same which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of the value must be the same.


function same(arr1, arr2) {
    // check if thw two arrays are of same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // create two empty objects to count frequency of items in arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // loop through arr1 and count items in objects
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // loop through arr2 and count items in objects
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // loop through frequencyCounter1 object
    for (let key in frequencyCounter1) {
        // check if the key is squared in the frequencyCounter2 object
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // check if the values correspond in both objects
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }

    }
    return true
}

console.log(same([1, 2, 3, 2, 5], [1, 4, 9, 4, 25]))