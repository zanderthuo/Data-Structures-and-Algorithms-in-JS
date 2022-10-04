/**
 * You are given an array of strings names, and an array heights that consists of distinct positive integers.
 * Both arrays are of length n.For each index i, names[i] and heights[i] denote the name and height of the ith person.
 * Return names sorted in descending order by the people's heights.
 */

// function SortPeople(names, heights) {
//     // Initialize an empty array
//     let result = [];

//     // loop through the names array 
//     for (let i = 0; i < names.length; i++) {
//         // push the names[i] and heights[i] as an object of key value into the array result[]
//         result.push({ names: names[i], heights: heights[i] });
//     }

//     // sort the result array using heights
//     const sortedArray = result.sort((a, b) => b.heights - a.heights);

//     // return the sorted array
//     return sortedArray.map(el => el.names);
// }

// console.log(SortPeople(["Mary", "John", "Emma"], [180, 165, 170]))

function SortPeople(names, heights) {
    // initialize and empty object
    let obj = {};
    // loop through the heights
    for (let i = 0; i < heights.length; i++) {
        // swap height in object and names
        obj[heights[i]] = names[i];
    }

    // sort the heights
    heights.sort((a, b) => b - a);

    // initialize an empty array
    let arr = [];
    // loop through the heights
    for (let i = 0; i < heights.length; i++) {
        // push heights inside the array
        arr.push(obj[heights[i]]);
    }
    return arr;
}