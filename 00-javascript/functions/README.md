# JavaScript Functions

Functions are fundamental building blocks in JavaScript. They are blocks of code designed to perform a particular task. Functions allow you to encapsulate a piece of code, make it reusable, and organize your program.

## Key Concepts

*   **Function Declaration:** This is the traditional way to define a function using the `function` keyword, followed by the function name, parameters in parentheses `()`, and the function body in curly braces `{}`. Function declarations are hoisted, meaning they are available throughout their scope even if called before their definition in the code.
    ```javascript
    // Function Declaration
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }

    greet("Alice"); // Call the function

    // Can be called before definition due to hoisting
    sayGoodbye("Bob");

    function sayGoodbye(name) {
      console.log(`Goodbye, ${name}!`);
    }
    ```

*   **Function Expression:** A function can also be defined as part of an expression, typically by assigning it to a variable. Function expressions are *not* hoisted in the same way as declarations (only the variable declaration is hoisted, not the function assignment). They can be named or anonymous (most commonly anonymous).
    ```javascript
    // Anonymous Function Expression
    const add = function(a, b) {
      return a + b;
    };

    let sum = add(5, 3);
    console.log(`Sum: ${sum}`); // Output: Sum: 8

    // Cannot call before assignment
    // multiply(2, 4); // This would cause a TypeError

    const multiply = function(x, y) {
      return x * y;
    };
    ```
    *   **Named Function Expression:** Useful for debugging (shows the name in stack traces) or recursion.
        ```javascript
        const factorial = function calculateFactorial(n) {
          if (n === 0 || n === 1) {
            return 1;
          } else {
            // Can refer to itself by name for recursion
            return n * calculateFactorial(n - 1);
          }
        };
        console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120
        // console.log(calculateFactorial); // Error: calculateFactorial is not defined in the outer scope
        ```

*   **Arrow Functions (ES6):** Introduced in ES6, arrow functions provide a shorter syntax for writing function expressions. They are always anonymous.
    *   **Basic Syntax:** `(param1, param2, ...) => { statements }` or `(param1, param2, ...) => expression` (implicit return).
    *   **Single Parameter:** Parentheses `()` around the parameter are optional if there's only one.
    *   **No Parameters:** Requires empty parentheses `()`.
    *   **Lexical `this`:** Unlike regular functions, arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding (lexical) scope where they were defined. This is often very helpful in avoiding `this` binding issues, especially with callbacks or methods.
    ```javascript
    // Arrow function expression
    const subtract = (a, b) => {
      return a - b;
    };
    console.log(`Subtraction: ${subtract(10, 4)}`); // Output: Subtraction: 6

    // Implicit return (for single expression)
    const double = n => n * 2;
    console.log(`Double of 5: ${double(5)}`); // Output: Double of 5: 10

    // No parameters
    const sayHi = () => console.log("Hi there!");
    sayHi(); // Output: Hi there!

    // Example demonstrating lexical 'this' (more relevant in object methods/callbacks)
    // (A more complex example would be needed to fully illustrate 'this' difference)
    ```

*   **Parameters vs. Arguments:**
    *   **Parameters:** These are the names listed in the function definition. They act as placeholders for the values that will be passed into the function.
    *   **Arguments:** These are the actual values that are passed to the function when it is invoked (called).
    ```javascript
    // 'param1' and 'param2' are parameters
    function exampleFunction(param1, param2) {
      console.log("Parameter 1:", param1);
      console.log("Parameter 2:", param2);
      console.log("Arguments object:", arguments); // 'arguments' is an array-like object available inside regular functions
    }

    // 10 and "hello" are arguments
    exampleFunction(10, "hello");
    // Output:
    // Parameter 1: 10
    // Parameter 2: hello
    // Arguments object: [Arguments] { '0': 10, '1': 'hello' }

    // Note: The 'arguments' object is not available in arrow functions.
    ```

*   **Return Statement:** The `return` statement stops the execution of a function and returns a value from that function. If the `return` statement is omitted, or if there's no expression after `return`, the function implicitly returns `undefined`.
    ```javascript
    function multiply(x, y) {
      // If return is omitted, the function returns undefined
      return x * y; // Returns the product of x and y
    }

    function logMessage(message) {
      console.log(message);
      // No return statement here, so it implicitly returns undefined
    }

    let product = multiply(4, 5);
    console.log(`Product: ${product}`); // Output: Product: 20

    let result = logMessage("Processing...");
    console.log(`Result of logMessage: ${result}`); // Output: Result of logMessage: undefined
    ```

