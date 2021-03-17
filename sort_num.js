// sort array of numbers without built in methods

let arr = [1, 3, 4, 5, 8, 9, 2, 6, 6];

let temp;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);

