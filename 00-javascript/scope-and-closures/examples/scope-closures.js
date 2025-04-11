// Scope Examples
console.log('=== Scope Examples ===');

// Global scope
const globalMessage = 'Hello from global scope';

function scopeDemo() {
  // Function scope
  const functionMessage = 'Hello from function scope';
  console.log(globalMessage); // Accessible
  console.log(functionMessage); // Accessible

  if (true) {
    // Block scope (ES6)
    const blockMessage = 'Hello from block scope';
    console.log(blockMessage); // Accessible
    console.log(functionMessage); // Also accessible
  }
  
  // console.log(blockMessage); // Error - not accessible
}

scopeDemo();
// console.log(functionMessage); // Error - not accessible

// Closure Examples
console.log('\n=== Closure Examples ===');

// Basic closure
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');
console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob'));      // "Hi, Bob!"

// Practical closure - counter
function createCounter() {
  let count = 0;
  return {
    increment: function() { return ++count; },
    decrement: function() { return --count; },
    getCount: function() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// Module pattern
const calculator = (function() {
  let memory = 0;

  return {
    add: function(a, b) {
      memory = a + b;
      return memory;
    },
    subtract: function(a, b) {
      memory = a - b;
      return memory;
    },
    getMemory: function() {
      return memory;
    },
    clearMemory: function() {
      memory = 0;
    }
  };
})();

console.log(calculator.add(5, 3));      // 8
console.log(calculator.getMemory());    // 8
console.log(calculator.subtract(10, 2)); // 8
calculator.clearMemory();
console.log(calculator.getMemory());    // 0