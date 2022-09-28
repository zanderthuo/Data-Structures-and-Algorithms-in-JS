/**
 * An algorithm is said to run in logarithmic time if its time execution
 * is proportional to the logarithm of the input size, and we mark it as O(log n).
 */

const BinarySearch = (arr, target) => {
    // initialize the left and right pointers
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2); // initializing the middle value
        if (arr[middle] === target) { // check if the middle[] is equal to target
            return middle;
        } else if (arr[middle] < target) {
            start = middle + 1 // if middle value is less than target we will move the left pointer to middle + 1
        } else {
            end = middle - 1 // if the middle value is greater than target we will move the right pointer middle - 1
        }
    }
    // if we can't find the target we return -1;
    return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))