*   **Scope:** Scope determines the visibility and accessibility of variables. JavaScript has several types of scope:
    *   **Global Scope:** Variables declared outside any function or block have global scope. They are accessible from anywhere in the code. Avoid polluting the global scope unnecessarily.
    *   **Function Scope:** Variables declared with `var` inside a function are accessible only within that function (and any nested functions). Variables declared with `let` or `const` inside a function also have function scope, but they are further restricted by block scope.
    *   **Block Scope (ES6):** Variables declared with `let` and `const` inside a block (code enclosed in `{}`) are only accessible within that block. This helps prevent accidental variable overwrites and makes code easier to reason about.
    ```javascript
    let globalVar = "I am global"; // Global scope

    function scopeTest() {
      var functionVar = "I am function-scoped (var)"; // Function scope
      let blockVarLet = "I am block-scoped (let)";     // Function scope (also block-scoped)
      const blockVarConst = "I am block-scoped (const)"; // Function scope (also block-scoped)

      console.log(globalVar); // Accessible

      if (true) {
        let innerBlockVar = "I am inner block-scoped"; // Block scope (only inside if)
        console.log(blockVarLet); // Accessible (defined in outer block)
        console.log(innerBlockVar); // Accessible
      }
      // console.log(innerBlockVar); // Error: innerBlockVar is not defined here
    }

    scopeTest();
    // console.log(functionVar); // Error: functionVar is not defined here
    // console.log(blockVarLet); // Error: blockVarLet is not defined here
    ```

*   **Hoisting:** Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (global scope or current function scope) before code execution.
    *   **Function Declarations:** Are fully hoisted, meaning the entire function definition (name and body) is moved to the top. This allows you to call a function declaration before it appears in your code.
    *   **`var` Variables:** Only the declaration (`var variableName;`) is hoisted, not the initialization (`= value`). Accessing the variable before its initialization line results in `undefined`.
    *   **`let` and `const` Variables:** Are also hoisted, but they are *not* initialized. Accessing them before the declaration line results in a `ReferenceError`. This is often referred to as the "Temporal Dead Zone" (TDZ).
    ```javascript
    // Function Declaration Hoisting
    hoistedFunction(); // Works: Output: "I was hoisted!"

    function hoistedFunction() {
      console.log("I was hoisted!");
    }

    // Variable Hoisting (var)
    console.log(hoistedVar); // Output: undefined (declaration hoisted, not initialization)
    var hoistedVar = "I am initialized later";
    console.log(hoistedVar); // Output: I am initialized later

    // Variable Hoisting (let/const - TDZ)
    // console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
    let hoistedLet = "Block scoped";
    console.log(hoistedLet); // Output: Block scoped
    ```

*   **First-Class Functions:** In JavaScript, functions are "first-class citizens". This means they are treated like any other value (e.g., numbers, strings, objects). Specifically, functions can be:
    *   Assigned to variables or stored in data structures (like arrays or objects).
    *   Passed as arguments to other functions.
    *   Returned as values from other functions.
    This capability is fundamental to many powerful patterns in JavaScript, including callbacks and higher-order functions.
    ```javascript
    // 1. Assigning a function to a variable
    const log = function(message) {
      console.log("LOG:", message);
    };
    log("Hello from variable!");

    // 2. Passing a function as an argument (callback)
    function processData(data, callbackFn) {
      console.log("Processing:", data);
      callbackFn("Processed: " + data); // Execute the callback
    }
    processData("User Input", log); // Pass 'log' function as argument

    // 3. Returning a function from another function
    function createMultiplier(factor) {
      // This inner function is returned
      return function(number) {
        return number * factor;
      };
    }
    const doubleFn = createMultiplier(2); // doubleFn is now a function
    const tripleFn = createMultiplier(3); // tripleFn is now a function

    console.log("Double of 10:", doubleFn(10)); // Output: Double of 10: 20
    console.log("Triple of 10:", tripleFn(10)); // Output: Triple of 10: 30
    ```

