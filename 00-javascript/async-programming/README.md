# Asynchronous Programming in JavaScript

JavaScript uses asynchronous programming to handle operations that take time to complete (like network requests, file I/O, timers) without blocking the main thread.

## Callbacks

The traditional approach to async code using functions passed as arguments.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data received');
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

### Callback Hell
Nested callbacks can become hard to manage:
```javascript
getData((err, data) => {
  if (err) handleError(err);
  process1(data, (err, result1) => {
    if (err) handleError(err);
    process2(result1, (err, result2) => {
      if (err) handleError(err);
      // More nesting...
    });
  });
});
```

## Promises

Promises provide a cleaner way to handle async operations.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 
        ? resolve('Data received') 
        : reject(new Error('Failed to fetch'));
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Promise Chaining
```javascript
fetchData()
  .then(process1)
  .then(process2)
  .then(finalResult => console.log(finalResult))
  .catch(error => console.error(error));
```

### Promise Methods
```javascript
Promise.all([promise1, promise2]) // Waits for all
Promise.race([promise1, promise2]) // First to settle
Promise.any([promise1, promise2]) // First to fulfill
Promise.allSettled([promise1, promise2]) // All settled
```

## async/await

Syntactic sugar over promises that makes async code look synchronous.

```javascript
async function getData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    console.log(processed);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Error Handling

```javascript
// With Promises
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// With async/await
async function load() {
  try {
    const data = await fetchData();
  } catch (error) {
    console.error(error);
  }
}
```

## Examples

See `examples/async.js` for practical implementations.