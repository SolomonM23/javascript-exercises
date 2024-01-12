const removeFromArray = function(array, find) {
    let remove = array.indexOf(find);
    let inputArr = array.splice(remove, 1);

    return array;
};

console.log(removeFromArray([1, 2, 3, 4] , 4));

// Do not edit below this line
module.exports = removeFromArray;
