# File System (fs) in Node.js

## Introduction to the fs Module

The `fs` module provides an API for interacting with the file system in Node.js. Key capabilities include:
- Reading and writing files (synchronously and asynchronously)
- Creating, reading, and deleting directories
- File system watching and events
- File metadata operations (stats, permissions)
- Stream-based file operations for large files

The module is included in Node.js core, so no installation is needed - just require it:
```javascript
const fs = require('fs');
```

## Working with Files

### Reading Files
```javascript
// Asynchronous
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');
```

### Writing Files
```javascript
// Asynchronous
fs.writeFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written');
});

// Synchronous
fs.writeFileSync('file.txt', 'Hello World!');
```

### Appending to Files
```javascript
fs.appendFile('file.txt', 'New content', (err) => {
  if (err) throw err;
});
```

### Other Operations
- `fs.unlink()` - Delete a file
- `fs.rename()` - Rename/move a file
- `fs.copyFile()` - Copy a file
- `fs.stat()` - Get file metadata

## Working with Directories

### Creating Directories
```javascript
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
});

// Recursive directory creation
fs.mkdir('path/to/new-folder', { recursive: true }, (err) => {
  if (err) throw err;
});
```

### Reading Directories
```javascript
fs.readdir('folder', (err, files) => {
  if (err) throw err;
  files.forEach(file => console.log(file));
});
```

### Deleting Directories
```javascript
fs.rmdir('empty-folder', (err) => {
  if (err) throw err;
});

// Recursive directory removal (Node.js 14+)
fs.rm('folder', { recursive: true }, (err) => {
  if (err) throw err;
});
```

### Other Operations
- `fs.readdirSync()` - Synchronous directory reading
- `fs.existsSync()` - Check if path exists
- `fs.realpath()` - Get resolved path

## Best Practices
1. Prefer async methods for production code
2. Always handle errors in callbacks
3. Use streams for large files
4. Consider using `fs/promises` for promise-based API
