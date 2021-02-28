let arr = [1, 2, 3, 4, 5];
let n = 4;
let output;

for (let i = 0; i < n; i++) {
    let element= arr.shift();
    output = arr;
    output.push(element);
    arr = output;
}

console.log(arr);