const reverseString = function(string) {
    let splitString = string.split('');
    let reveresedString = [];
    let countdown = string.length - 1;

    for (let i = 0; i < string.length; i++) {
        reveresedString[i] = splitString[countdown];
        countdown--;
    }
    return reveresedString.join("");
};



// Do not edit below this line
module.exports = reverseString;
