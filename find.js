const ages = [3, 10, 18, 20];

function isAdult(age) {
    return age >= 18;
}

// const result = ages.find(isAdult);

// console.log(result);

const fruits = [
    {
        name: 'apple',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 0
    },
    {
        name: 'mango',
        quantity: 5
    }
];

const result = fruits.find(({ name }) =>
name == "mango");

console.log(result);