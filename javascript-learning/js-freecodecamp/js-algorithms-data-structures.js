// Comparison operations

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Another comparison example
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// And operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

// if else statements
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// if/else if/else
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// golf score checker
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);

// switch cases
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// switch with default option
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// multiple switch case statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// the if/else statement can be transformed in an easier way if we want to return true/false
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);

// BlackJack card counter
var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

// Objects in JS are like dictionary in Python
// Setup
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line

var hatValue = testObj.hat;
var shirtValue = testObj.shirt; // Change this line

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line

var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj["the drink"]; // Change this line

// dynamically access the property of the object
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line

var playerNumber = 16; // Change this line
var player = testObj[playerNumber]; // Change this line

// Alter properties within ojects
var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.name = "Happy Coder";

// Adding properties to objects
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.bark = "woof";

// delete property from object
// Setup
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line

delete myDog.tails;

// We can use objects to store data in a structured way
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// check wether an object has a specific property

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  // Only change code above this line
}

// build arrays containings objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Adriano Celentano",
    title: "Acqua e Sale",
    release_year: 1999,
    formats: ["CD", "MP3", "LP"],
  },
  // Add a record here
];

// Access nested array of objects
// Setup
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// Another example of accessing arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

// function that check if a property is present in an array and do stuff. Quite complex...
// Setup
var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (
    prop === "tracks" &&
    object[id].hasOwnProperty("tracks") === false
  ) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}

// This version of the function uses a short circuit evaluation https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-record-collection/18261
// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value === "") delete object[id][prop];
  else if (prop === "tracks") {
    object[id][prop] = object[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }

  return object;
}

updateRecords(collection, 5439, "artist", "ABBA");

// while loop to populate an array
// Setup
var myArray = [];
// Only change code below this line
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

// similar using for loop
// Setup
var myArray = [];

// Only change code below this line
for (
  var i = 1; //here we initialize the loop with a counter
  i <= 5; // this is the conditional statement checked every cycle. if true, the loop continues
  i++ // this is the code to be executed
) {
  myArray.push(i);
}

// iterate over odd numbers and push them into array
// Setup
var myArray = [];

// Only change code below this line
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

// counting backwards using for loop
// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

// IMPORTANT iterate over an array and add the value of the array to a new variable
// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// for nested loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  // console.log(product)
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// do while loop; this loop execute the code at least once and then continues with the while loop;
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);

// RECURSION
// for loop
function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
// the recursive version
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

function sum(arr, n) {
  // Only change code below this line
  var test = 0;
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Search within an array of contacts. Screen if the name property or the property itself is part of the array
// Complex excercise
function lookUpProfile_original_version(name, prop) {
  // Correct but imperfect.
  for (var i = 0; i < contacts.length; i++) {
    // console.log(contacts[i].hasOwnProperty(prop))
    if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
      // console.log(contacts[i][prop])
    } else if (contacts[i]["firstName"] !== name) {
      return "No such contact";
    } else if (contacts[i].hasOwnProperty(prop) === false) {
      return "No such property";
    } else {
      return "Something went wrong";
    }
  }
  // Only change code above this line
}

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

function lookUpProfile_v2(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Harry", "likes");

// generator random numbers
function randomFraction() {
  return Math.random();
}

// Generator of integer up to 9 (the multiplication make it so that the generator never quite reaches 10)
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Generator of integer within a range min/max.
// The function inside creates the Range. i.e. if myMax = 10 and myMin = 0, the funtion gets to 10-0+1 )11 + 0 so the upper bound is 11. The lower bound is always 0 as per Math.random(). Adding the myMin at the end changes that, making the min at least eauquals to myMin if rand equals to 0
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// simple function that converts to Int from str
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// converts strings integer to binary numbers
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// Ternary operator
// The ternary operator pseudo code is a :b ? contacts; here
// a is the CSSConditionRule, b is the code that will execute if a == True and c is the code executed if a == false
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// multiple ternary operators. I think is more readable to use if/else, however this format is more concise
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

checkSign(10);

// Use recursive functions to create a decreasing integer array
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

console.log(countdown(5));

// recursively create an array of increasing numbers between a defined range
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else if (startNum <= endNum) {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

rangeOfNumbers(1, 6);
