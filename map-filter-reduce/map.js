const arr = [
    1,
    2,
    3,
    4
];

console.log(`\nPre-mapped array: ${arr}\n`);

console.log(`Using .map() to multiply every element by 5...\n`);

const newArr = arr.map(element => {
    return element * 5;
});

console.log(`Post-mapped array: ${newArr}\n\n\n`);

const objArr = [
    {
        name: 'Chris'
    },
    {
        name: 'Kalen'
    },
    {
        name: 'Kelly'
    },
    {
        name: 'Shawn'
    }
];

console.log(`Pre-mapped array of objects: ${objArr}\n`);

console.log(`objArr[0].age: ${objArr[0].age} \n`)

console.log(`Using .map() to add a property to every object in an array of objects...\n`)
const newObjArr = objArr.map(item => {
    item.age = 27;
    return item;
})

console.log(`newObjArr[0].age: ${newObjArr[0].age}\n`)
