//Write a function that takes in two arrays of the same length. Have the function 
//return an object whose keys are the first array and whose values are the second array.

var arrayOne = ["width", "height", "pattern"];
var arrayTwo = [50, 20, "striped"];

var myObject = arraysToObjects(arrayOne, arrayTwo);


function arraysToObjects(arrayOne, arrayTwo) {
    var result = {};  //create an empty object
    for (var i = 0; i < arrayOne.length; i++)
        result[arrayOne[i]] = arrayTwo[i];
    return result;
}

console.log(myObject);

 //OR ...

var arrayOne = ["width", "height", "pattern"];
var arrayTwo = [50, 20, "striped"];
var myObject = arraysToObjects(arrayOne, arrayTwo);

function arraysToObjects(arrayOne, arrayTwo) {
  var objectFromArrays = {};
  for (var i = 0; i < arrayOne.length; i++) {
      objectFromArrays[arrayOne[i]] = arrayTwo[i];
  }

  return objectFromArrays;
}

console.log(myObject);

 //OR in html

<!DOCTYPE html>
<html>
<body>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var pim = ["Cecilie", "Lone"];
    var mary = ["Emil", "Tobias", "Linus"];
    var children = pim.concat(mary); 
    document.getElementById("demo").innerHTML = children;
}
</script>

</body>
</html>
