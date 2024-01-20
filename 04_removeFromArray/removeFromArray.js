const removeFromArray = function(array, ...toRemove) {

    const indexArr = [];
    array.forEach((item) => {
        if (!toRemove.includes(item)) {
            indexArr.push(item);    
        }
    });
    return indexArr;
}   

console.log(removeFromArray([1, 2, 3, 4, 5], 1, 3, 5));

// Do not edit below this line
module.exports = removeFromArray;
