// solution-1
/*function strRev(str) {
    let str1 = str;
    let arr = str1.split('');
    let str2 = ""
    for (var i = arr.length - 1; i >= 0; i--) {
        str2 = str2.concat(arr[i]);
        if (i == 0) {
            console.log(str2)
        }
    }
}

strRev("krishna"); */

/********************************************************************************/

// Solution-2

// function strRev(str) {
//     let str1 = str.split('');
//     str1.reverse();
//     let output = str1.join('');
//     console.log(output);
// }

// strRev("krishna");

/************************************************************************* */

// solution-3

// function strRev(str) {
//     let str1 = str.split('').reverse().join('');
//     console.log(str1);
// }

// strRev("chalo@");

/*********************************************************************** */

// solution-4

// function strRev(str) {
//     let output = "";
//     for (let character of str) {
//         output = character + output
//     }

//     console.log(output);
// }

// strRev("krishna");

/***************************************************************************/

//solution-5

function strRev(str) {
    debugger;
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, "")              // "" is first arguement of reduce helper
}

console.log(strRev("krishna"));
