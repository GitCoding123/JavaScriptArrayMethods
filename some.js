// const ages = [16, 18, 14, 34, 33, 12];
const ages = [16, 14, 12];

const result = ages.some(isAdult);

function isAdult(age) {
    return age >= 18;
}

console.log(result);