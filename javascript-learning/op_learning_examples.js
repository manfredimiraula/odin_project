// declare a var
let user = "John";
let age = 25;
let message = "Hello";

alert(message); // print the var

// declare a var and copy it into another var
let hello = "Hello world!";
let message = hello;

print(message);

("use strict");
let num = 5;

// declare a constant
const myBirthday  = '15.01.1988';

// decleare difficult to remember constant 
const COLOR_RED = "#F00";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_RED
...
let color = COLOR_ORANGE

// Tasks

// 1
let name = "John";
let admin = name;
alert(admin);

// 2
let myPlanetName;
 myPlanetName = "Earth";

 let currentUserName;

 currentUserName = "manfredi";

 // numbers
let x = 3.14;
let y = 3;
let z = 123e5;
let a = 123e-5;

// operations

let x = 0.2 + 0.1 // this leads to imprecise to the 17th decimal

let x = (0.2 * 10 +0.1 * 10)/10 // this leads to 0.3

// Concatenation
 let x = "20"
 let y = "10"
let z = x + y // concat

// Operations
let x = 20
let y = 10
let z = x + y // sum

let x = "100"
let y = "10"

// Declare and operate
let x = 10;
let y = 5;
let x + = y; // this leads to 15
let x * = y; // this leads to 50

let diff = x - y //this leads to the diff string
let divide = x/y // this leads to the div string
let mult = x*y //this leads to the mult string

let x = 100 / "Apple" // this lead to NaN
let x = 100 / "10" //this leads to valid number string

// rounding numbers
let x = 1.7376376347574573;
let twoDecimalPlaces = x.toFixed(2); // this round to second place

// convert to numbers
let x = "74" // of type string
Number(x) ; // this converts to number type

isNaN(x) // Boolean if var is NaN

// infinity
 let x = 2/0; // infinity
 let x = -2/0; // infinity

 // Objects
 let x = new Number(123); //this leads to an object

 // Convert to Number usign the + operator
 let apples = "2";
 let banana = "3";
 alert(apples + banana); // leads to "23" (concatenation)
 alert (+apples + +banana); //leads to 5

 // Increment, decrement a variable
 let num = 6; //set variable
 num++; // increment variable (here the broser still return 6 still)
 num; // return the incremented variable

 let num = 7; // set the variable
  ++ num; // here the browser increment the varibale first
 num; // print the variable