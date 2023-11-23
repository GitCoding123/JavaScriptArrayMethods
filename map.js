const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(doubleNum);

function doubleNum(value) {
    return value * 2;
}

console.log(doubled);
console.log(numbers);

const people = [
    {
        firstName: "John",
        lastName: "Doe"
    },
    {
        firstName: "Brian",
        lastName: "Gerkens"
    }
];

// const fullNames = people.map(person => `FullName ${person.firstName} ${person.lastName}`);
const fullNames = people.map((person, index) => ({
    id: index+1,
    fullName: person.firstName + " " + person.lastName
}));

console.log(fullNames);