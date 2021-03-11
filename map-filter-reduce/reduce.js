const arr = [1, 2, 3, 4];
const reducedArr =  arr.reduce( (accum, value) => {
    return accum += value;
});
console.log(`arr: ${arr}, reducedArr: ${reducedArr}`);