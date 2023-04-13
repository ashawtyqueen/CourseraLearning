/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrapbundle.min.js"></script>;

var name = "ifeoluwa";
var age = 26;
var final = "name" + age;
console.log(final);

console.log(2 == 5);
console.log(2 ** 6);
console.log(2 * 4 + 4 / 6);
console.log("hello" * 5);
var greetings = "hello there";
console.log(greetings + 5);
console.log(5 !== "5");

var score = 8;
console.log("Mid-level skills: " + (score > 0 && score < 10));

var timeRemaining = 0;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is ", num1, " an even number? ", result1);
console.log("Is ", num2, " an even number? ", result2);

console.log("Result: ", 5 + 10);

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

// conditional statements
var examResult = 5;
if (examResult >= 50) {
  console.log("You passed the test");
} else {
  console.log("You failed the test");
}

var place = "fifth";
if (place === "first") {
  console.log("Gold");
} else if (place === "second") {
  console.log("Gold");
} else if (place === "third") {
  console.log("Bronze");
} else {
  console.log("No medal");
}

var position = "second";
switch (position) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No medal");
    break;
}

var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "saturday";
switch (day) {
  case "Sunday":
    console.log("Go to church");
    break;
  case "Monday":
    console.log("Go to work");
    break;
  case "Tuesday":
    console.log("go swimming");
    break;
  case "Wednesday":
    console.log("go make your hair");
    break;
  case "Thursday":
    console.log("Go to gym");
    break;
  case "Friday":
    console.log("do gocceries");
    break;
  default:
    console.log("Do your weekly chores");
}

// loops
//multiplication table of two
var i;
var j;
var j = 0;
var twoTimes;
for (var i = 1; i < 101; i++) {
  var twoTimes = 2 * i;
  j++;
  console.log("2 *", j, "=", twoTimes);
}

var i = 1;
var j = 0;

while (i < 101 && j < 101) {
  var multiply2 = 2 * i;
  i++;
  j++;
  console.log("2 *", j, "=", multiply2);
}

for (var i = 5; i > 0; i--) {
  switch (i) {
    case 1:
      console.log("one!");
      break;
    case 2:
      console.log("two!!");
      break;
    case 3:
      console.log("three!!!");
      break;
    case 4:
      console.log("four!!!!");
      break;
    default:
      console.log("five!!!!!");
      break;
  }
}
console.log("********Happy New Year*******");

var count = 2000;
while (count < 2024) {
  console.log(count);
  count++;
}
console.log("********Happy New Year*******");

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 12; j++) {
    var multiply = i * j;
    console.log(i, "times", j, "=", multiply);
  }
}

var cubes = "ABCDEFG";
for (var i = 0; i < 7; i++) {
  var styles =
    "font-size: 40px; border-radius:10px; border:1px solid blue; background:pink color: purple";
  console.log("%c" + cubes[i], styles);
}

for (var i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log("Gold medal");
  } else if (i === 2) {
    console.log("Silver medal");
  } else if (i === 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

// functions

function addTwoNum(a, b) {
  var c = a + b;
  console.log(c);
}

addTwoNum(20, 20);


// array
var train1 = ["amala", "ogi", "oat", "rice", "wheat", "pounded yam"];
var tran2 = ["salt", "rock", "water"];

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}
var train1 = ["amala", "ogi", "oat", "rice", "wheat", "pounded yam"];
listArrayItems(train1);

function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("--- No Match found at", i);
    }
  }
}

letterFinder("amala", "a");


//object
var print = ["name", "age", "country", "state"];
var assistantManager = {
  name: "Dayo",
  age: 30,
  country: "Nigeria",
  state: "osun",
};
assistantManager.skincolor = "chocolate";
assistantManager["occupation"] = "teacher";
for (var i = 0; i < print.length; i++) {
  console.log(print[i], ":", assistantManager[print[i]]);
}
//console.log(assistantManager);

//array
function arraryBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
console.log(arraryBuilder("i", "love", "you"));

