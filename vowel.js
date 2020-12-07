// find the number of vowels present in a string

// solution - 1
/*
function vowCount(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count += 1;
        }
    }
    return count;
}

console.log(vowCount("Why"));
*/

/*************************************************************************************/

// Solution - 2 
// we can use "includes" array helper 

/*
function vowCount(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowCount("hello"));
*/

/********************************************************************************************/

// Solution - 3

function vowelCount(str) {
    const matches = str.match((/[aeiou]/gi));
    return matches ? matches.length : 0;
}

console.log(vowelCount("krishna"))
