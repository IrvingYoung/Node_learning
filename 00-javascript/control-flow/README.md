# JavaScript Control Flow

Control flow refers to the order in which the computer executes statements in a script. Code is run in order from the first line in the file to the last line, unless the computer runs across structures that change the control flow, such as conditionals and loops.

## Topics Covered

*   **Conditional Statements:** Execute different blocks of code based on whether a condition evaluates to `true` or `false`.

    *   **`if` Statement:** Executes a block of code if a specified condition is true.
        ```javascript
        let temperature = 25;
        if (temperature > 20) {
          console.log("It's a warm day!"); // This will be executed
        }
        ```

    *   **`else` Statement:** Executes a block of code if the same condition in the preceding `if` statement is false.
        ```javascript
        let hour = 20;
        if (hour < 18) {
          console.log("Good day.");
        } else {
          console.log("Good evening."); // This will be executed
        }
        ```

    *   **`else if` Statement:** Specifies a new condition to test if the first condition is false. You can have multiple `else if` blocks.
        ```javascript
        let score = 75;
        if (score >= 90) {
          console.log("Grade: A");
        } else if (score >= 80) {
          console.log("Grade: B");
        } else if (score >= 70) {
          console.log("Grade: C"); // This will be executed
        } else {
          console.log("Grade: D or F");
        }
        ```

    *   **`switch` Statement:** Selects one of many code blocks to be executed based on the value of an expression. It compares the expression's value to the values in `case` clauses. The `break` statement is crucial to prevent "fall-through" (executing the next case's code). The `default` case is optional and runs if no other case matches.
        ```javascript
        let day = new Date().getDay(); // Returns 0 for Sunday, 1 for Monday, etc.
        let dayName;

        switch (day) {
          case 0:
            dayName = "Sunday";
            break;
          case 1:
            dayName = "Monday";
            break;
          case 2:
            dayName = "Tuesday";
            break;
          case 3:
            dayName = "Wednesday";
            break;
          case 4:
            dayName = "Thursday";
            break;
          case 5:
            dayName = "Friday";
            break;
          case 6:
            dayName = "Saturday";
            break;
          default: // Optional
            dayName = "Unknown Day";
        }
        console.log("Today is " + dayName);
        ```

*   **Looping Statements:** Execute a block of code repeatedly as long as a condition is met or for a specified number of times.

    *   **`for` Loop:** Repeats a block of code a known number of times. It consists of three optional expressions: initialization, condition, and final expression (often an increment/decrement).
        ```javascript
        // Print numbers 0 to 4
        for (let i = 0; i < 5; i++) {
          console.log(i); // 0, 1, 2, 3, 4
        }
        ```

    *   **`while` Loop:** Repeats a block of code as long as a specified condition is true. The condition is checked *before* the loop body executes.
        ```javascript
        let count = 0;
        while (count < 3) {
          console.log("Count is: " + count); // Count is: 0, Count is: 1, Count is: 2
          count++;
        }
        ```

    *   **`do...while` Loop:** Similar to `while`, but the condition is checked *after* the loop body executes. This guarantees the loop body runs at least once.
        ```javascript
        let attempts = 0;
        do {
          console.log("Attempting connection... Attempt #" + (attempts + 1));
          attempts++;
        } while (attempts < 1); // Runs once even though condition is initially false if attempts started at 1
        ```

    *   **`for...in` Loop:** Iterates over the enumerable property names (keys) of an object. It's generally not recommended for iterating over arrays because the order is not guaranteed and it iterates over prototype properties as well.
        ```javascript
        const person = { name: "Alice", age: 30, city: "New York" };
        for (let key in person) {
          console.log(key + ": " + person[key]); // name: Alice, age: 30, city: New York
        }
        ```

    *   **`for...of` Loop (ES6):** Iterates over the values of iterable objects (like Arrays, Strings, Maps, Sets, etc.). This is the preferred way to loop over arrays compared to `for...in`.
        ```javascript
        const colors = ["red", "green", "blue"];
        for (let color of colors) {
          console.log(color); // red, green, blue
        }

        const text = "hello";
        for (let char of text) {
          console.log(char); // h, e, l, l, o
        }
        ```

*   **Control Flow Modifiers:**
    *   `break`: Exits a loop or switch statement.
    *   `continue`: Skips the current iteration of a loop and proceeds to the next one.

*(More details and examples will be added for each sub-topic.)*

## Examples

*(An `examples/` folder with code examples can be added here.)*
