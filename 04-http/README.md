# HTTP in Node.js

## Introduction to HTTP and Node.js

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. Node.js provides the `http` module to create HTTP servers and make HTTP requests.

Key features:
- Built-in `http` and `https` modules
- Event-driven architecture
- Stream-based request/response handling
- Support for HTTP/1.1 and HTTP/2

Basic usage:
```javascript
const http = require('http');
```

## Creating an HTTP Server

### Basic Server Example
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

### Server Options
- `createServer()` - Creates a new HTTP server
- `listen()` - Starts the server on specified port
- `close()` - Stops the server

## Handling Requests and Responses

### Request Object
Contains information about the incoming request:
- `req.method` - HTTP method (GET, POST, etc.)
- `req.url` - Request URL
- `req.headers` - Request headers
- `req.on('data')` - Stream for request body

### Response Object
Used to send data back to the client:
- `res.writeHead()` - Set status code and headers
- `res.write()` - Send response body
- `res.end()` - End the response
- `res.statusCode` - Set status code

### Example: Handling Different Routes
```javascript
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});
```

### Making HTTP Requests
```javascript
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
```

## Best Practices
1. Use Express.js or similar frameworks for complex routing
2. Always handle errors in request/response cycles
3. Set appropriate Content-Type headers
4. Consider using HTTPS for production
5. Use environment variables for configuration
