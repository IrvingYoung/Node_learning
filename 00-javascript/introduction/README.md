# Introduction to JavaScript

## What is JavaScript?

JavaScript is a high-level, interpreted programming language primarily known for its use in web browsers to create interactive effects within web pages. However, with the advent of environments like Node.js, it can also be used for server-side programming, game development, mobile apps, and much more.

## Why Learn JavaScript for Node.js?

Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. Therefore, a solid understanding of JavaScript fundamentals is essential before diving deep into Node.js specific features like its module system, file system API, HTTP server capabilities, etc.

This section (`00-javascript`) aims to cover the core JavaScript concepts you'll need.

## Key Characteristics Explained

*   **Dynamically Typed:** You don't need to declare the type of a variable (like `int` or `string`) beforehand. JavaScript figures out the type when the code runs. This offers flexibility but requires careful testing.
    ```javascript
    let message = "Hello"; // message is a string
    message = 100;       // now message is a number
    ```

*   **Interpreted:** Unlike compiled languages (like C++ or Java) where the code is translated into machine code before running, JavaScript code is typically interpreted line by line at runtime by an engine (e.g., V8 in Chrome and Node.js, SpiderMonkey in Firefox). Modern engines often use Just-In-Time (JIT) compilation for performance optimization.

*   **Object-Oriented (Prototype-Based):** JavaScript uses a prototype-based object model. Instead of classes inheriting from other classes (classical inheritance), objects inherit directly from other objects (their "prototype"). When you try to access a property on an object, JavaScript first looks at the object itself. If the property isn't found, it looks at the object's prototype, then the prototype's prototype, and so on, up the "prototype chain" until it finds the property or reaches the end of the chain (usually `Object.prototype`).
    *   **ES6 Classes:** Modern JavaScript (ES6+) introduced the `class` keyword, which provides a cleaner syntax for creating objects and dealing with inheritance. However, under the hood, it's still based on prototypes ("syntactic sugar").
    *   **Example:**
        ```javascript
        // Create a 'prototype' object
        const animalPrototype = {
          speak: function() {
            console.log(`My name is ${this.name}`);
          }
        };

        // Create a new object linked to the prototype
        const dog = Object.create(animalPrototype);
        dog.name = "Buddy";

        dog.speak(); // Output: My name is Buddy (inherits 'speak' from prototype)
        ```

*   **Single-Threaded with Event Loop (Asynchronous):** JavaScript itself runs on a single main thread. However, environments like browsers and Node.js provide mechanisms (the event loop, callback queues, APIs like `setTimeout`, Promises, async/await) to handle long-running operations (like network requests or file I/O) asynchronously without blocking the main thread. This is crucial for responsive user interfaces and efficient servers.

*   **High-Level:** Abstracts away many low-level details of the computer, such as memory management (handled by automatic garbage collection).

Let's start exploring the fundamental building blocks!
