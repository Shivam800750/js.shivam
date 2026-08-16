"use strict"; // treat all JS code as newer version
// alert( 3 + 3); // 6 ,we are using nodejs,not browser

console.log(3 + 3) // code readibility should be good, so use spaces between operators and operands
console.log("Shivam")
let name = "Shivam Kumar"
let age = 20
let isLoggedIn = true
let state; // undefined
let city = null // null means empty value

console.log(name, age, isLoggedIn, state, city)


// number => 2 to power 53
// bigint
// striing => ""
// boolean => true or false
// null => empty value
// undefined => value is not assigned 
// symbol => unique


console.log(typeof name, typeof age, typeof isLoggedIn, typeof state, typeof city);
console.log(typeof null); // object
console.log(typeof undefined); // undefined