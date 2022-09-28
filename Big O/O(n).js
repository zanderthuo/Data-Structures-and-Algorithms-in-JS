/**
 * The execution time of the function is directly proportional to the input size.
 * The run time of the function grows as the input grows, and we mark it as O(n).
 */

const printAllElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
    }
    return null;
}


console.log(printAllElement([1, 2, 3, 4, 5]))