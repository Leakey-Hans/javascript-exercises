const repeatString = function(string, times) {
    let result = '';
    if(times < 0){
        return 'ERROR';
    }
    for (let i = 0; i < times; i++){
        result += string;
    }

    return result;
};

//LESSONS LEARNT

//+= This is a compound assignment operator it means take whatever i already have and add this to it and store it there in the same container
// return is function call and not a loop call if you put return in a loop that is inside a function it exists the entire function the moment it hits return command



// Do not edit below this line
module.exports = repeatString;
