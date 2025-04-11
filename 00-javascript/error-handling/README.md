# JavaScript Error Handling

Proper error handling is crucial for building robust JavaScript applications. It helps prevent crashes, improves debugging, and provides better user experiences.

## Types of Errors

1. **Syntax Errors**: Mistakes in code structure (caught during parsing)
2. **Runtime Errors**: Occur during execution (TypeError, ReferenceError, etc.)
3. **Logical Errors**: Code runs but produces wrong results

## Basic Error Handling

### try/catch/finally
```javascript
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
} finally {
  // Code that always executes
  console.log('Operation attempted');
}
```

### Error Objects
JavaScript has several built-in error types:

- `Error`: Generic error
- `SyntaxError`: Invalid syntax
- `TypeError`: Operation on wrong type
- `ReferenceError`: Undefined variable
- `RangeError`: Number outside valid range
- `URIError`: Malformed URI
- `EvalError`: eval() related errors

```javascript
try {
  null.function(); // TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Type error occurred');
  } else {
    console.log('Other error occurred');
  }
}
```

## Throwing Errors

You can throw your own errors:
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
```

## Custom Errors
```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError('Input cannot be empty');
  }
}
```

## Error Handling Patterns

### Asynchronous Error Handling
```javascript
// Promises
fetchData()
  .then(data => process(data))
  .catch(error => console.error('Fetch failed:', error));

// async/await
async function loadData() {
  try {
    const data = await fetchData();
    return process(data);
  } catch (error) {
    console.error('Failed to load data:', error);
    throw error; // Re-throw if needed
  }
}
```

### Global Error Handling
```javascript
// Browser
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

// Node.js
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1); // Often recommended to restart
});
```

## Best Practices

1. Be specific with error types
2. Don't swallow errors silently
3. Provide meaningful error messages
4. Clean up resources in finally blocks
5. Log errors appropriately
6. Consider user-facing error messages

## Examples

See `examples/error-handling.js` for practical implementations.