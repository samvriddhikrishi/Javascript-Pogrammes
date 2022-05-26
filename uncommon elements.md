Find the uncommon elements from given two arrays ?
------------------------------------------------

    const arr1 = ['mango', 'banana', 'apple'];
    const arr2 = ['banana', 'orange', 'mango'];
    const arr3 = [...arr1, ...arr2];

    let output = [];

    for (let i = 0; i < arr3.length; i++){
        if(!(arr3.indexOf(arr3[i]) < arr1.length && arr3.lastIndexOf(arr3[i]) >= arr1.length)){
            output.push(arr3[i]);;
        }
    }

    console.log(output)
