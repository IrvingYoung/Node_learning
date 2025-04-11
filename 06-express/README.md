# Express.js Framework

## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Key Features:
- Minimal and unopinionated
- Middleware support
- Routing system
- Template engine integration
- Error handling

Installation:
```bash
npm install express
```

## Basic Application Structure

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## Core Concepts

### Routing
```javascript
// Basic routes
app.get('/', (req, res) => res.send('GET request'));
app.post('/', (req, res) => res.send('POST request'));
app.put('/', (req, res) => res.send('PUT request'));
app.delete('/', (req, res) => res.send('DELETE request'));

// Route parameters
app.get('/users/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});
```

### Middleware
```javascript
// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Route-specific middleware
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### Request and Response
```javascript
// Request object
app.get('/example', (req, res) => {
  console.log(req.query); // URL query parameters
  console.log(req.body);  // Request body (needs body-parser)
  console.log(req.cookies); // Cookies (needs cookie-parser)
});

// Response methods
app.get('/response', (req, res) => {
  res.status(200).json({ message: 'Success' });
  // Other methods: res.send(), res.render(), res.redirect()
});
```

## Advanced Topics

### Template Engines
```javascript
app.set('view engine', 'pug');

app.get('/template', (req, res) => {
  res.render('index', { title: 'Express App', message: 'Hello there!' });
});
```

### REST API Development
```javascript
// Example RESTful routes
app.route('/books')
  .get((req, res) => res.send('Get all books'))
  .post((req, res) => res.send('Add a book'));

app.route('/books/:bookId')
  .get((req, res) => res.send(`Get book ${req.params.bookId}`))
  .put((req, res) => res.send(`Update book ${req.params.bookId}`))
  .delete((req, res) => res.send(`Delete book ${req.params.bookId}`));
```

### Error Handling
```javascript
// Custom error class
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

// Using the error
app.get('/error', (req, res, next) => {
  next(new NotFoundError('Resource not found'));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});
```

## Best Practices

1. Use environment variables for configuration
2. Organize routes using Express Router
3. Implement proper error handling
4. Use middleware for common tasks
5. Secure your application (helmet, csrf, etc.)
6. Use async/await for asynchronous code
7. Implement proper logging
8. Consider using TypeScript with Express

## Common Middleware Packages

- `body-parser`: Parse incoming request bodies
- `cookie-parser`: Parse Cookie header
- `cors`: Enable CORS
- `helmet`: Secure HTTP headers
- `morgan`: HTTP request logger
- `passport`: Authentication
- `express-validator`: Input validation