//Credit Card validation

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
        ccSum < 16 ||
        ccNumberCheck !== true ||
        ccDigits === true
    ) {
       alert("Your creditcardnumber isn't correct");
    } else {
       alert("Your number is correct");
    }
}
validateCreditCard();

