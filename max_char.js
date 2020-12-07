// Solution - 1

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let charMax;

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            charMax = char;
        }
    }
   return charMax;
}

console.log(maxChar("abccccd"));


/****************************************************************************** */

// Solution - 2

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let charMax;

    for (let char of str) {
        charMap[char] = charMap[char] + 1 ? charMap[char] + 1 : 1;
        // ( OR )
        // charMap[char] = charMap[char]+1 ||  1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            charMax = char;
        }
    }
    return charMax;
}

console.log(maxChar("abbcddd"));
