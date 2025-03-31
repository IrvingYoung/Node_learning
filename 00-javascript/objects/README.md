# JavaScript Objects

Objects are fundamental data structures in JavaScript used to store collections of data and more complex entities. They are collections of key-value pairs, where keys are usually strings (or Symbols) and values can be any data type, including other objects or functions (which are then called methods).

## Key Concepts

*   **Object Literals:** The simplest and most common way to create an object is using an object literal: curly braces `{}` containing zero or more key-value pairs.
    ```javascript
    // An empty object literal
    const emptyObj = {};

    // An object literal with properties
    const car = {
      make: "Toyota", // Property: key 'make', value 'Toyota' (string)
      model: "Camry",
      year: 2022,     // Property: key 'year', value 2022 (number)
      isElectric: false, // Property: key 'isElectric', value false (boolean)
      features: ["GPS", "Sunroof", "Bluetooth"], // Property: value is an array
      owner: {        // Property: value is another object
        name: "Alice",
        age: 30
      }
    };

    console.log(car);
    ```

*   **Properties:** These are the associations between keys (names) and values within an object.
    *   **Accessing Properties:**
        *   **Dot Notation (`.`):** Used when the property key is a valid JavaScript identifier (no spaces, doesn't start with a number, etc.). It's generally preferred for its readability.
            ```javascript
            console.log(car.make);  // Output: Toyota
            console.log(car.owner.name); // Accessing nested property: Alice
            ```
        *   **Bracket Notation (`[]`):** Required when the key is not a valid identifier (e.g., contains spaces) or when the key is stored in a variable. The key inside the brackets must be a string (or a variable holding a string/Symbol).
            ```javascript
            console.log(car['model']); // Output: Camry

            let propertyName = 'year';
            console.log(car[propertyName]); // Output: 2022 (using a variable)

            const carWithSpaceKey = {
              "engine type": "V6"
            };
            console.log(carWithSpaceKey["engine type"]); // Output: V6 (key has space)
            // console.log(carWithSpaceKey.engine type); // SyntaxError
            ```
    *   **Adding/Modifying Properties:** You can add new properties or change the value of existing ones using assignment with either dot or bracket notation.
        ```javascript
        car.color = "Blue"; // Add a new property 'color'
        car.year = 2023;    // Modify the existing 'year' property

        console.log(car.color); // Output: Blue
        console.log(car.year);  // Output: 2023

        car['mileage'] = 15000; // Add using bracket notation
        console.log(car.mileage); // Output: 15000
        ```
    *   **Deleting Properties:** The `delete` operator removes a property from an object. It returns `true` if successful or if the property didn't exist, and `false` only if the property is non-configurable.
        ```javascript
        console.log("Mileage before delete:", car.mileage); // 15000
        delete car.mileage;
        console.log("Mileage after delete:", car.mileage); // undefined
        console.log('mileage' in car); // false ('in' operator checks for property existence)
        ```

*   **Methods:** When a property's value is a function, it's called a method. Methods allow objects to have behavior.
    *   **ES6 Method Syntax:** A shorthand syntax for defining methods within object literals.
    ```javascript
    const calculator = {
      operand1: 0,
      operand2: 0,
      // Method using traditional function expression
      setOperands: function(a, b) {
        this.operand1 = a;
        this.operand2 = b;
      },
      // Method using ES6 shorthand syntax
      add() {
        return this.operand1 + this.operand2;
      },
      subtract() {
        return this.operand1 - this.operand2;
      }
    };

    calculator.setOperands(10, 5);
    console.log("Calculator Add:", calculator.add());       // Output: Calculator Add: 15
    console.log("Calculator Subtract:", calculator.subtract()); // Output: Calculator Subtract: 5
    ```

*   **`this` Keyword in Methods:** As seen above, when a regular function (`function() {}` or the ES6 method syntax) is called *as a method* of an object (`object.method()`), the `this` keyword inside that method refers to the object itself (the object before the dot). This allows methods to access and manipulate the object's own properties.
    *   **Arrow Functions as Methods:** Be cautious using arrow functions for methods if you need to access the object's properties via `this`. Arrow functions inherit `this` from their surrounding scope, which is often *not* the object itself in this context.
    ```javascript
    const counter = {
      count: 0,
      // Regular function method - 'this' refers to 'counter'
      incrementRegular: function() {
        this.count++;
        console.log("Regular Increment:", this.count);
      },
      // Arrow function method - 'this' refers to the scope where 'counter' was defined (e.g., global)
      // This will likely NOT work as intended for accessing 'counter.count'.
      incrementArrow: () => {
        // 'this' here does NOT refer to 'counter'
        // this.count++; // This would likely modify global 'count' or cause an error
        console.log("Arrow Increment 'this':", this); // Logs the outer scope's 'this'
      }
    };

    counter.incrementRegular(); // Output: Regular Increment: 1
    counter.incrementRegular(); // Output: Regular Increment: 2
    counter.incrementArrow();   // 'this' will not be 'counter'
    ```

*   **Object Constructor:** You can create an empty object using `new Object()`. This is generally less preferred than the object literal syntax `{}` for readability and performance, but it achieves the same result.
    ```javascript
    const objFromConstructor = new Object(); // Creates an empty object, like {}
    objFromConstructor.prop = "value";
    console.log(objFromConstructor); // Output: { prop: 'value' }
    ```

*   **Constructor Functions:** A constructor function is a regular JavaScript function used with the `new` keyword to create multiple objects of the same type. By convention, constructor function names start with a capital letter. When called with `new`:
    1.  A new empty object is created and linked to the function's `prototype`.
    2.  The function's body is executed with `this` bound to the new object.
    3.  Properties and methods are added to `this`.
    4.  The new object (`this`) is implicitly returned (unless the function explicitly returns a different *object*).
    ```javascript
    // Constructor Function
    function Dog(name, breed) {
      // 'this' refers to the new object being created
      this.name = name;
      this.breed = breed;
      this.bark = function() { // Method defined directly on the instance
        console.log(`Woof! My name is ${this.name}`);
      };
    }

    // Create instances (objects) using the constructor
    const dog1 = new Dog("Buddy", "Golden Retriever");
    const dog2 = new Dog("Lucy", "Poodle");

    console.log(dog1.name);   // Output: Buddy
    console.log(dog2.breed); // Output: Poodle
    dog1.bark();             // Output: Woof! My name is Buddy
    dog2.bark();             // Output: Woof! My name is Lucy

    // Note: Defining methods directly inside the constructor like this is less memory-efficient
    // because each instance gets its own copy of the function. Placing methods on the
    // prototype is generally preferred (see next section).
    ```

*   **Prototypes and Prototypal Inheritance:** This is the core inheritance mechanism in JavaScript.
    *   **Prototype Object:** Every JavaScript function automatically has a `prototype` property, which is an object. When you use that function as a constructor (with `new`), the new objects created inherit from this `prototype` object.
    *   **Prototype Chain:** Every object created has an internal link (often accessible via `__proto__`, though `Object.getPrototypeOf()` is the standard way to access it) to its prototype. When you try to access a property or method on an object, JavaScript first looks at the object itself. If it's not found, it looks at the object's prototype, then the prototype's prototype, and so on, up the chain until it finds the property/method or reaches the end of the chain (`Object.prototype`, which has `null` as its prototype).
    *   **Adding to Prototype:** Adding methods to the constructor function's `prototype` is more memory-efficient than defining them directly in the constructor, as all instances will share the same method function via the prototype chain.
    ```javascript
    function Animal(name) {
      this.name = name;
    }

    // Add a method to the Animal's prototype
    // All instances created by 'new Animal()' will inherit this method
    Animal.prototype.speak = function() {
      console.log(`${this.name} makes a sound.`);
    };

    // Add another method to the prototype
    Animal.prototype.eat = function() {
      console.log(`${this.name} is eating.`);
    };

    const animal1 = new Animal("Generic Animal");
    animal1.speak(); // Output: Generic Animal makes a sound. (Inherited)
    animal1.eat();   // Output: Generic Animal is eating. (Inherited)

    // --- Inheritance Example ---
    function Cat(name, color) {
      // Call the parent constructor to set 'name'
      Animal.call(this, name); // Sets 'this.name' using Animal's logic
      this.color = color;
    }

    // Set up the prototype chain: Cat.prototype inherits from Animal.prototype
    // Object.create creates a new object with Animal.prototype as its prototype
    Cat.prototype = Object.create(Animal.prototype);
    // Restore the constructor property (good practice)
    Cat.prototype.constructor = Cat;

    // Add a method specific to Cat's prototype
    Cat.prototype.meow = function() {
      console.log(`${this.name} says meow!`);
    };

    // Override the inherited 'speak' method for Cat
    Cat.prototype.speak = function() {
      console.log(`${this.name} (a cat) purrs.`);
    };

    const cat1 = new Cat("Whiskers", "Gray");
    cat1.speak(); // Output: Whiskers (a cat) purrs. (Overridden method)
    cat1.eat();   // Output: Whiskers is eating. (Inherited from Animal.prototype)
    cat1.meow();  // Output: Whiskers says meow! (Own method)

    console.log(cat1 instanceof Cat);    // true
    console.log(cat1 instanceof Animal); // true (due to prototype chain)
    ```

*   **ES6 Classes:** Introduced in ES6, classes provide a cleaner, more object-oriented syntax for creating constructor functions and managing prototypal inheritance. They are primarily "syntactic sugar" over the existing prototype-based mechanisms but offer features like `constructor`, `super`, `static` methods, and `extends` for easier inheritance.
    ```javascript
    // Define a class 'Rectangle'
    class Rectangle {
      // Constructor method for initializing new objects
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }

      // Method (automatically added to Rectangle.prototype)
      get area() {
        return this.calculateArea();
      }

      // Another method
      calculateArea() {
        return this.height * this.width;
      }

      // Static method (called on the class itself, not instances)
      static describe() {
        console.log("A Rectangle is a shape with 4 sides.");
      }
    }

    const rect1 = new Rectangle(10, 5);
    console.log("Rectangle 1 Area:", rect1.area); // Output: 50
    Rectangle.describe(); // Output: A Rectangle is a shape with 4 sides.

    // --- Inheritance with Classes ---
    class Square extends Rectangle { // 'extends' sets up prototype chain
      constructor(side) {
        // 'super()' calls the parent class constructor (Rectangle)
        super(side, side); // Pass side for both height and width
        this.side = side; // Add property specific to Square
      }

      // Can add Square-specific methods or override parent methods
      describeSquare() {
        console.log(`This is a square with side length ${this.side}.`);
      }

      // Override calculateArea (optional)
      calculateArea() {
        // Can call parent method using super
        // console.log("Using Square's area calculation.");
        // return super.calculateArea();
        return this.side * this.side;
      }
    }

    const square1 = new Square(7);
    console.log("Square 1 Area:", square1.area); // Output: 49
    square1.describeSquare(); // Output: This is a square with side length 7.
    Square.describe(); // Static methods are also inherited (can be called on Square)

    console.log(square1 instanceof Square);     // true
    console.log(square1 instanceof Rectangle); // true
    ```

*   **Object Methods (Built-in):** The global `Object` constructor provides several useful static methods for working with objects:
    *   **`Object.keys(obj)`:** Returns an array containing the names (keys) of the object's *own* enumerable properties.
        ```javascript
        const user = { name: "Eve", age: 25, id: "xyz" };
        const keys = Object.keys(user);
        console.log("Object Keys:", keys); // Output: [ 'name', 'age', 'id' ]
        ```
    *   **`Object.values(obj)`:** Returns an array containing the values of the object's *own* enumerable properties.
        ```javascript
        const values = Object.values(user);
        console.log("Object Values:", values); // Output: [ 'Eve', 25, 'xyz' ]
        ```
    *   **`Object.entries(obj)`:** Returns an array of arrays, where each inner array is a `[key, value]` pair for the object's *own* enumerable properties. This is useful for iterating over an object's properties.
        ```javascript
        const entries = Object.entries(user);
        console.log("Object Entries:", entries);
        // Output: [ [ 'name', 'Eve' ], [ 'age', 25 ], [ 'id', 'xyz' ] ]

        // Example: Iterating with for...of
        for (const [key, value] of Object.entries(user)) {
          console.log(`${key}: ${value}`);
        }
        ```
    *   **`Object.assign(target, ...sources)`:** Copies all enumerable *own* properties from one or more source objects (`sources`) to a target object (`target`). It returns the modified target object. Can be used for merging objects or creating shallow copies.
        ```javascript
        const defaults = { theme: "light", notifications: true };
        const userSettings = { notifications: false, username: "Frank" };

        // Merge userSettings into defaults (modifies defaults)
        // Object.assign(defaults, userSettings);
        // console.log("Merged (modified defaults):", defaults);

        // Better: Merge into a new empty object to avoid modifying originals
        const mergedSettings = Object.assign({}, defaults, userSettings);
        console.log("Merged (new object):", mergedSettings);
        // Output: { theme: 'light', notifications: false, username: 'Frank' }
        console.log("Original defaults:", defaults); // Unchanged
        ```
    *   **`Object.freeze(obj)`:** "Freezes" an object. A frozen object can no longer be changed; new properties cannot be added, existing properties cannot be removed or modified (value, writability, configurability, enumerability). Returns the object that was passed in.
        ```javascript
        const config = { version: "1.0" };
        Object.freeze(config);
        // config.version = "1.1"; // Throws TypeError in strict mode, fails silently otherwise
        // config.newProp = true; // Throws TypeError in strict mode, fails silently otherwise
        console.log("Frozen config:", config); // Output: { version: '1.0' }
        ```
    *   **`Object.seal(obj)`:** "Seals" an object. Prevents new properties from being added and marks all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. Returns the object that was passed in.
        ```javascript
        const sealedObj = { value: 10 };
        Object.seal(sealedObj);
        sealedObj.value = 20; // Allowed
        // sealedObj.newValue = 30; // Throws TypeError in strict mode, fails silently otherwise
        // delete sealedObj.value; // Throws TypeError in strict mode, fails silently otherwise
        console.log("Sealed object:", sealedObj); // Output: { value: 20 }
        ```

*   **Getters and Setters:** Getters and setters allow you to define object accessors (computed properties). They look like regular properties when accessed, but execute a function behind the scenes.
    *   **Getter (`get`):** Binds an object property to a function that will be called when that property is looked up. Useful for returning computed values.
    *   **Setter (`set`):** Binds an object property to a function that will be called when there is an attempt to set that property. Useful for validating or processing data before assigning it.
    ```javascript
    const userProfile = {
      firstName: "Grace",
      lastName: "Hopper",
      language: "en",

      // Getter for a computed property 'fullName'
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },

      // Setter for the 'language' property
      set lang(newLang) {
        // Example validation
        if (newLang === "en" || newLang === "es" || newLang === "fr") {
          this.language = newLang;
        } else {
          console.error("Unsupported language:", newLang);
        }
      }
    };

    // Access the getter like a property
    console.log("Full Name:", userProfile.fullName); // Output: Full Name: Grace Hopper

    // Use the setter like assigning to a property
    userProfile.lang = "es";
    console.log("Language:", userProfile.language); // Output: Language: es

    userProfile.lang = "de"; // Output: Error: Unsupported language: de
    console.log("Language:", userProfile.language); // Output: Language: es (didn't change)
    ```

*   **Property Descriptors:** Every property in an object has associated attributes that define its behavior. These attributes are stored in a property descriptor object. There are two main types of descriptors:
    *   **Data Descriptors:** For properties that hold a value. Attributes include:
        *   `value`: The value associated with the property.
        *   `writable`: Boolean indicating if the `value` can be changed.
        *   `enumerable`: Boolean indicating if the property shows up during enumeration (e.g., in `for...in` loops, `Object.keys`).
        *   `configurable`: Boolean indicating if the property descriptor itself can be changed and if the property can be deleted from the object.
    *   **Accessor Descriptors:** For properties defined by getters and setters. Attributes include:
        *   `get`: The getter function.
        *   `set`: The setter function.
        *   `enumerable`: Same as above.
        *   `configurable`: Same as above.
    *   You can get a property descriptor using `Object.getOwnPropertyDescriptor(obj, propName)` and define or modify a property with specific attributes using `Object.defineProperty(obj, propName, descriptor)`.
    ```javascript
    const dataObj = {};

    // Define a property with specific attributes
    Object.defineProperty(dataObj, 'id', {
      value: 123,
      writable: false, // Cannot change the value
      enumerable: true, // Will show up in loops/keys
      configurable: false // Cannot delete or reconfigure
    });

    console.log("Initial ID:", dataObj.id); // Output: 123
    // dataObj.id = 456; // Throws TypeError in strict mode

    console.log("Keys:", Object.keys(dataObj)); // Output: Keys: [ 'id' ]

    // delete dataObj.id; // Throws TypeError in strict mode

    // Get the descriptor
    const descriptor = Object.getOwnPropertyDescriptor(dataObj, 'id');
    console.log("ID Descriptor:", descriptor);
    // Output: { value: 123, writable: false, enumerable: true, configurable: false }
    ```

*(This covers the main concepts for basic object usage.)*

## Examples

*(An `examples/` folder with code examples can be added here.)*
