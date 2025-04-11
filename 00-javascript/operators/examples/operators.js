// Arithmetic Operators
console.log('\n=== Arithmetic Operators ===');
let a = 10, b = 3;
console.log(`${a} + ${b} =`, a + b);  // 13
console.log(`${a} - ${b} =`, a - b);  // 7
console.log(`${a} * ${b} =`, a * b);  // 30
console.log(`${a} / ${b} =`, a / b);  // 3.333...
console.log(`${a} % ${b} =`, a % b);  // 1
console.log(`${a} ** ${b} =`, a ** b); // 1000

// Assignment Operators
console.log('\n=== Assignment Operators ===');
let x = 5;
x += 3; console.log('x += 3 →', x);  // 8
x -= 2; console.log('x -= 2 →', x);  // 6
x *= 4; console.log('x *= 4 →', x);  // 24
x /= 3; console.log('x /= 3 →', x);  // 8
x %= 5; console.log('x %= 5 →', x);  // 3
x **= 2; console.log('x **= 2 →', x); // 9

// Comparison Operators
console.log('\n=== Comparison Operators ===');
console.log('5 == "5" →', 5 == '5');   // true
console.log('5 === "5" →', 5 === '5'); // false
console.log('5 != "5" →', 5 != '5');   // false
console.log('5 !== "5" →', 5 !== '5'); // true
console.log('5 > 3 →', 5 > 3);        // true
console.log('5 < 3 →', 5 < 3);        // false

// Logical Operators
console.log('\n=== Logical Operators ===');
console.log('true && false →', true && false);  // false
console.log('true || false →', true || false);  // true
console.log('!true →', !true);                 // false

// Practical use with short-circuiting
const config = { timeout: 0 };
const timeout = config.timeout || 3000;
console.log('Timeout (||):', timeout);  // 3000
const timeoutSafe = config.timeout ?? 3000;
console.log('Timeout (??):', timeoutSafe);  // 0

// Ternary Operator
console.log('\n=== Ternary Operator ===');
const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';
console.log(`Age ${age}:`, status);  // 'Adult'

// Special Operators
console.log('\n=== Special Operators ===');
// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log('Spread array:', arr2);  // [1, 2, 3, 4, 5]

// Optional Chaining
const user = { 
  profile: { 
    name: 'Alice',
    address: null
  } 
};
console.log('User name:', user?.profile?.name);  // 'Alice'
console.log('User city:', user?.profile?.address?.city);  // undefined

// Nullish Coalescing
const input = null;
const value = input ?? 'default';
console.log('Nullish coalescing:', value);  // 'default'
