// Solution - 1
/*
function reverseNum(num) {
    const output = num.toString().split('').reverse().join('');
    if (num < 0) {                             //  for negative numbers
        return parseInt(output) * -1;
    }
    return parseInt(output)
}

console.log(reverseNum(-554));
*/
/************************************************************************** */
// Solution - 2

function reverseNum(num) {
    const output = num.toString().split('').reverse().join('');

    return parseInt(output) * Math.sign(num)
}

console.log(reverseNum(765));
