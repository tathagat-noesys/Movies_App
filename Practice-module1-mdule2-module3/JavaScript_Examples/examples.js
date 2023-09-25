// console.log("hello world");

//~ Var , Let and Const
//var -> functional scoped -> hoisted with undefined and initialized with undefined
//assignment happens latter.
// var variables can be redeclared in the same scope again

//let -> block scoped -> hoiseted but not initialized and hence cause temporal dead zones
//let cannot be redeclared in the same scope again

//const -> blocl scoped -> hoiseted but not initialzed and hence cause temporal dead zones
//const cannot be redeclared in the same scope again.

//~ Normal Functions and Arrow Functions

//Normal Function
function curryAdd(x, ...args) {
  console.log(arguments); // normal function have arguments
  // normal function have "this" binded to the object in context
  return function (y) {
    if (!args) {
      args = [0];
    }
    return x + y + args.reduce((a, b) => a + b, (intial = 0));
  };
}

let obj = {
  name: "tag",
  age: 14,
};

function greet(o) {
  console.log(this);
  console.log(`Hi,${this.name} with age ${this.age}`);
}

greet.call(obj); //explicit binding
greet.bind(obj);

//arrow function
const curry = (x) => (y) => x + y;
//arrow function have lexical context of "this"
//arrow functions dont have "arguments" array
let ans = curry(5);
let result = ans(6);
let add = curryAdd(5);
let add2 = add(2);
//An currying function that can take any number of first argument and fixed second argument
let add3 = curryAdd(4, 33, 4)(3);
//console.log(add2, add3);

//~ ternary operators

function print(booleanValue) {
  return booleanValue ? "yes" : "no";
}

//console.log(print(true));

//~ Enchanced Object Literal
let playerScore = 0;
for (let i = 0; i <= 12; i++) {
  obj[`Player${i + 1}`] = playerScore++;
}

//console.log(obj);

const ObjectFunction = (prop, obj) => obj[prop];

//console.log(ObjectFunction("Player2", obj));

const { age } = obj;

//console.log(age);

const arr = [0, 1, 2, 3, 4, 5];

const [firstName, ...lat] = arr;
console.log(firstName);
console.log(lat);

//~ Classes

class rectangle {
  constructor(height, width) {
    (this.height = height), (this.width = width);
  }
  area() {
    return this.height * this.width;
  }
}

let myRectange = new rectangle(10, 20);
//console.log(myRectange.area());

class square extends rectangle {
  constructor(side) {
    super(side, side);
  }
}

let mySquare = new square(3);
console.log(mySquare.area());
