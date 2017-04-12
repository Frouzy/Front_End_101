
/*Variables*/
/*Fortune Teller*/

var numKids = 2;
var partner = 'Michiel';
var city = 'Amsterdam';
var job = 'journalist';

var future = 'You will be a ' +  job +' in ' + city + ', and married to ' + partner + ' with ' + numKids + ' kids.';

console.log(future);

/*The Age Calculator*/

var birthYear = 2000;
var futureYear = 2020;
var age = futureYear - birthYear;
var ageMinus = age - 1;

console.log('I will be either ' + age + ' or ' + ageMinus + ' in ' + futureYear + '.')

/*The Lifetime Supply Calculator*/

var age = 44;
var maxAge = 100;
var product = "coffee";
var estAmount = 3;
var neededAmount = (maxAge - age) * 365 * estAmount;

var message = 'You will need ' + neededAmount + ' cups of coffee to last you until the ripe old age of ' + maxAge + '.';

console.log(message);

/*The Geometrizer*/

var radius = 30;							
var circumference = Math.PI * 2 * radius;
console.log('The circumference is ' + circumference + '.');

var area = Math.PI * radius * radius;

console.log('The area is ' + area + '.');

/*The Temperature Converter*/

var celsius = 12;
var celsiusInFahrenheit = (celsius * 9/5) + 32;
console.log(celsius + '°C is ' + celsiusInFahrenheit + '°F');

var fahrenheit = 50;
var fahrenheitInCelcius = (fahrenheit - 32) * 5/9;

console.log(fahrenheit + '°F is ' + fahrenheitInCelcius + '°C');


/*Functions*/

/*Fortune Teller*/


function tellFortune(job, city, partner, numKids)	{
	var future = 'You will be a ' +  job +' in ' + city + ', and married to ' + partner + ' with ' + numKids + ' kids.';
  
  console.log(future);
}

tellFortune('Journalist', 'Amsterdam', 'Michiel', 2);
tellFortune('Digital Strategist', 'NYC', 'Jonas', 5);
tellFortune('Writer', 'Bali', 'Morris', 3);

/*The Puppy Age Calculator*/

function calculateDogAge(age) {
    var dogAge = 7*age;
    console.log('Your doggie is ' + dogAge + ' years old in dog years!');
}

calculateDogAge(1);
calculateDogAge(5);
calculateDogAge(10);

/*The Life Time Suppley Calculator*/

function calculateSupply(age, estAmount) {
    var maxAge = 100;
    var neededAmount = (estAmount * 365) * (maxAge - age);
    var message = 'You will need ' + neededAmount + ' cups of coffee to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(44, 3);
calculateSupply(38, 5);
calculateSupply(25, 20);

/*The Geometrizer*/
function calcCircumference(radius) {
    var circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
}

calcCircumference(15);

function calcArea(radius) 	{
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

calcArea(15);

/*The Temperature Converter*/

function celsiusToFahrenheit(celsius) {
    var celsiusInFahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + '°C is ' + celsiusInFahrenheit + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInCelsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + '°F is ' + fahrenheitInCelsius + '°C');
}


fahrenheitToCelsius(85);
celsiusToFahrenheit(25);
