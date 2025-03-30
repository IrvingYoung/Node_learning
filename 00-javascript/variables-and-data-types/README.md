# Variables and Data Types in JavaScript

## Variables

Variables are containers for storing data values. In JavaScript, you can declare variables using:

-   `let`:  For variables that may be reassigned. Introduced in ES6.
-   `const`: For constants, variables with values that should not be reassigned. Introduced in ES6.
-   `var`:  Older way to declare variables. Avoid using `var` in modern JavaScript due to scope issues.

### `let`

-   Allows you to declare variables that can be reassigned.
-   Has block scope.

```javascript
let age = 30;
console.log(age); // Output: 30
age = 31; // Reassigning value
console.log(age); // Output: 31
```

### `const`

-   Used for declaring constants. Value must be assigned upon declaration and cannot be reassigned.
-   Has block scope.

```javascript
const birthYear = 1993;
console.log(birthYear); // Output: 1993
// birthYear = 1994; // Error: Assignment to constant variable.
```

### `var`

-   Older way of declaring variables.
-   Has function scope, not block scope, which can lead to issues in modern JavaScript.
-   Avoid using `var` unless you have specific reasons related to legacy code.

```javascript
var job = "Engineer";
console.log(job); // Output: Engineer
job = "Developer"; // Reassigning value
console.log(job); // Output: Developer
```

## Data Types

JavaScript has dynamic typing, meaning you do not need to specify the data type of a variable when you declare it. JavaScript data types can be divided into:

### 1. Primitive Data Types

-   **Number:** Represents numeric values, including integers and floating-point numbers.
    ```javascript
    let count = 100;
    let price = 29.99;
    ```
-   **String:** Represents textual data. Strings are immutable and enclosed in single quotes `' '` or double quotes `" "`.
    ```javascript
    let name = "Alice";
    let message = 'Hello';
    ```
-   **Boolean:** Represents logical entities and can have two values: `true` or `false`.
    ```javascript
    let isAdult = true;
    let isLoggedIn = false;
    ```
-   **Undefined:** Represents a variable that has been declared but has not been assigned a value.
    ```javascript
    let city;
    console.log(city); // Output: undefined
    ```
-   **Null:** Represents the intentional absence of any object value. It is a primitive value that represents the null, empty, or non-existent reference.
    -   **Use Case:** Often used to explicitly indicate that a variable should not hold an object value, or to clear the value of a variable.
    ```javascript
    let address = null; // Explicitly stating no address value
    console.log(address); // Output: null
    ```
-   **Symbol (ES6):** Represents a unique and immutable primitive value. Symbols are often used as identifiers for object properties to avoid namespace collisions.
    -   **Key Characteristics:**
        -   **Unique:** Each `Symbol()` call creates a brand new unique symbol.
        -   **Immutable:** Symbol values cannot be changed once created.
        -   **Used as Property Keys:** Symbols can be used as keys for object properties, ensuring these properties are hidden from typical enumeration and accidental overwriting.
    ```javascript
    const id = Symbol("id"); // Creating a unique symbol
    let user = {};
    user[id] = "uniqueUserID"; // Using symbol as a property key
    console.log(user[id]); // Output: uniqueUserID
    console.log(Object.keys(user)); // Output: [] (Symbol keys are not listed by default)
    ```
-   **BigInt (ES2020):** Represents integers of arbitrary length, allowing you to safely perform arithmetic operations on integers that are too large to be represented by the Number primitive.
    -   **Use Case:**  Essential for handling very large integers in calculations where precision is critical, such as financial calculations, cryptography, or working with large datasets.
    -   **Creating BigInts:** You can create BigInt values by appending `n` to the end of an integer literal or by calling the `BigInt()` constructor.
    ```javascript
    let largeNumber = 9007199254740991n; // BigInt literal
    let anotherLargeNumber = BigInt(9007199254740991); // BigInt constructor
    console.log(largeNumber + 1n); // BigInt arithmetic
    ```

### 2. Object (Object Data Type)

-   Objects are complex data types that allow you to store collections of data.
-   Objects in JavaScript are collections of key-value pairs.

    ```javascript
    let person = {
        firstName: "Bob",
        lastName: "Johnson",
        age: 35
    };
    console.log(person.firstName); // Output: Bob
    ```

### 3. Function (Object Data Type)

-   In JavaScript, functions are also objects. They are callable objects and are fundamental building blocks for creating reusable code.

    ```javascript
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
    greet("Charlie"); // Output: Hello, Charlie!
    ```

## typeof Operator

-   You can use the `typeof` operator to determine the data type of a variable.

    ```javascript
    let value = 42;
    console.log(typeof value); // Output: number
    ```

## Examples

See the `examples/` folder for code examples related to variables and data types.

[Link to examples/variables-and-data-types.js] *(Will be added when linking is set up)*

---

[Go to next topic: Operators](./02-operators/README.md) *(Will be added when linking is set up)*
