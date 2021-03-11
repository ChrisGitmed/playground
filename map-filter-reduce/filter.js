let arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

let filteredArr = arr.filter(item => {
    return item % 2 === 0;
});

console.log(`\nFiltering to get the even numbers...\n`)
console.log(`arr: ${arr}, filteredArr: ${filteredArr}`);

arr = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100
];

filteredArr = arr.filter(item => {
    return item >= 50;
})

console.log(`\nFiltering to get the numbers higher than 50...\n`)
console.log(`arr: ${arr}, filteredArr: ${filteredArr}\n`);

arr = [
    {
        name: 'Chris',
        age: 27
    },
    {
        name: 'Kevin',
        age: 30
    },
    {
        name: 'Tim',
        age: 25
    },
    {
        name: 'Mike',
        age: 18
    },
    {
        name: 'Phil',
        age: 20
    }
];

filteredArr = arr.filter(item => {
    return item.age >= 21
})

console.log(`\nFiltering to get the people older than 21...\n`)

console.log('These people are over 21...\n')
for (let i = 0; i < filteredArr.length; i++) {
    console.log(filteredArr[i].name)
}
