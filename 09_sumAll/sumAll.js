const sumAll = function(a, b) {

    //Validation must always happen first before doing any math to avoid
    //type coercion by JS
    if (Number.isNaN(a) || Number.isNaN(b)){
        return 'ERROR';
    } else if (!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    } else if ( a < 0 || b < 0){
        return 'ERROR';
    };

    let smallInteger = Math.min(a, b);
    let largeInteger = Math.max(a, b);

    let total = 0;

    for (let i = smallInteger; i <= largeInteger; i++){
        total += i;
    }

    return total;
};


// Do not edit below this line
module.exports = sumAll;
