/**
 * You are given an array of strings names, and an array heights that consists of distinct positive integers.
 * Both arrays are of length n.For each index i, names[i] and heights[i] denote the name and height of the ith person.
 * Return names sorted in descending order by the people's heights.
 */

function SortPeople(names, heights) {
    // initialize and empty object
    let obj = {};
    // loop through the heights
    for (let i = 0; i < heights.length; i++) {
        // add the key value pair of height and names
        obj[heights[i]] = names[i];
    }

    // sort the heights
    heights.sort((a, b) => b - a);

    // initialize an empty array
    let arr = [];
    // loop throught the heights
    for (let i = 0; i < heights.length; i++) {
        // push heights inside the array
        arr.push(obj[heights[i]]);
    }
    return arr;
}