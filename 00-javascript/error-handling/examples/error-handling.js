// JavaScript Error Handling Examples

// 1. Basic try/catch/finally
function riskyOperation() {
    const random = Math.random();
    if (random > 0.5) {
        throw new Error('Random failure');
    }
    return 'Success';
}

try {
    console.log('Attempting risky operation...');
    const result = riskyOperation();
    console.log('Result:', result);
} catch (error) {
    console.error('Caught error:', error.message);
} finally {
    console.log('This always executes');
}

// 2. Handling Different Error Types
try {
    // Potential error cases
    // null.function(); // TypeError
    // undefinedVariable; // ReferenceError
    // decodeURIComponent('%'); // URIError
    // Array(-1); // RangeError
    
    // Uncomment one above to test
    console.log('No error thrown');
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError handled:', error.message);
    } else if (error instanceof ReferenceError) {
        console.log('ReferenceError handled:', error.message);
    } else {
        console.log('Other error:', error.message);
    }
}

// 3. Custom Errors
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
        this.timestamp = new Date();
    }
}

function fetchData() {
    const random = Math.random();
    if (random > 0.7) {
        throw new NetworkError('Failed to connect to server');
    }
    return { data: 'Sample data' };
}

try {
    const response = fetchData();
    console.log('Data received:', response.data);
} catch (error) {
    if (error instanceof NetworkError) {
        console.error(`${error.name} at ${error.timestamp}: ${error.message}`);
    } else {
        console.error('Unknown error:', error);
    }
}

// 4. Asynchronous Error Handling
// With Promises
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 
                ? resolve('Async success') 
                : reject(new Error('Async failure'));
        }, 1000);
    });
}

asyncOperation()
    .then(result => console.log('Async result:', result))
    .catch(error => console.error('Async error:', error.message));

// With async/await
async function runAsync() {
    try {
        const result = await asyncOperation();
        console.log('Await result:', result);
    } catch (error) {
        console.error('Await error:', error.message);
    }
}
runAsync();

// 5. Global Error Handling
// In browsers:
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
});

// In Node.js:
process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
    // process.exit(1); // Often recommended in production
});

// Uncomment to test global handler
// setTimeout(() => { throw new Error('Global error test') }, 2000);