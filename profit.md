Find the maximum profit from given array

     const arr1 = [7, 8, 2, 3, 4];


    function sortArr(arr) {
        let profit;
        let copy = [...arr]
        const arr2 = copy.sort(function (a, b) { return a - b });
        for (let i = arr2.length - 1; i >= 0; i--) {
            let ind1 = arr1.indexOf(arr2[i]);
            let ind2 = arr1.indexOf(arr2[0]);
            if (ind1 > ind2) {
              profit = arr1[ind1] - arr1[ind2];
              break;
            }
        }
        return profit;
    }

    console.log(sortArr(arr1))
