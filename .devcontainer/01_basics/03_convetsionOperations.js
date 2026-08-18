let score = null;
console.log(typeof score);
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
console.log(typeof stae);
console.log(typeof(stae));

let vuInNumber = Number(stae);
console.log(typeof vuInNumber);
console.log(vuInNumber); // NaN => Not a Number


let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber, typeof stringNumber);