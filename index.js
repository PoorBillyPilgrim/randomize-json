const fs = require('fs');
let data = require('./data.json');

const total = data.array.length;

let n = 0;
let nums = [];
while (n < total) {
    nums.push(n);
    n++;
}

const randomNums = (max, arr, cb) => {
    let num, randomNums = [];
    while (randomNums.length != max) {
        num = Math.floor(Math.random() * max);
        if (!randomNums.includes(num)) {
            randomNums.push(num);
        }
    }
    return cb(randomNums, arr);
}

const shuffleArr = (arr, randomNums) => {
    let newArr = [];
    for (let i = 0; i < randomNums.length; i++) {
        newArr.push(arr[randomNums[i]]);
    }
    console.log(newArr);
}


randomNums(total, data.array, (x) => {
    shuffleArr(data.array, x);
})