//arrays and objects
var clothes = [];
clothes.push("trousers");
clothes.push("shirt");
clothes.push("leggings");
clothes.push("skirt");
clothes.push("crop-top");
clothes.pop("crop-top");
console.log(clothes);
console.log(clothes.indexOf("leggings"));

var favCar = {
  color: "black",
  covertible: true,
};
console.log(favCar);

// try, throw and catch
try {
  throw new Error();
} catch (err) {
  console.log(err);
}
console.log("this line now runs");

try {
  console.log(a + b);
} catch (err) {
  console.log("There was an error");
  console.log("The error was saved in the erroe log");
}
console.log("my program does not stop");

//throw new ReferenceError();

// undefined, null and empty values
var letter = "abc";
console.log(letter.match(/d/));
console.log("jane mercy");

var noise;
console.log(noise);

var game = {
  score: 100,
};
console.log(game.name);

//console.log(a + b);

function addTwoNum(a, b) {
  try {
    if (typeof a !== "number") {
      throw new ReferenceError(
        console.log("the first argument is not a number")
      );
    } else if (typeof b !== "number") {
      throw new ReferenceError(
        console.log("the second argument is not a number")
      );
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error", err);
  }
}
addTwoNum("5", "5");
console.log("it still works");

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;
  if (condition1 === true && condition2 === true) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === match) {
        console.log("found the", match, "at", i);
      } else {
        console.log("--- Match not found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}
letterFinder("G", "G");

var result = null;
console.log(result);

try {
  console.log("Hello');
} catch (e) {
  console.log("Goodbye");
}

throw new Error();
console.log("Hello");

var str = "Hello";
console.log(str.match("jello"));

try {
  number(5).toPrecision(300);
} catch (e) {
  console.log("there was an error");
}

//functional programming
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.1;
function convertCurrency(amount, rate) {
  return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwow);

function doubleIt(num) {
  return num * 2;
}
function objectMaker(val) {
  return {
    prop: val,
  };
}
console.log(objectMaker(doubleIt(100)));
console.log(doubleIt(10).toString());

let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}
example();


//scope (local and global)
function getTotal(a, b) {
  console.log(a + b);
}
var num1 = 2;
var num2 = 3;
var total = getTotal(num1, num2);

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

var virtualPet = {
  sleep: true,
  nap: function () {
    this.sleep = false;
  },
};
console.log(virtualPet.sleep);
virtualPet.nap();
console.log(virtualPet.sleep);

function two() {
  return 2;
}
function one() {
  return 1;
}
function calculate(initial, value) {
  return initial() + value() + value();
}
console.log(calculate(two, one));

//object oriented Programmming

var purchase = {
  garri: 200,
  rice: 400,
  amala: 1000,
  total: function () {
    var calculation = this.garri + this.rice + this.amala;
    console.log("Total price:", calculation);
  },
};
purchase.total();

var purchase1 = {
  garri: 600,
  rice: 800,
  amala: 1200,
  total: function () {
    var calculation = this.garri + this.rice + this.amala;
    console.log("Total price:", calculation);
  },
};
purchase1.total();

// classes
class car {
  constructor(color, speed) {
    (this.color = color), (this.speed = speed);
  }
  turboOn() {
    console.log("turbon is on");
  }
}
const car1 = new car("red", 120);
console.log(car1);
car1.turboOn();

// Task 1: Code a Person class
class person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
  }
  goToWork() {
    this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
console.log(intern());
console.log(manager());

new Date();

function Icecream(flavor) {
  this.flavor = flavor;
  this.melt = function () {
    console.log("the${this.flavour} icecream has melted");
  };
}

var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};
var eagle = Object.create(bird);
console.log("eagle", eagle);

console.log("eagle has wings : ", eagle.hasWings);
console.log("eagle can fly : ", eagle.canFly);
console.log("eagle has feathers : ", eagle.hasFeathers);

var penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin can fly: ", penguin.canFly);

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on? ", this.lightsOn);
  }
}
var myFirstTrain = new Train("red", false);
console.log(myFirstTrain);
// Default Paramaters
function withDefaultParams(number = 10) {
  console.log("Result: ", number * number);
}
withDefaultParams();

