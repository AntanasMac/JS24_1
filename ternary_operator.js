/*

it is a shortcut to if and else statements
it helps to assign a variable based on a condition
condition ? codeIfTrue : codeIfFalse

*/

/*
let number = 5;
let x = 5;
let test = number >= 19 ? ++x : --x ;
console.log(message);
*/


// an example automatic discount applier if purchase amount
// is over 100
let purchaseAmount = 99;
let finalPrice;
let discount = purchaseAmount >= 100 ? finalPrice = purchaseAmount * 0.90 : finalPrice = purchaseAmount;
console.log(finalPrice);