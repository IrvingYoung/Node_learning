# JavaScript Operators

Operators are special symbols used to perform operations on operands (values or variables).

## Categories of Operators

### Arithmetic Operators
Perform mathematical calculations:
```javascript
// Basic arithmetic
console.log(10 + 5);  // 15 (Addition)
console.log(10 - 5);  // 5 (Subtraction)
console.log(10 * 5);  // 50 (Multiplication)
console.log(10 / 5);  // 2 (Division)
console.log(10 % 3);  // 1 (Modulus/Remainder)
console.log(2 ** 3);  // 8 (Exponentiation)

// Increment/Decrement
let x = 5;
console.log(x++);  // 5 (Post-increment)
console.log(x);    // 6
console.log(++x);  // 7 (Pre-increment)
```

### Assignment Operators
Assign values to variables:
```javascript
let y = 10;
y += 5;  // y = y + 5 → 15
y -= 3;  // y = y - 3 → 12
y *= 2;  // y = y * 2 → 24
y /= 4;  // y = y / 4 → 6
y %= 5;  // y = y % 5 → 1
y **= 3; // y = y ** 3 → 1
```

### Comparison Operators
Compare two values:
```javascript
// Loose vs strict equality
console.log(5 == '5');   // true (type coercion)
console.log(5 === '5');  // false (strict)

// Inequality
console.log(5 != '5');   // false
console.log(5 !== '5');  // true

// Relational
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
```

### Logical Operators
Combine or modify boolean values:
```javascript
// AND (&&) - both must be true
console.log(true && false);  // false

// OR (||) - at least one true
console.log(true || false);  // true

// NOT (!) - inverts boolean
console.log(!true);  // false

// Short-circuit evaluation
const config = { timeout: 0 };
const timeout = config.timeout || 3000;  // 3000 (0 is falsy)
const timeout2 = config.timeout ?? 3000; // 0 (Nullish coalescing)
```

### Ternary Operator
Shorthand for if-else:
```javascript
const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);  // 'Adult'
```

### Special Operators
```javascript
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Optional chaining
const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name);  // 'Alice'
console.log(user?.address?.city);  // undefined (no error)

// Nullish coalescing
const input = null;
const value = input ?? 'default';  // 'default'
```

## Examples

See `examples/operators.js` for practical implementations.
