//Excercises 

//The Recipe Card

var myCake = {
	title: "Cake",
	servings: 5,
	ingredients: ["egs", "milk", "sugar", "flavor"],
};

for (var i = 0; i < myCake.ingredients.length; i++) {
  console.log(myCake.ingredients[i]);
}

//The Reading List

var bookRead = [
	{title:"Harry Potter",
		author: "Rowling",
		alreadyRead: true},
	{title:"The Hobbit",
		author: "Tolkien",
		alreadyRead: true},
	{title:"Donald Duck",
		author: "Disney",
		alreadyRead: false}
	];
	

for (var i = 0; i < bookRead.length; i++) {
  console.log(bookRead[i].title + ' by ' + bookRead[i].author);
}

for (var i = 0; i < bookRead.length; i++) {
	if bookRead.alreadyRead = false {
		console.log("You still need to read" + bookRead[i].title + ' by ' + bookRead[i].author);
	} else 
		console.log("You already read" + bookRead[i].title + ' by ' + bookRead[i].author);
	}

//OF
var favouriteBooks = [{
    title: "Meditations",
    author: "Marcus Aurelius",
    alreadyRead: true
  },
  {
    title: "Letters from a Stoic",
    author: "Seneca",
    alreadyRead: false
  },
  {
    title: "Discourses and Selected Writings",
    author: "Epictitus",
    alreadyRead: false
  }
]
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (var i = 0; i < favouriteBooks.length; i++) {
  var currentBook = favouriteBooks[i];

  // Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
  if (currentBook.alreadyRead === true) {
    console.log("You have already read \"" + currentBook.title + "\" by " + currentBook.author + ".");
  } else {
    console.log('You have not read "' + currentBook.title + '" by ' + currentBook.author + ' yet.');
  }
}


//The Movie Database

var myFavMovie = {
  title: "House of Cards",
  duration: 2,
  stars: ["Kevin Spacy", "Robin Wright", "Kate Mara"]
}


function theMovie(movie) {
  console.log(movie.title + " last for " + movie.duration + " hours. With " + movie.stars.join(", ") + ".");
} // With .join you create space in between the names

theMovie(myFavMovie);

//OR

// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
function printMovie(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes, and it stars " + movie.stars.join(", ") + ".");
}

var favouriteMovie = {
  title: "'Hannah and Her Sisters'",
  duration: 124,
  stars: ["Michael Caine", "Mia Farrow", "Woody Allen"]
}

printMovie(favouriteMovie);