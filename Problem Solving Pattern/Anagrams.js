/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of
 * another, such as cinema, formed from iceman
 */

function Anagram(first, second) {
    // check if the two strings are of the same length
    if (first.length !== second.length) {
        return false;
    }

    // initialize the empty object
    let lookup = {}

    // loop through the first string
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // check if letter exists, increment if it exists, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // loop through the second string
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // check if you can find a letter or if letter is zero then not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(Anagram('anagrsam', 'anagram'))