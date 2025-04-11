# JavaScript Scope and Closures

Understanding scope and closures is fundamental to mastering JavaScript.

## Scope

Scope determines the visibility/accessibility of variables. JavaScript has:

### Global Scope
Variables declared outside any function or block.
```javascript
const globalVar = 'I am global';
function test() {
  console.log(globalVar); // Accessible
}
```

### Function/Local Scope
Variables declared within a function.
```javascript
function myFunction() {
  const localVar = 'I am local';
  console.log(localVar); // Accessible
}
// console.log(localVar); // Error - not accessible
```

### Block Scope (ES6)
Variables declared with `let` and `const` within blocks `{}`.
```javascript
if (true) {
  const blockVar = 'I am block-scoped';
  let anotherVar = 'Me too';
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // Error - not accessible
```

### Lexical Scope
Inner functions have access to variables from outer functions.
```javascript
function outer() {
  const outerVar = 'Outside';
  function inner() {
    console.log(outerVar); // 'Outside'
  }
  inner();
}
```

## Closures

A closure is a function bundled with its lexical environment.

### Basic Closure Example
```javascript
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
```
The inner function maintains access to `count` even after `makeCounter` finishes.

### Practical Uses
1. Data privacy/encapsulation
2. Partial application/currying
3. Event handlers with persistent data
4. Module pattern implementation

## Examples

See `examples/scope-closures.js` for practical implementations.