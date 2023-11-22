// check to make sure each string in the array is a number and convert the strings to a numbrer
function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.}`
            );
        }
        result.push(valToNumber);
    }
    return result;
}


function frequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1
        return acc;
    }, {});
}

function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }, {});
}

function findMode(arr) {
    let freqCounter = frequencyCounter(arr)
    let mostFreq ;
    let count = 0; 

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFreq = key;
            count = freqCounter[key]
        }
    }
    // plus symbol (+) will return the variable as a number.
    return +mostFreq 
}

function findMedian(arr) {
    nums.sort((a,b) => a - b);
    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex-1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}



module.exports = {
    frequencyCounter,
    findMean,
    findMode,
    findMedian,
    convertAndValidateNumsArray
}