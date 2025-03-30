// JavaScript Operators Examples

// --- Arithmetic Operators ---
let a = 10;
let b = 4;

console.log("--- Arithmetic Operators ---");
console.log("a + b =", a + b); // Addition: 14
console.log("a - b =", a - b); // Subtraction: 6
console.log("a * b =", a * b); // Multiplication: 40
console.log("a / b =", a / b); // Division: 2.5
console.log("a % b =", a % b); // Modulus (Remainder): 2
console.log("a ** b =", a ** b); // Exponentiation (a to the power of b): 10000

let c = 5;
c++; // Increment
console.log("c++ =", c); // 6
c--; // Decrement
console.log("c-- =", c); // 5
console.log(""); // Newline for readability

// --- Assignment Operators ---
console.log("--- Assignment Operators ---");
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log("x += 5:", x); // 15
x -= 3; // Equivalent to x = x - 3
console.log("x -= 3:", x); // 12
x *= 2; // Equivalent to x = x * 2
console.log("x *= 2:", x); // 24
x /= 4; // Equivalent to x = x / 4
console.log("x /= 4:", x); // 6
x %= 5; // Equivalent to x = x % 5
console.log("x %= 5:", x); // 1
console.log("");

// --- Comparison Operators ---
console.log("--- Comparison Operators ---");
let val1 = 5;
let val2 = "5";
let val3 = 10;

console.log("val1 == val2:", val1 == val2);   // Loose equality (true, type coercion)
console.log("val1 === val2:", val1 === val2); // Strict equality (false, different types)
console.log("val1 != val2:", val1 != val2);   // Loose inequality (false)
console.log("val1 !== val2:", val1 !== val2); // Strict inequality (true)
console.log("val1 > val3:", val1 > val3);    // Greater than (false)
console.log("val1 < val3:", val1 < val3);    // Less than (true)
console.log("val1 >= 5:", val1 >= 5);       // Greater than or equal to (true)
console.log("val3 <= 10:", val3 <= 10);     // Less than or equal to (true)
console.log("");

// --- Logical Operators ---
console.log("--- Logical Operators ---");
let p = true;
let q = false;

console.log("p && q:", p && q); // Logical AND (false)
console.log("p || q:", p || q); // Logical OR (true)
console.log("!p:", !p);       // Logical NOT (false)
console.log("");

// --- Ternary Operator ---
console.log("--- Ternary Operator ---");
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Status:", status); // Output: Adult
console.log("");

// --- typeof Operator ---
console.log("--- typeof Operator ---");
console.log("typeof val1:", typeof val1);     // number
console.log("typeof val2:", typeof val2);     // string
console.log("typeof p:", typeof p);         // boolean
console.log("typeof status:", typeof status); // string
console.log("typeof {}:", typeof {});       // object
console.log("typeof null:", typeof null);     // object (historical quirk)
console.log("typeof undefined:", typeof undefined); // undefined
console.log("");
