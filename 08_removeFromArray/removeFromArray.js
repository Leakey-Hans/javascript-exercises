const removeFromArray = function(array, ...valuesToRemove) {
    //array = [1,2,3,4]
    //valuesToRemove = 3,4
    return array.filter(num => !valuesToRemove.includes(num));
};

// read it like this
// array.filter() simply means go through each element and return either true of false
// num means call everything in the array a num
// valuesToRemove.includes(num) translates to is Num inside the values to remove array

// the not operator (!) now flips true and false so what was to stay goes and whatwas to go stays
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]





// Do not edit below this line
module.exports = removeFromArray;
