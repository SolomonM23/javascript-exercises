const sumAll = function(a,b) {

    let sum = 0;

    if ( !(a > 0) || !(b > 0)) { //parameters are negative numbers
        return 'ERROR';
    }

    if (typeof a, typeof b !== "number"){ //parameters aren't numbers 
        return 'ERROR';
    } 

    if (a > b){
        for (let i = b; i <= a; i++){
            sum += i;
        }
    }
    for (let i = a; i <= b; i++){
        sum += i;
    }
return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
