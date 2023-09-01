"use strict";

//1
let value = prompt("Введіть число");
for (let i = 0; i > value.length; i++) {
if (value[i]%2==0) {
console.log(value[i]);
}
console.log(value);
}

//2
const currentMaxValue = 4589;

let valueString = String(currentMaxValue);
let reverseMaxValue = valueString.split("");
reverseMaxValue.reverse();


console.log(reverseMaxValue);
console.log(typeof +reverseMaxValue.join())


// //3
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity);
let result = 1;
for (let i = 0; i < productOfArray.length; i++) {
    result *= productOfArray[i];
}

console.log(productOfArray);
console.log(result);