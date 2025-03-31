# JavaScript Arrays

Arrays are ordered collections of values. Each value in an array is called an element, and each element has a numeric index starting from 0. JavaScript arrays can hold elements of different data types (numbers, strings, objects, other arrays, etc.) within the same array.

## Key Concepts

*   **Creating Arrays:**
    *   **Array Literals (`[]`):** This is the simplest and most common way to create an array.
        ```javascript
        // Empty array
        const emptyArr = [];

        // Array of numbers
        const numbers = [1, 2, 3, 5, 8];

        // Array of strings
        const fruits = ["Apple", "Banana", "Cherry"];

        // Array with mixed data types
        const mixed = [1, "Hello", true, null, { id: 1 }, [10, 20]];

        console.log(numbers);
        console.log(mixed);
        ```
    *   **`new Array()` Constructor:** Can be used, but be aware of its behavior:
        *   `new Array(element1, element2, ...)`: Creates an array with the given elements.
        *   `new Array(arrayLength)`: Creates an *empty* array with the specified `length` (slots are empty, not `undefined`). This can be confusing, so literals are often preferred.
        ```javascript
        const fromConstructor1 = new Array(10, 20, 30); // [10, 20, 30]
        const fromConstructor2 = new Array(3); // Creates an empty array with length 3: [ <3 empty items> ]

        console.log(fromConstructor1);
        console.log(fromConstructor2);
        console.log(fromConstructor2.length); // 3
        console.log(fromConstructor2[0]); // undefined (accessing empty slot gives undefined)
        ```

*   **Accessing Elements:** Array elements are accessed using zero-based index numbers inside square brackets `[]`.
    ```javascript
    const colors = ["Red", "Green", "Blue"];
    console.log(colors[0]); // Output: Red (first element)
    console.log(colors[1]); // Output: Green (second element)
    console.log(colors[2]); // Output: Blue (third element)
    console.log(colors[3]); // Output: undefined (index out of bounds)
    ```

*   **Modifying Elements:** You can change the value of an array element by assigning a new value to it using its index.
    ```javascript
    colors[1] = "Yellow"; // Change the second element
    console.log(colors); // Output: [ 'Red', 'Yellow', 'Blue' ]
    ```

*   **Array Properties:**
    *   **`length`:** This property returns the number of elements in the array. It's always one more than the highest index. You can also set the `length` property to manually change the size of the array (truncating elements if set lower, or adding empty slots if set higher).
        ```javascript
        console.log(colors.length); // Output: 3

        colors.length = 2; // Truncate the array
        console.log(colors); // Output: [ 'Red', 'Yellow' ]
        console.log(colors.length); // Output: 2

        colors.length = 4; // Extend the array (adds empty slots)
        console.log(colors); // Output: [ 'Red', 'Yellow', <2 empty items> ]
        console.log(colors.length); // Output: 4
        console.log(colors[2]); // Output: undefined
        ```