class noDefaultParas {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {}
}

// class
class Animal {
  constructor(color, energy) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (energy > 0) {
      this.energy -= 10;
      console.log(this.energy);
    } else if (energy <= 0) {
      console.log(sleep());
    }
  }
  sleep() {
    this.energy += 10;
    console.log(this.energy);
  }
  getColor() {
    console.log("The animal color is: ", this.color);
  }
}

class Cat extends Animal {
  constructor(color, energy, sound, canJumpHigh, canClimbTrees) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {}
}

class Bird extends Animal {
  constructor(color, energy, sound, canFly) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {}
}

class HouseCat extends Cat {
  constructor(color, energy, sound, canJumpHigh, canClimbTrees, HouseCatSound) {
    super(color, energy, sound, canJumpHigh, canClimbTrees);
    this.HouseCatSound = HouseCatSound;
  }
  makeSound() {}
}

class Tiger extends Cat {
  constructor(
    color,
    energy,
    sound,
    canJumpHigh,
    canClimbTrees,
    HouseCatSound,
    tigerSound
  ) {
    super(color, energy, sound, canJumpHigh, canClimbTrees, HouseCatSound);
    this.tigerSound = tigerSound;
  }
}

class Parrot extends Bird {
  constructor(canTalk, color, energy, sound, canFly) {
    super(color, energy, sound, canFly);
    this.canTalk = canTalk;
  }
  makeSound() {}
}

//De-structuring arrays and objectslet
let { PI } = Math;
console.log(PI);
let { pi } = Math;
console.log(pi);
console.log(PI === Math.PI);
PI = 1;
console.log(PI === Math.PI);

// for loops and objects
const car ={
  speed: 100
  color:'blue'
}
for (prop of car){
  console.log(prop)
}

const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}

// Object.keys() method
const car = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car));
//Object.values() method
const car = {
  speed: 200,
  color: "yellow",
};
console.log(Object.values(car));
//Object.entries() method
const car = {
  speed: 400,
  color: "green",
};
console.log(Object.entries(car));

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autum",
};
for (keys of Object.keys(clothingItem)) {
  console.log(keys + ": " + clothingItem[keys]);
}

function testBracketDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }
  var drone = {
    speed: 15,
    color: "orange",
  };
  console.log(drone[dynamicKey]);
}
console.log(Math.random());
testBracketDynamicAccess();

const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("........for-in is unreliable........");
for (prop in sportsCar) {
  console.log(prop);
}
console.log("", "iterating over objects AND its prototype");

console.log("........for-of is reliable........");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}
console.log("", "iterating over objects OWN PROPERTIES ONLY!");

// template literals
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`);
console.log(`Hello, 
World!`);
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);

let multiline = `
      using ES6
      backticks,
      multi-line         
      strings are
      possilbe`;
console.log(multiline);

let first = `he said, "Don't you know? ES6, it's got some great features!"`;
let second = `"wouldn't you want to learn more!", he asked,`;
console.log(`${first} - and i got curious, ${second})`);


// Data structure
// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (var i = 0; i < dairy.length; i++) {
    let newDairy = [];
    newDairy.push(dairy[i]);
    console.log(newDairy);
  }
}
logDairy();

// Task 2
const animal1 = {
  canJump: true,
};

const bird = Object.create(animal1);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (prop of Object.keys(bird)) {
    console.log(prop + ": " + bird[prop]);
  }
}
birdCan();
// Task 3
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function animalCan() {
  for (prop in bird) {
    console.log(prop + ": " + bird[prop]);
  }
}
animalCan();

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
  1,
];

for (var item of dairy) {
  if (typeofitem === "number") {
    console.log(item);
  } else {
    console.log("no number found ");
  }
}
*/
let obj = {
  key: 1,
  value: 4,
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);
