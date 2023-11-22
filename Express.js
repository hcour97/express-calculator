const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { findMean, findMode, findMedian, frequencyCounter, convertAndValidateNumsArray } = require('./functions');

// create three basic routes: mean, median, mode.
// each route takes a query key of nums (comma separated list of numbers)
// the response of each operation should be JSON:
// response: {
//     operation: "mean",
//     value: 4,
// }

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query of keys of nums (comma separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if any non-numbers are in array:
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let result = {
        operation: "mean",
        value: findMean(nums)
    }
    return res.send(result);
});

app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query of keys of nums (comma separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let result = {
        operation: "mode",
        value: findMode(nums)
    }
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query of keys of nums (comma separated list of numbers.')
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let result = {
        operation: "mode",
        value: findMedian(nums)
    }
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})