*   **Common Array Methods:** JavaScript provides a rich set of built-in methods for manipulating arrays:

    *   **Mutator Methods (modify the original array):** These methods change the array they are called on.
        *   **`push(element1, ..., elementN)`:** Adds one or more elements to the *end* of an array and returns the new `length` of the array.
            ```javascript
            const sports = ["Soccer", "Basketball"];
            let newLength = sports.push("Tennis", "Baseball");
            console.log(sports);    // Output: [ 'Soccer', 'Basketball', 'Tennis', 'Baseball' ]
            console.log(newLength); // Output: 4
            ```
        *   **`pop()`:** Removes the *last* element from an array and returns that removed element.
            ```javascript
            let lastSport = sports.pop();
            console.log(sports);     // Output: [ 'Soccer', 'Basketball', 'Tennis' ]
            console.log(lastSport); // Output: Baseball
            ```
        *   **`shift()`:** Removes the *first* element from an array and returns that removed element. Note: This is often less efficient than `pop()` as remaining elements need to be re-indexed.
            ```javascript
            let firstSport = sports.shift();
            console.log(sports);      // Output: [ 'Basketball', 'Tennis' ]
            console.log(firstSport); // Output: Soccer
            ```
        *   **`unshift(element1, ..., elementN)`:** Adds one or more elements to the *beginning* of an array and returns the new `length`. Note: This is often less efficient than `push()` as existing elements need to be re-indexed.
            ```javascript
            newLength = sports.unshift("Hockey", "Golf");
            console.log(sports);    // Output: [ 'Hockey', 'Golf', 'Basketball', 'Tennis' ]
            console.log(newLength); // Output: 4
            ```
        *   **`splice(start, deleteCount, item1, ..., itemN)`:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements *in place*.
            *   `start`: Index at which to start changing the array.
            *   `deleteCount` (optional): Number of elements to remove.
            *   `item1, ...` (optional): Elements to add to the array, beginning from `start` index.
            *   Returns an array containing the deleted elements (or an empty array if none were deleted).
            ```javascript
            const months = ["Jan", "March", "April", "June"];
            // Insert 'Feb' at index 1
            months.splice(1, 0, "Feb");
            console.log(months); // Output: [ 'Jan', 'Feb', 'March', 'April', 'June' ]

            // Replace 1 element at index 4 ('June') with 'May'
            let removed = months.splice(4, 1, "May");
            console.log(months);  // Output: [ 'Jan', 'Feb', 'March', 'April', 'May' ]
            console.log(removed); // Output: [ 'June' ]

            // Remove 2 elements starting from index 1 ('Feb', 'March')
            removed = months.splice(1, 2);
            console.log(months);  // Output: [ 'Jan', 'April', 'May' ]
            console.log(removed); // Output: [ 'Feb', 'March' ]
            ```
        *   **`sort(compareFunction)`:** Sorts the elements of an array *in place*.
            *   **Default Sort:** Converts elements to strings and sorts based on UTF-16 code unit values. This works well for strings but not usually for numbers.
            *   **`compareFunction(a, b)` (optional):** A function that defines the sort order. It should return:
                *   A negative value if `a` should come before `b`.
                *   A positive value if `a` should come after `b`.
                *   Zero if `a` and `b` are considered equal for sorting.
            ```javascript
            const letters = ["d", "a", "c", "b"];
            letters.sort(); // Default sort (alphabetical)
            console.log(letters); // Output: [ 'a', 'b', 'c', 'd' ]

            const points = [40, 100, 1, 5, 25, 10];
            points.sort(); // Default sort (string-based - incorrect for numbers!)
            console.log("Default number sort:", points); // Output: [ 1, 10, 100, 25, 40, 5 ]

            // Correct number sort using compare function
            points.sort(function(a, b) { return a - b; }); // Ascending
            console.log("Ascending number sort:", points); // Output: [ 1, 5, 10, 25, 40, 100 ]

            points.sort((a, b) => b - a); // Descending (using arrow function)
            console.log("Descending number sort:", points); // Output: [ 100, 40, 25, 10, 5, 1 ]
            ```
        *   **`reverse()`:** Reverses the order of the elements of an array *in place*. The first element becomes the last, and the last becomes the first.
            ```javascript
            const numsToSort = [1, 2, 3, 4, 5];
            numsToSort.reverse();
            console.log(numsToSort); // Output: [ 5, 4, 3, 2, 1 ]
            ```
        *   **`fill(value, start, end)`:** Fills all or part of an array with a static `value`.
            *   `value`: Value to fill the array with.
            *   `start` (optional): Start index (default 0).
            *   `end` (optional): End index (exclusive, default `array.length`).
            ```javascript
            const tempArray = [1, 1, 1, 1, 1];
            tempArray.fill(0, 2, 4); // Fill with 0 from index 2 up to (not including) index 4
            console.log(tempArray); // Output: [ 1, 1, 0, 0, 1 ]
            tempArray.fill(9); // Fill entire array with 9
            console.log(tempArray); // Output: [ 9, 9, 9, 9, 9 ]
            ```

    *   **Accessor Methods (return a new array or value, do not modify original):** These methods do *not* change the original array.
        *   **`slice(start, end)`:** Returns a *shallow copy* of a portion of an array into a new array object.
            *   `start` (optional): Zero-based index at which to begin extraction (default 0).
            *   `end` (optional): Zero-based index *before* which to end extraction (extracts up to, but not including, `end`). If omitted, extracts through the end of the array.
            ```javascript
            const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
            const middleAnimals = animals.slice(1, 4); // Start at index 1, end before index 4
            console.log(middleAnimals); // Output: [ 'bison', 'camel', 'duck' ]
            const endAnimals = animals.slice(2); // Start at index 2, go to end
            console.log(endAnimals);    // Output: [ 'camel', 'duck', 'elephant' ]
            const shallowCopy = animals.slice(); // Copy the whole array
            console.log(shallowCopy);   // Output: [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
            console.log(animals);       // Original array is unchanged
            ```
        *   **`concat(array2, ..., arrayN)`:** Used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.
            ```javascript
            const arr1 = ['a', 'b'];
            const arr2 = ['c', 'd', 'e'];
            const arr3 = arr1.concat(arr2, ['f', 'g']);
            console.log(arr3); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
            console.log(arr1); // Output: [ 'a', 'b' ] (unchanged)
            console.log(arr2); // Output: [ 'c', 'd', 'e' ] (unchanged)
            ```
        *   **`join(separator)`:** Joins all elements of an array into a string.
            *   `separator` (optional): Specifies a string to separate each pair of adjacent elements. If omitted, elements are separated with a comma (`,`).
            ```javascript
            const elements = ['Fire', 'Air', 'Water'];
            console.log(elements.join());      // Output: Fire,Air,Water
            console.log(elements.join(''));    // Output: FireAirWater
            console.log(elements.join(' - ')); // Output: Fire - Air - Water
            ```
        *   **`indexOf(searchElement, fromIndex)`:** Returns the first index at which a given element can be found in the array, or -1 if it is not present.
            *   `searchElement`: Element to locate.
            *   `fromIndex` (optional): Index to start the search from.
        *   **`lastIndexOf(searchElement, fromIndex)`:** Returns the last index at which a given element can be found, searching backwards. Returns -1 if not found.
            ```javascript
            const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
            console.log(beasts.indexOf('bison'));      // Output: 1 (starts search from index 0)
            console.log(beasts.indexOf('bison', 2)); // Output: 4 (starts search from index 2)
            console.log(beasts.indexOf('giraffe'));    // Output: -1
            console.log(beasts.lastIndexOf('bison'));  // Output: 4 (searches backwards from end)
            ```
        *   **`includes(searchElement, fromIndex)`:** Determines whether an array includes a certain value among its entries, returning `true` or `false`. More intuitive than `indexOf` for simply checking presence.
            ```javascript
            console.log(beasts.includes('camel')); // Output: true
            console.log(beasts.includes('giraffe')); // Output: false
            console.log(beasts.includes('ant', 1)); // Output: false (starts search from index 1)
            ```

    *   **Iteration Methods (execute a function for elements):** These methods iterate over array elements and apply a callback function. Most do not modify the original array (except where the callback itself does).
        *   **`forEach(callback(element, index, array))`:** Executes the `callback` function once for each element in the array. It does not return a value (`undefined`). Primarily used for side effects (like logging).
            ```javascript
            const items = ['item1', 'item2', 'item3'];
            items.forEach((item, index) => {
              console.log(`Index ${index}: ${item}`);
            });
            // Output:
            // Index 0: item1
            // Index 1: item2
            // Index 2: item3
            ```
        *   **`map(callback(element, index, array))`:** Creates a *new* array populated with the results of calling the `callback` function on every element in the calling array. Essential for transforming arrays.
            ```javascript
            const numbersToSquare = [1, 2, 3, 4];
            const squares = numbersToSquare.map(num => num * num);
            console.log(squares); // Output: [ 1, 4, 9, 16 ]
            console.log(numbersToSquare); // Output: [ 1, 2, 3, 4 ] (original unchanged)
            ```
        *   **`filter(callback(element, index, array))`:** Creates a *new* array with all elements that pass the test implemented by the `callback` function (i.e., the callback returns `true`).
            ```javascript
            const mixedNums = [1, -2, 3, -4, 5];
            const positiveNums = mixedNums.filter(num => num > 0);
            console.log(positiveNums); // Output: [ 1, 3, 5 ]
            console.log(mixedNums);    // Output: [ 1, -2, 3, -4, 5 ] (original unchanged)
            ```
        *   **`reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`:** Executes a "reducer" `callback` function on each element, resulting in a single output value (the accumulator).
            *   `accumulator`: The value resulting from the previous callback invocation (or `initialValue` on first call).
            *   `currentValue`: The current element being processed.
            *   `initialValue` (optional): Value to use as the first argument to the first call of the callback. If not supplied, the first element is used as the initial accumulator and iteration starts from the second element.
            ```javascript
            const valuesToSum = [1, 2, 3, 4];
            const sum = valuesToSum.reduce((accumulator, currentValue) => {
              console.log(`Accumulator: ${accumulator}, Current: ${currentValue}`);
              return accumulator + currentValue;
            }, 0); // Start accumulator at 0
            console.log("Sum:", sum); // Output: Sum: 10

            // reduceRight works similarly but processes the array from right to left.
            ```
        *   **`some(callback(element, index, array))`:** Tests whether at least one element in the array passes the test implemented by the `callback` function. Returns `true` if it finds an element for which the callback returns `true`; otherwise `false`. Stops iterating as soon as a `true` result is found.
            ```javascript
            const hasNegative = mixedNums.some(num => num < 0);
            console.log("Has negative number?", hasNegative); // Output: true
            ```
        *   **`every(callback(element, index, array))`:** Tests whether *all* elements in the array pass the test implemented by the `callback` function. Returns `true` if the callback returns `true` for all elements; otherwise `false`. Stops iterating as soon as a `false` result is found.
            ```javascript
            const allPositive = mixedNums.every(num => num > 0);
            console.log("Are all numbers positive?", allPositive); // Output: false
            ```
        *   **`find(callback(element, index, array))`:** Returns the *value* of the first element in the array that satisfies the provided `callback` function. If no values satisfy the condition, `undefined` is returned.
            ```javascript
            const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}];
            const userB = users.find(user => user.name === 'B');
            console.log("Found user:", userB); // Output: { id: 2, name: 'B' }
            ```
        *   **`findIndex(callback(element, index, array))`:** Returns the *index* of the first element in the array that satisfies the provided `callback` function. Otherwise, it returns -1, indicating that no element passed the test.
            ```javascript
            const indexB = users.findIndex(user => user.name === 'B');
            console.log("Found index:", indexB); // Output: 1
            ```

