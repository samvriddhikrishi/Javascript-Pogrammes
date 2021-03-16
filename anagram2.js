// find all the anagrams is number of each chracter in both strings should be same

let arr = ['abc', 'cba', 'dell', 'leld', 'boo'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("").sort().join("")
    if (obj[word]) {
        obj[word].push(arr[i])
    } else {
        obj[word] = [];
        obj[word].push(arr[i])
    }
}

const keys = Object.keys(obj);
for (let j = 0; j < keys.length; j++) {
    if (obj[keys[j]].length > 1){
        console.log(obj[keys[j]])
    }
}
