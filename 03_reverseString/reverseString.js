const reverseString = function(string) {
    let reversed = string;

    return reversed.split("").reverse().join("");
};

console.log(reverseString('Built in, better'));
// Do not edit below this line
module.exports = reverseString;
