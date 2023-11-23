const ages = [3, 10, 18, 20];

function isAdult(age) {
    return age >= 18;
}

const result = ages.findIndex(isAdult);

console.log(result);