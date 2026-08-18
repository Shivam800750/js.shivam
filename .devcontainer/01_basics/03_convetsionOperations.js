let score = null;
// console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN => Not a Number
let num = undefined;
console.log(typeof num);
console.log(typeof(num));

let vlueInNumber = Number(num);
console.log(typeof vlueInNumber);
console.log(vlueInNumber); // NaN => Not a Number
let state = true;
console.log(typeof state);
console.log(typeof(state));

let vueInNumber = Number(state);
console.log(typeof vueInNumber);
console.log(vueInNumber); // NaN => Not a Number
let stae = "true";
// console.log(typeof stae);
// console.log(typeof(stae));

let vuInNumber = Number(stae);
// console.log(typeof vuInNumber);
// console.log(vuInNumber); // NaN => Not a Number


let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//
console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber, typeof stringNumber);

 // *******************Operations**********************
 let value = 3
    let negValue = -value
    console.log(negValue);
 console.log(-negValue);
 console.log(2+2);
 console.log(2-2);
 console.log(2*2)
 console.log(2/2);
 console.log(2**3);
 console.log(2%3); // remainder

 let str1 = "Hello"
 let str2 = "World"
    console.log(str1 + str2);
    console.log(str1 + " " + str2);
    console.log(str1, str2);
console.log(1 + "1"); // 11
console.log(1 +"1"); // 111
// console.log(1 + 1 + "1");
console.log("1" + 1 + 1);

console.log( (3 + 3) * 5 % 3); // 12

 
console.log(false);
console.log(+true); // 1
console.log(+false);
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);

// let gameCounter = 100
// gameCounter = gameCounter + 1
// console.log(gameCounter++);
// console.log(gameCounter);
// console.log(++gameCounter);

let gameCounter = 100
++gameCounter

console.log(gameCounter);




