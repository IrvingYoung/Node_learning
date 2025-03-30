// JavaScript Functions Examples

console.log("--- Function Declaration ---");
// Can be called before definition due to hoisting
sayHello("Declared Function");

function sayHello(message) {
  console.log(`Hello from ${message}!`);
}
sayHello("Declared Function Again");
console.log("");

// --- Function Expression ---
console.log("--- Function Expression ---");
// Cannot be called before assignment
// sayGoodbye("Expressed Function"); // TypeError

const sayGoodbye = function(message) {
  console.log(`Goodbye from ${message}!`);
};
sayGoodbye("Expressed Function");

// Named Function Expression (useful for debugging/recursion)
const factorial = function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1); // Can call itself by name
};
console.log("Factorial of 4:", factorial(4));
console.log("");

// --- Arrow Functions (ES6) ---
console.log("--- Arrow Functions ---");
const add = (a, b) => {
  return a + b;
};
console.log("Add (10, 5):", add(10, 5));

const square = x => x * x; // Implicit return, single parameter
console.log("Square of 7:", square(7));

const getRandom = () => Math.random(); // No parameters
console.log("Random number:", getRandom());
console.log("");

// --- Parameters vs. Arguments ---
console.log("--- Parameters vs. Arguments ---");
function printInfo(name, age) { // name, age are parameters
  console.log(`Name: ${name}, Age: ${age}`);
  console.log("Arguments object:", arguments); // arguments holds actual values passed
}
printInfo("Bob", 35); // "Bob", 35 are arguments
console.log("");

// --- Return Statement ---
console.log("--- Return Statement ---");
function multiply(a, b) {
  return a * b; // Explicit return
}
function logOnly(message) {
  console.log(message);
  // Implicitly returns undefined
}
let product = multiply(6, 7);
console.log("Product:", product);
let logResult = logOnly("Logging...");
console.log("Log result:", logResult);
console.log("");

// --- Scope ---
console.log("--- Scope ---");
let globalScopeVar = "Global";

function checkScope() {
  var functionScopeVar = "Function (var)";
  let blockScopeVar = "Function/Block (let)";
  console.log("Inside function:", globalScopeVar); // Access global
  if (true) {
    let innerBlockScopeVar = "Inner Block (let)";
    console.log("Inside block:", blockScopeVar); // Access outer block/function
    console.log("Inside block:", innerBlockScopeVar);
  }
  // console.log(innerBlockScopeVar); // Error
}
checkScope();
// console.log(functionScopeVar); // Error
// console.log(blockScopeVar); // Error
console.log("");

// --- Hoisting ---
console.log("--- Hoisting ---");
hoistedFunc(); // Works for function declaration

function hoistedFunc() {
  console.log("Function declaration was hoisted.");
}

console.log("hoistedVar:", hoistedVar); // undefined (var declaration hoisted)
var hoistedVar = "Initialized";
console.log("hoistedVar:", hoistedVar);

// console.log(hoistedLet); // ReferenceError (let/const hoisted but not initialized - TDZ)
let hoistedLet = "Initialized Let";
console.log("hoistedLet:", hoistedLet);
console.log("");

// --- First-Class Functions ---
console.log("--- First-Class Functions ---");
// 1. Assign to variable
const greet = function(name) { console.log(`Hello, ${name}`); };
// 2. Pass as argument
function executeGreeting(greeterFunc, name) {
  greeterFunc(name);
}
executeGreeting(greet, "Alice");
// 3. Return from function
function createAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = createAdder(5);
console.log("add5(10):", add5(10));
console.log("");

// --- Higher-Order Functions ---
console.log("--- Higher-Order Functions ---");
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(n => n * 2); // map is higher-order
console.log("Doubled numbers:", doubledNumbers);
const add10 = createAdder(10); // createAdder is higher-order
console.log("add10(7):", add10(7));
console.log("");

// --- Callbacks ---
console.log("--- Callbacks ---");
// Synchronous
function processItems(items, cb) {
  items.forEach(item => cb(item));
}
processItems(["a", "b", "c"], item => console.log("Processing item:", item));

// Asynchronous (simulated)
function simulateAsync(data, callback) {
  console.log("Starting async simulation...");
  setTimeout(() => {
    console.log("Async operation complete.");
    callback(null, `Processed: ${data}`); // Error-first callback
  }, 1000);
}
simulateAsync("Task Data", (err, result) => {
  if (err) console.error("Error:", err);
  else console.log("Async Callback Result:", result);
});
console.log("Async request made..."); // Logs before callback
console.log(""); // Add newline before potential async output

// --- Closures ---
// (Run this part after a delay to see async callback finish first)
setTimeout(() => {
  console.log("--- Closures ---");
  function makeCounter() {
    let count = 0;
    return function() { // This inner function is a closure
      count++;
      return count;
    };
  }
  const counterA = makeCounter();
  const counterB = makeCounter();
  console.log("Counter A:", counterA());
  console.log("Counter A:", counterA());
  console.log("Counter B:", counterB());
  console.log("");
}, 1600); // Delay to ensure it runs after async callback example

// --- IIFE ---
// (Run this part after a delay)
setTimeout(() => {
  console.log("--- IIFE ---");
  (function() {
    var iifeVar = "Inside IIFE";
    console.log(iifeVar);
  })();
  // console.log(iifeVar); // Error
  (function(msg) {
    console.log("IIFE Message:", msg);
  })("Passed to IIFE");
  console.log("");
}, 1700);

// --- Default Parameters ---
// (Run this part after a delay)
setTimeout(() => {
  console.log("--- Default Parameters ---");
  function welcome(user = "Visitor") {
    console.log(`Welcome, ${user}!`);
  }
  welcome();
  welcome("Charlie");
  console.log("");
}, 1800);

// --- Rest Parameters ---
// (Run this part after a delay)
setTimeout(() => {
  console.log("--- Rest Parameters ---");
  function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0);
  }
  console.log("Sum(1,2,3):", sum(1, 2, 3));
  console.log("Sum(5,10,15,20):", sum(5, 10, 15, 20));
  console.log("");
}, 1900);

// --- 'this' Keyword ---
// (Run this part after a delay)
setTimeout(() => {
  console.log("--- 'this' Keyword ---");
  // 1. Object Method
  const person = {
    name: "Diana",
    speak: function() { console.log(`Method 'this': My name is ${this.name}`); }
  };
  person.speak();

  // 2. Constructor Call
  function Car(make) {
    this.make = make;
    console.log(`Constructor 'this': Created a ${this.make}`);
  }
  const myCar = new Car("Honda");

  // 3. Explicit Binding (call)
  function showDetails() {
    console.log(`Explicit 'this': ${this.detail}`);
  }
  const details = { detail: "Explicitly bound" };
  showDetails.call(details);

  // 4. Arrow Function (lexical this - harder to demo simply here)
  // See README example with setInterval for a better illustration
  console.log("Arrow function 'this' is lexical (see README).");

}, 2000);
