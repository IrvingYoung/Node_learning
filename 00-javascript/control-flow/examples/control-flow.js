// JavaScript Control Flow Examples

console.log("--- Conditional Statements ---");

// if, else if, else
let score = 82;
console.log(`Score: ${score}`);
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will run
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or F");
}
console.log(""); // Newline

// switch
let fruit = "Apple";
console.log(`Fruit: ${fruit}`);
switch (fruit) {
  case "Banana":
    console.log("It's yellow.");
    break;
  case "Apple":
    console.log("It's red or green."); // This will run
    break;
  case "Orange":
    console.log("It's orange.");
    break;
  default:
    console.log("Unknown fruit.");
}
console.log(""); // Newline

console.log("--- Looping Statements ---");

// for loop
console.log("for loop (0 to 3):");
for (let i = 0; i < 4; i++) {
  console.log(i);
}
console.log(""); // Newline

// while loop
console.log("while loop (count < 3):");
let count = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}
console.log(""); // Newline

// do...while loop
console.log("do...while loop (runs at least once):");
let proceed = false;
do {
  console.log("This runs once.");
} while (proceed);
console.log(""); // Newline

// for...in loop (iterating object keys)
console.log("for...in loop (object properties):");
const car = { make: "Toyota", model: "Camry", year: 2021 };
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
console.log(""); // Newline

// for...of loop (iterating iterable values)
console.log("for...of loop (array values):");
const numbers = [10, 20, 30];
for (let number of numbers) {
  console.log(number);
}
console.log(""); // Newline

console.log("--- Control Flow Modifiers ---");

// break in a loop
console.log("break example (stops at 5):");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(""); // Newline

// continue in a loop
console.log("continue example (skips 2):");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the rest of this iteration when i is 2
  }
  console.log(i); // 0, 1, 3, 4
}
console.log(""); // Newline
