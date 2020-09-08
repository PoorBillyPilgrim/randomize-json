const fs = require('fs');
let data = require('./data.json');

const total = data.array.length;

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

const shuffleNums = (arr, randomNums, cb) => {
    let newArr = [];
    for (let i = 0; i < randomNums.length; i++) {
        newArr.push(arr[randomNums[i]]);
    }
    return cb(newArr);
}


randomNums(total, data.array, (randomNums) => {
    shuffleNums(data.array, randomNums, (randomizedData) => {
        let randomData = JSON.stringify({ "array": randomizedData }, null, 2);
        console.log(randomizedData.length);
        fs.writeFile('data.json', randomData, (err) => {
            if (err) throw err;
        });
    });
});




