// Asynchronous Programming Examples

// 1. Callbacks
function simulateFetch(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      callback(null, 'Data from server');
    } else {
      callback(new Error('Failed to fetch data'), null);
    }
  }, 1000);
}

console.log('1. Callback Example:');
simulateFetch((error, data) => {
  if (error) {
    console.error('Callback error:', error.message);
  } else {
    console.log('Callback success:', data);
  }
});

// 2. Promises
function promiseFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve('Promise data received')
        : reject(new Error('Promise rejected'));
    }, 1000);
  });
}

console.log('\n2. Promise Example:');
promiseFetch()
  .then(data => {
    console.log('Promise resolved:', data);
    return 'Processed: ' + data;
  })
  .then(processed => console.log(processed))
  .catch(error => console.error('Promise error:', error.message));

// 3. async/await
async function asyncFetch() {
  try {
    console.log('\n3. async/await Example:');
    const data = await promiseFetch();
    console.log('async/await success:', data);
    return data;
  } catch (error) {
    console.error('async/await error:', error.message);
    throw error;
  }
}
asyncFetch();

// 4. Promise Utilities
const promises = [
  new Promise(resolve => setTimeout(() => resolve('Task 1'), 1200)),
  new Promise(resolve => setTimeout(() => resolve('Task 2'), 800)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Task 3 failed')), 1000))
];

console.log('\n4. Promise.all Example:');
Promise.all(promises)
  .then(results => console.log('All succeeded:', results))
  .catch(error => console.error('One failed:', error.message));

console.log('Promise.race Example:');
Promise.race(promises)
  .then(winner => console.log('First finished:', winner))
  .catch(error => console.error('First failed:', error.message));

console.log('Promise.allSettled Example:');
Promise.allSettled(promises)
  .then(results => console.log('All settled:', results));

// 5. Real-world fetch example
async function fetchUserData() {
  try {
    console.log('\n5. Fetch API Example:');
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Network response was not ok');
    const user = await response.json();
    console.log('User data:', user.name, user.email);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}
fetchUserData();