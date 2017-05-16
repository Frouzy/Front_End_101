//Credit Card validation
//Whitout a dash in between  


var ccNumber = prompt("Enter your creditcardnumber please");
var ccSum = 0;
var ccLength = ccNumber.length;
var ccLastDigit = ccNumber.slice(-1);
var ccNumberCheck = letterCheck(ccNumber);
var ccDigits = repeatedNumbers(ccNumber);
while (ccNumber) {
    ccSum += ccNumber % 10;
    ccNumber = Math.floor(ccNumber / 10);
}
function letterCheck(input){
    return /^[0-9]*$/i.test(input); //regular expression
}
function repeatedNumbers(str) {
    var ccNumber = /^([0-9])\1+$/;
    var result = ccNumber.test(str);
    return result;
}
function validateCreditCard() {
    if (ccLength !== 16 || 
        ccLastDigit % 2 !== 0 ||
        ccSum <= 16 ||
        ccNumberCheck !== true ||
        ccDigits === true
    ) {
       alert("Your creditcardnumber isn't correct");
    } else {
       alert("Your number is correct");
    }
}
validateCreditCard("");

//With a dash in between

var ccNumber = prompt("Enter your creditcardnumber please");
var ccSliced = ccNumber.slice(0, 4) + ccNumber.slice(5, 9) + ccNumber.slice(10, 14) + ccNumber.slice(15, 19);
var ccSum = 0;
var ccLength = ccSliced.length;
var ccLastDigit = ccSliced.slice(-1);
var ccNumberCheck = letterCheck(ccSliced);
var ccDigits = repeatedNumbers(ccSliced);
while (ccSliced) {
    ccSum += ccSliced % 10;
    ccSliced = Math.floor(ccSliced / 10);
}
function letterCheck(input){
    return /^[0-9]*$/i.test(input);
}
function repeatedNumbers(str) {
    var ccNumber = /^([0-9])\1+$/;
    var result = ccNumber.test(str);
    return result;
}
function validateCreditCard() {
    if (ccLength !== 16 || 
        ccLastDigit % 2 !== 0 ||
        ccSum <= 16 ||
        ccNumberCheck !== true ||
        ccDigits === true
    ) {
       alert("Your creditcardnumber isn't correct");
    } else {
       alert("Your number is correct");
    }
}
validateCreditCard();

//From class
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666

// The following credit card numbers are invalid:
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
 
function validateCreditCardNumber(number) {
  // Number must be 16 digits
  if (number.length !== 16) {
    return "This is not a valid number because it's not 16 characters";
  }
  // all of them must be numbers
  var isnum = /^\d+$/.test(number);
  if (isnum === false){
    return "This is not a valid number because it is not a number";
  }

  // You must have at least two different digits represented
  // (all of the digits cannot be the same)
  // checkAllTheSame(number);
  var isAllTheSame = /^(.)\1+$/.test(number)
  if (isAllTheSame === true) {
    return "Invalid: The numbers are all the same";
  }

  // The final digit must be even
  var lastNumber = number.slice(-1);
  if (lastNumber % 2 !== 0) {
    return "INVALID: The last number is not even.";
  }

  // The sum of all the digits must be greater than 16
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    total += parseInt(number[i]);
  }
  if (total <= 16){
    return "INVALID: the credit card digits do not add up.";
  }

  return "VALID: Your credit card is ready to be charged."
}

validateCreditCardNumber("9999999988880000");
