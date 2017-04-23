
//If Statements

//Write a function called isPositive that:
//-takes one argument, a number
//-returns true if it is positive, and false if it is not

function isPositive(numb) {
	if (numb > 0 === true) {
		return 'true';
	}	else {
		return 'false';
	}
}

console.log(isPositive((2));

//Write a function called getCapital that:
//- takes one argument, a two-letter state abbreviation (ie. "ny", "ma", "fl")
//- returns the state capital (you don't need to do all 50 states! 3 or 4 will suffice)

function getCapital(state)	{

	if (state === 'ny')	{
		return 'New York';
	} if (state === 'be'){
		return 'Berlin';
	} else if (state === 'am')	{
		return 'Amsterdam';
	}
}

 console.log(getCapital('ny'));
 console.log(getCapital('be'));
 console.log(getCapital('am'));

//Write a function called calculateTaxes that:
//- takes one argument, an income (a number)
//- returns 5% of that income if it is less than $10000, 
//10% of that income if it is between $10001-$20000, and 
//15% if it is greater than $20000


function calculateTaxes(income)	{

	if (income <= 10000){
		return ((income/100)*5);
	} if (income > 10000 && income <= 20000){
		return ((income/100)*10);
	} else if (income > 20000) {
		return ((income/100)*15);
	}
}

console.log(calculateTaxes(21000));




