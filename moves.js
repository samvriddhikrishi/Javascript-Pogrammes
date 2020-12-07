let arr = [-1, -1, 2];
let moves = 0;

let res = arr.sort(function (a, b) {
    return a - b;
});

for (let i = res.length; i > 0; i--) {
    if (i == res[i-1]) {
        continue;
    } else {
        moves= i-res[i-1];
    }
}

console.log(moves);