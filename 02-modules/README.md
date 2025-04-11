# Modules in Node.js

## What are Modules?

Modules are fundamental building blocks in Node.js that help organize code into reusable, maintainable components. Key characteristics:

- **Encapsulation**: Each module has private scope by default (no global scope pollution)
- **Reusability**: Code can be written once and imported anywhere
- **Maintainability**: Isolated modules make debugging and testing easier
- **Dependency Management**: Explicit imports show module dependencies

Node.js implements the CommonJS module specification, though ES Modules (ECMAScript Modules) are increasingly supported.

## Module Types

### 1. Core Modules
Built into Node.js - require no installation:
```javascript
const fs = require('fs'); // File system operations
const http = require('http'); // HTTP server
const path = require('path'); // Path utilities
```

### 2. Local Modules
Custom modules you create:
```javascript
// math-utils.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// app.js
const math = require('./math-utils');
console.log(math.add(5, 3)); // 8
```

### 3. Third-party Modules
Installed via npm/yarn:
```bash
npm install lodash
```
```javascript
const _ = require('lodash');
```

### 4. ECMAScript Modules (ESM)
Modern JavaScript module syntax:
```javascript
// greet.mjs
export function greet(name) {
  return `Hello ${name}!`;
}

// app.mjs
import { greet } from './greet.mjs';
```

## Creating and Using Modules

### CommonJS Pattern
```javascript
// logger.js
const logLevels = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

function log(message, level = logLevels.INFO) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

module.exports = {
  log,
  levels: logLevels
};

// app.js
const logger = require('./logger');
logger.log('Application started', logger.levels.INFO);
```

### ES Modules Pattern
```javascript
// db-connector.mjs
const connectionPool = [];

export function getConnection() {
  return connectionPool.pop() || createNewConnection();
}

export function releaseConnection(conn) {
  connectionPool.push(conn);
}

// app.mjs
import { getConnection, releaseConnection } from './db-connector.mjs';
```

### Best Practices
1. Keep modules focused (single responsibility principle)
2. Document exports with JSDoc
3. Use index.js files to create module facades
4. Consider using TypeScript for better module typing