*   **Higher-Order Functions:** A function that either:
    1.  Takes one or more functions as arguments.
    2.  Returns a function as its result.
    This concept is directly related to functions being first-class citizens. Many built-in JavaScript array methods like `map`, `filter`, and `reduce` are higher-order functions.
    ```javascript
    // Example 1: Taking a function as an argument
    const numbers = [1, 2, 3, 4, 5];

    // .map() is a higher-order function; it takes a function as an argument
    const doubled = numbers.map(function(n) {
      return n * 2;
    });
    console.log("Doubled:", doubled); // Output: Doubled: [ 2, 4, 6, 8, 10 ]

    // Using an arrow function with map
    const tripled = numbers.map(n => n * 3);
    console.log("Tripled:", tripled); // Output: Tripled: [ 3, 6, 9, 12, 15 ]

    // Example 2: Returning a function (see createMultiplier in First-Class Functions example)
    function createGreeter(greeting) {
      return function(name) { // Returns a function
        console.log(`${greeting}, ${name}!`);
      };
    }
    const greetHello = createGreeter("Hello");
    const greetHi = createGreeter("Hi");

    greetHello("World"); // Output: Hello, World!
    greetHi("There");    // Output: Hi, There!
    ```

*   **Callbacks:** A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are a cornerstone of asynchronous programming in JavaScript (e.g., handling responses from API calls, reacting to user events, executing code after a timer).
    ```javascript
    // Synchronous Callback Example (like used in array methods)
    function processArray(arr, callback) {
      const results = [];
      for (let i = 0; i < arr.length; i++) {
        results.push(callback(arr[i])); // Execute the callback for each item
      }
      return results;
    }
    const nums = [1, 2, 3];
    const squaredNums = processArray(nums, function(n) { return n * n; });
    console.log("Squared Nums:", squaredNums); // Output: Squared Nums: [ 1, 4, 9 ]

    // Asynchronous Callback Example (using setTimeout)
    function fetchData(url, callback) {
      console.log(`Fetching data from ${url}...`);
      // Simulate network delay
      setTimeout(function() {
        const data = { message: "Data received!" };
        console.log("Data fetched.");
        callback(null, data); // Call the callback with results (error-first pattern common)
      }, 1500); // Delay of 1.5 seconds
    }

    // Define the callback function to handle the result
    function handleData(error, data) {
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Callback received data:", data);
      }
    }

    fetchData("https://example.com/api/data", handleData);
    console.log("Request initiated..."); // This logs before the callback runs

    // Note: While callbacks are fundamental, modern JavaScript often uses Promises and async/await
    // for more manageable asynchronous code, especially to avoid "callback hell".
    ```

*   **Closures:** A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing. Closures are created every time a function is created, at function creation time.
    *   **Key Idea:** The inner function "remembers" the environment in which it was created.
    *   **Common Uses:** Data privacy (creating private variables/methods), partial application/currying, maintaining state in asynchronous operations.
    ```javascript
    function createCounter() {
      let count = 0; // 'count' is in the outer function's scope

      // This inner function is a closure. It "closes over" the 'count' variable.
      return function() {
        count++;
        console.log(count);
      };
    }

    const counter1 = createCounter(); // counter1 holds the inner function
    const counter2 = createCounter(); // counter2 holds a *different* inner function with its own 'count'

    console.log("Counter 1:");
    counter1(); // Output: 1
    counter1(); // Output: 2

    console.log("Counter 2:");
    counter2(); // Output: 1 (independent count)

    console.log("Counter 1 again:");
    counter1(); // Output: 3 (continues its own count)
    ```

*   **Immediately Invoked Function Expressions (IIFE):** An IIFE is a function that is defined and executed as soon as it's created. It's a common pattern for creating a local scope to avoid polluting the global scope and for data privacy.
    *   **Syntax:** Typically involves wrapping a function expression in parentheses `()` and then immediately calling it with another pair of parentheses `()`.
    ```javascript
    (function() {
      // This code runs immediately
      var privateVar = "I am private to this IIFE scope";
      console.log("IIFE executed!");
      console.log(privateVar);
    })(); // The final () invokes the function

    // console.log(privateVar); // Error: privateVar is not defined in the global scope

    // IIFE with parameters
    (function(message) {
      console.log("Message from IIFE:", message);
    })("Hello IIFE!"); // Pass arguments here
    ```

