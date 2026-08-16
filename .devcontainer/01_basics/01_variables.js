const accountId = 124544
let accountEmail = "kumarshivam42215@gmail.com"
var accountName = "Shivam Kumar"
accountCity = "New Delhi"
let accountState;
// accountId = 2 // not allowed because accountId is a constant
/*
Prefer not to use var because it is function scoped and can be redeclared and updated. Use let and const instead.
*/
accountEmail = "hsj@gmail.com"
accountName = "Shivam"
accountCity = "Mumbai"
console.log(accountId);
console.table([accountEmail, accountName, accountCity, accountState]);

