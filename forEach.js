// const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]


// days.forEach((day, index) => {
//     console.log(`Day: ${day} = index ${index}`);
// });

// days.forEach((item, index, arr) => {
//     console.log(item);
// });

// function myFunction(item, index, arr) {
//     console.log(item);
// }

// const ages = [12, 18, 23, 14, 17, 44, 32];
// ages.forEach((age, index) => {
//     if(age >= 18) {
//         console.log(`This age IS considered an adult: ${age} at index ${index}`);
//     } else {
//         console.log(`This age IS NOT considered an adult: ${age} at index ${index}`);
//     }
// });


// const numbers = [65, 44, 12, 4, 45, 8];
// let sum = 0;

// numbers.forEach((item) => {
//     sum += item;
// });

const numbies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

numbies.forEach((num, index) => {
    if(num % 2 == 0) {
        console.log(`${num} is an EVEN number at index ${index}`);
    } else {
        console.log(`${num} is an ODD number at index ${index}`);
    }
});