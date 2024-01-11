const repeatString = function(string, num) {
    let value = string;
    let count = num;

        if (count <= -1){
            return 'ERROR';    
        } else if (count === 0 || value === ''){
            return '';
        } else if (count !== 0){
            return value.repeat(num);
        }
}

console.log(repeatString('hey', 3));
// repeatString('hey', 5)

// Do not edit below this line
module.exports = repeatString;
