//For loops

//The even/odd reporter 

for (var i = 0; i < 21; i++) {
  if (i % 2 === 0)  {
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

for (var i = 0; i <= 10; i++) {
  if (i > 10) {
    console.log('You scored A');
  } else if (i >= 8 && i < 10) {
    console.log('You scored B');
  } else if (i >= 6 && i < 8) {
    console.log('You scored C');
  } else if (i >= 4 && i < 6) {
    console.log('You scored D');
  } else if (i >= 2 && i < 4) {
    console.log('You scored E');
  } else if (i >=1 && i < 2)  { 
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

// Triangle of stars

function numRows(numberOfStars) {

var string = '';
var a = 0;

for (var i = 0; i <= numberOfStars; i++) {
    
     if(a % 2 !== 0) {
        string = '*'.repeat(a);
        console.log(string);
        a++;
      } else
        console.log();
        a++; 
      }
}

console.log(numRows(7));



//Pyramid of stars - bonus


function numRows(numberOfStars) {
    var block = '*';
    var space = ' ';

    for(var i = 1; i <= n; i++) {
        var blockStr = '',
            spaceStr = '',
            string = '';

        for(var t = 0; t < (n - i); t++) {
            spaceStr = spaceStr + space;
        }

        for(var j = 0; j < i; j++) {
            blockStr = blockStr + block + space;
        }

        string = string + (spaceStr + blockStr);
        console.log(string);
    }
}

console.log(numRows(7));