*   **Multi-dimensional Arrays:** Arrays can contain other arrays, creating multi-dimensional structures, often used for grids or matrices. Elements are accessed using multiple bracket notations.
    ```javascript
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    console.log(matrix[0][0]); // Output: 1 (first row, first column)
    console.log(matrix[1][2]); // Output: 6 (second row, third column)
    ```

*   **Spread Syntax (`...`) with Arrays (ES6):** The spread syntax allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    ```javascript
    const arrA = [1, 2, 3];
    const arrB = [4, 5, 6];

    // Combine arrays
    const combined = [...arrA, ...arrB, 7, 8];
    console.log(combined); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    // Create a shallow copy
    const copyArrA = [...arrA];
    console.log(copyArrA); // Output: [ 1, 2, 3 ]
    console.log(copyArrA === arrA); // Output: false (different array instance)

    // Pass elements as arguments to a function
    function sumThree(a, b, c) {
      return a + b + c;
    }
    console.log(sumThree(...arrA)); // Output: 6 (equivalent to sumThree(1, 2, 3))
    ```

*   **Destructuring Assignment with Arrays (ES6):** Allows unpacking values from arrays (or properties from objects) into distinct variables.
    ```javascript
    const coordinates = [10, 20, 30];

    // Basic destructuring
    const [x, y, z] = coordinates;
    console.log(`x: ${x}, y: ${y}, z: ${z}`); // Output: x: 10, y: 20, z: 30

    // Skipping elements
    const [first, , third] = coordinates;
    console.log(`First: ${first}, Third: ${third}`); // Output: First: 10, Third: 30

    // Using rest syntax with destructuring
    const [head, ...tail] = coordinates;
    console.log(`Head: ${head}`); // Output: Head: 10
    console.log(`Tail: ${tail}`); // Output: Tail: [ 20, 30 ]

    // Default values
    const [a, b, c, d = 0] = coordinates; // d gets default value if not present
    console.log(`d: ${d}`); // Output: d: 30 (value from array used)

    const shortCoords = [5, 15];
    const [p, q, r = 0, s = -1] = shortCoords; // r and s get default values
    console.log(`p: ${p}, q: ${q}, r: ${r}, s: ${s}`); // Output: p: 5, q: 15, r: 0, s: -1
    ```

*(This covers the main concepts for basic array usage.)*

## Examples

*(An `examples/` folder with code examples can be added here.)*
