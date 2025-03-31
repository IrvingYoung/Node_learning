// JavaScript Arrays Examples

console.log("--- Creating Arrays & Accessing/Modifying ---");
const fruits = ["Apple", "Banana", "Orange"];
console.log("Initial fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

fruits[1] = "Mango"; // Modify element
console.log("Modified fruits:", fruits);

fruits.length = 2; // Truncate
console.log("Truncated fruits:", fruits);
console.log("");

// --- Mutator Methods ---
console.log("--- Mutator Methods ---");
const veggies = ["Carrot", "Broccoli"];
console.log("Initial veggies:", veggies);

veggies.push("Spinach", "Kale"); // push
console.log("After push:", veggies);

let removedVeggie = veggies.pop(); // pop
console.log("After pop:", veggies);
console.log("Removed veggie (pop):", removedVeggie);

removedVeggie = veggies.shift(); // shift
console.log("After shift:", veggies);
console.log("Removed veggie (shift):", removedVeggie);

veggies.unshift("Potato", "Onion"); // unshift
console.log("After unshift:", veggies);

// splice
const colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Initial colors:", colors);
let removedColors = colors.splice(1, 2, "Purple", "Orange"); // Remove Green, Blue; Add Purple, Orange at index 1
console.log("After splice:", colors);
console.log("Removed colors (splice):", removedColors);

// sort
const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log("Sorted names:", names);
const points = [10, 100, 5, 25];
points.sort((a, b) => a - b); // Numeric sort
console.log("Sorted points:", points);

// reverse
points.reverse();
console.log("Reversed points:", points);

// fill
const fillArr = new Array(5);
fillArr.fill(0); // Fill all with 0
console.log("Filled array (all 0):", fillArr);
fillArr.fill(1, 1, 3); // Fill with 1 from index 1 up to (not including) 3
console.log("Filled array (partial 1):", fillArr);
console.log("");

// --- Accessor Methods ---
console.log("--- Accessor Methods ---");
const letters = ['a', 'b', 'c', 'd', 'e'];
console.log("Initial letters:", letters);

const slicedLetters = letters.slice(1, 4); // slice
console.log("Sliced letters (1-3):", slicedLetters);
console.log("Original letters (unchanged):", letters);

const moreLetters = ['f', 'g'];
const combinedLetters = letters.concat(moreLetters); // concat
console.log("Concatenated letters:", combinedLetters);

const joinedString = letters.join(" - "); // join
console.log("Joined letters:", joinedString);

console.log("Index of 'c':", letters.indexOf('c')); // indexOf
console.log("Index of 'z':", letters.indexOf('z'));
console.log("Last index of 'b':", ['a','b','c','b'].lastIndexOf('b')); // lastIndexOf

console.log("Includes 'd'?", letters.includes('d')); // includes
console.log("Includes 'x'?", letters.includes('x'));
console.log("");

// --- Iteration Methods ---
console.log("--- Iteration Methods ---");
const nums = [1, 2, 3, 4, 5];
console.log("Initial nums:", nums);

console.log("forEach:");
nums.forEach((num, index) => console.log(`  Index ${index}: ${num}`));

console.log("map (doubled):");
const doubled = nums.map(num => num * 2);
console.log(doubled);

console.log("filter (even):");
const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

console.log("reduce (sum):");
const sum = nums.reduce((acc, current) => acc + current, 0);
console.log(sum);

console.log("some (is > 3?):");
const hasGreaterThan3 = nums.some(num => num > 3);
console.log(hasGreaterThan3);

console.log("every (is < 10?):");
const allLessThan10 = nums.every(num => num < 10);
console.log(allLessThan10);

console.log("find (first even):");
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

console.log("findIndex (first even):");
const firstEvenIndex = nums.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);
console.log("");

// --- Multi-dimensional Arrays ---
console.log("--- Multi-dimensional Arrays ---");
const grid = [ [1, 2], [3, 4], [5, 6] ];
console.log("Grid:", grid);
console.log("Element grid[1][0]:", grid[1][0]); // 3
console.log("");

// --- Spread Syntax ---
console.log("--- Spread Syntax ---");
const part1 = [10, 20];
const part2 = [40, 50];
const full = [0, ...part1, 30, ...part2, 60];
console.log("Spread combined:", full);
const copy = [...full];
console.log("Spread copy:", copy);
function multiplyThree(x, y, z) { return x * y * z; }
console.log("Spread arguments:", multiplyThree(...[2, 3, 4])); // 24
console.log("");

// --- Destructuring Assignment ---
console.log("--- Destructuring Assignment ---");
const coords = [100, 200, 300];
const [x, y, z] = coords;
console.log(`x=${x}, y=${y}, z=${z}`);

const [first, ...rest] = coords;
console.log("First:", first);
console.log("Rest:", rest);

const [a, b = 0, c = 0, d = -1] = [5, 15]; // Default values
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`);
console.log("");