*   **Default Parameters (ES6):** ES6 introduced the ability to set default values for function parameters directly in the function signature. If an argument for that parameter is not provided (or is explicitly `undefined`) when the function is called, the default value is used instead.
    ```javascript
    function greetUser(name = "Guest", greeting = "Hello") {
      console.log(`${greeting}, ${name}!`);
    }

    greetUser("Alice", "Hi"); // Output: Hi, Alice!
    greetUser("Bob");        // Output: Hello, Bob! (greeting defaults to "Hello")
    greetUser();             // Output: Hello, Guest! (both default)
    greetUser(undefined, "Welcome"); // Output: Welcome, Guest! (name defaults)
    ```

*   **Rest Parameters (ES6):** The rest parameter syntax (`...parameterName`) allows a function to accept an indefinite number of arguments as an array. It collects all remaining arguments passed to the function into a single array parameter.
    *   It must be the *last* parameter in the function definition.
    *   It provides a cleaner alternative to using the `arguments` object (which is not a real array and isn't available in arrow functions).
    ```javascript
    // Function using rest parameters to sum all arguments
    function sumAll(...numbers) { // 'numbers' will be an array
      let total = 0;
      for (let num of numbers) {
        total += num;
      }
      return total;
    }

    console.log(sumAll(1, 2));        // Output: 3
    console.log(sumAll(1, 2, 3, 4));  // Output: 10
    console.log(sumAll(5));           // Output: 5
    console.log(sumAll());            // Output: 0

    // Using rest parameters with other parameters
    function logUserInfo(id, ...details) { // 'details' collects the rest
      console.log(`User ID: ${id}`);
      console.log("Details:", details); // details is an array
    }

    logUserInfo(101, "Alice", 30, "New York");
    // Output:
    // User ID: 101
    // Details: [ 'Alice', 30, 'New York' ]
    ```

*   **`this` Keyword:** The `this` keyword in JavaScript behaves differently than in many other languages. Its value is determined by *how* a function is called (the "call site"). Here are the main rules:
    *   **Global Context:** When used outside any function (or in a simple function call in non-strict mode), `this` refers to the global object (`window` in browsers, `global` in Node.js, though it might be `undefined` in module scope or strict mode).
    *   **Object Method:** When a function is called as a method of an object (`object.method()`), `this` refers to the object the method was called on.
    *   **Constructor Call:** When a function is called with the `new` keyword (as a constructor), `this` refers to the newly created instance object.
    *   **Explicit Binding (`call`, `apply`, `bind`):** You can explicitly set the value of `this` using these methods.
    *   **Arrow Functions:** As mentioned earlier, arrow functions do *not* have their own `this`. They inherit `this` from their surrounding lexical scope. This makes them predictable and often preferred for callbacks within methods.
    ```javascript
    // 1. Global Context (Example - behavior can vary based on environment/strict mode)
    // console.log(this); // In browser global scope, logs 'window'

    // 2. Object Method
    const myObj = {
      name: "My Object",
      logName: function() {
        console.log(this.name); // 'this' refers to myObj
      }
    };
    myObj.logName(); // Output: My Object

    // 3. Constructor Call
    function Person(name) {
      this.name = name; // 'this' refers to the new object being created
    }
    const person1 = new Person("Charlie");
    console.log(person1.name); // Output: Charlie

    // 4. Explicit Binding (Example with call)
    function introduce() {
      console.log(`Hi, I'm ${this.name}`);
    }
    const user = { name: "David" };
    introduce.call(user); // Sets 'this' to 'user' for this call. Output: Hi, I'm David

    // 5. Arrow Function (Lexical 'this')
    const counterObj = {
      count: 0,
      start: function() {
        // Regular function would have 'this' as undefined or global in setTimeout callback
        // Arrow function inherits 'this' from the 'start' method's context (counterObj)
        setInterval(() => {
          this.count++;
          console.log(this.count); // 'this' correctly refers to counterObj
        }, 1000);
      }
    };
    // counterObj.start(); // Uncomment to see the counter run
    ```
    Understanding `this` is crucial but can be tricky. Arrow functions simplify many common use cases.

*(More details and examples will be added for each concept.)*

## Examples

*(An `examples/` folder with code examples can be added here.)*
