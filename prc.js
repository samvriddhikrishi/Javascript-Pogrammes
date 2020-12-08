function moves(arr) {
    const len = arr.sort(function (a, b) {return a > b});
    return len;

}

console.log(moves([-1,2,10]));
