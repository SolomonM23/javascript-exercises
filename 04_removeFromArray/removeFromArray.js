const removeFromArray = function(array, ...toRemove) {
    // console.log(toRemove);
    // console.log(array);
    // console.log(array.includes(toRemove));// toRemove elements not found in arrays, even though they are there
    let indexes = [];

    for (let i = 0; i < array.length; i++){ //loops through elements of array
        for (let j = 0; j < toRemove.length; j++){ //loops through elements of toRemove
            if (array[i] === toRemove[j]){ //compares elements from each array to see if there is a match
                return true;
                // let remove = array.indexOf(toRemove);
                // let inputArr = array.splice(remove, 1);
            }
        }
    }
    return false;



    // for (let rems of toRemove){
    //     let remove = array.indexOf(toRemove); //index value of toRemove elements
    //     console.log(remove);
    //     let inputArr = array.splice(remove, 1); //removed element values of toRemove elements
    //     // console.log(inputArr);
    // }
    // return array;
};

console.log(removeFromArray([1, 2, 3, 4, 5], 1, 3, 5));

// Do not edit below this line
module.exports = removeFromArray;
