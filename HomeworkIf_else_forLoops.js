
//if/else statements
//What number's bigger?

function greatNum(numb1, numb2)	{
	if (numb1 > numb1)	{
		return numb1;
	} else {
		return numb2;
	}
}


console.log(greatNum(12, 8));
console.log(greatNum(5, 10));

//The World Translator

function helloWorld (language)	{
	if (language === 'es')	{
		return 'Hola mundo';
	} else if (language === 'nl')	{
		return 'Hallo wereld';
	} else {
		return 'Hello world';
	}
}
 console.log(helloWorld('es'));
 console.log(helloWorld('nl'));
 console.log(helloWorld('en'));

 //The Grade Assigner

 function assignGrade (score)	{
 	if (score > 10)	{
 		return 'You scored A';
 	} else if (score >= 8 && score < 10) {
 		return 'You scored B';
 	} else if (score >= 6 && score < 8) {
 		return 'You scored C';
 	} else if (score >= 4 && score < 6)	{
 		return 'You scored D';
 	} else if (score >= 2 && score < 4)	{
 		return 'You scored E';
 	} else if (score >=1 && score < 2)	{ //Je kunt hier ook else } alleen doen
 		return 'You scored F';
 	}
 }

console.log(assignGrade(5));
console.log(assignGrade(8));
console.log(assignGrade(2));

//The Pluralizer

 var noun;
 var number;

function pluralize(number, noun)	{
	if ( number > 1)	{
		return number + ' ' + noun + 's';
	} else {
		return number + ' ' + noun;
	}
}

console.log(pluralize(5, 'cat'));
console.log(pluralize(1, 'dog'));

//OR

function pluralize(num, noun) {
  if (num === 1) {
    return num + " " + noun;
  }

  plurals = {
    cat: "cats",
    dog: "dogs",
    sheep: "sheep",
    fish: "fish"
  }

  return num + " " + plurals[noun];
}

console.log(pluralize(1, "cat"));
console.log(pluralize(3, "cat"));
console.log(pluralize(1, "sheep"));
console.log(pluralize(3, "sheep"));

//For loops

//The even/odd reporter 
//returns doesn't work here. That is only for functions

for (var i = 0; i < 21; i++) {
	if (i % 2 === 0)	{
		console.log(i + ' is even.');
	} else
  		console.log(i + ' is odd.');
}


//Multiplication Tables


for (var i = 0; i <= 10; i++) {
	var result = 9 * i;
	console.log(result);
}

//The Grade Assinger

for (var i = 0; i <= 10; i++)	{
 	if (i > 10)	{
 		console.log('You scored A');
 	} else if (i >= 8 && i < 10) {
 		console.log('You scored B');
 	} else if (i >= 6 && i < 8) {
 		console.log('You scored C');
 	} else if (i >= 4 && i < 6)	{
 		console.log('You scored D');
 	} else if (i >= 2 && i < 4)	{
 		console.log('You scored E');
 	} else if (i >=1 && i < 2)	{ 
 		console.log('You scored F');
 	}
 }

 //From 0 to 100, print all the numbers that are divisible by 3

 for (var number = 0; number <= 100; number = number + 1) {
	if (number % 3 == 0) {

    console.log(number)

	}
}

// Fizz Buzz

 for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}



