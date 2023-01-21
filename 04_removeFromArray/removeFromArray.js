const removeFromArray = function(array, ...toRemove) {
    let newArray = array;
    for (let y = 0; y < toRemove.length; y++) {
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === toRemove[y]) {
                newArray.splice(i, 1);
                i = -1;
            }
        }
    }
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
