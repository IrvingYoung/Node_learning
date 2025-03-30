// Variables in JavaScript

// 1. Declaring variables using 'let' (ES6 and later)
let age = 30;
let userName = "John Doe";

console.log("User Name:", userName);
console.log("Age:", age);

age = 31; // Re-assigning value to 'age'
console.log("Updated Age:", age);


// 2. Declaring variables using 'const' (for constants - values that should not change)
const birthYear = 1993;
console.log("Birth Year:", birthYear);

// birthYear = 1994; // This will cause an error because you cannot re-assign a value to a 'const' variable


// 3. Declaring variables using 'var' (older way - avoid in modern JavaScript)
var job = "Software Engineer";
console.log("Job:", job);

job = "Web Developer"; // Re-assigning value to 'job'
console.log("Updated Job:", job);


// Data Types in JavaScript

// 1. Primitive Data Types

// Number
let temperature = 25.5;
let count = 100;
console.log("Temperature:", temperature, typeof temperature);
console.log("Count:", count, typeof count);

// String
let message = 'Hello, JavaScript!';
let greeting = "Welcome";
console.log("Message:", message, typeof message);
console.log("Greeting:", greeting, typeof greeting);

// Boolean
let isAdult = true;
let isLoggedIn = false;
console.log("Is Adult:", isAdult, typeof isAdult);
console.log("Is Logged In:", isLoggedIn, typeof isLoggedIn);

// Undefined
let city;
console.log("City:", city, typeof city); // Variable declared but not assigned a value

// Null
let address = null;
console.log("Address:", address, typeof address); // Intentional absence of a value

// Symbol (ES6) - Unique and immutable primitive value (less commonly used in basic tutorials)
let uniqueID = Symbol("id");
console.log("UniqueID:", uniqueID, typeof uniqueID);

// BigInt (ES2020) - For integers larger than the Number type can reliably represent
let largeNumber = 9007199254740991n;
console.log("Large Number:", largeNumber, typeof largeNumber);


// 2. Object (Object Data Type) - Complex data type

// Object
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    isStudent: false
};
console.log("Person Object:", person, typeof person);
console.log("Person First Name:", person.firstName);


// 3. Function (Object Data Type, but often considered a special type)

function sayHello(name) {
    console.log('Hello, ' + name + '!');
}
console.log("Say Hello Function:", sayHello, typeof sayHello);
sayHello("Bob");
