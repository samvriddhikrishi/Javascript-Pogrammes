// Write a funcion to reverse the string without effect on special characters.

function revStr(str) {
    let output = [];
    const arr = str.split("");
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        const test = Boolean(str.charAt(i).match(/[a-zA-Z0-9]/));
        if (test == true) {
            output.push(arr[i])
        } else {
            obj[i] = arr[i]
            output.push("")
        }
    }

    // const data = output.split("");
    // console.log(data);
    // if (obj.length !== 0) {
    //     const key = parseInt(Object.keys(obj)[0]);
    //     const value = obj[key];
    //     console.log('key', key);
    //     console.log('value', value);
    //     data.splice(parseInt(key, 0, value))
    // }
    console.log(obj);
    return output;
}

console.log(revStr("kri@shna"));