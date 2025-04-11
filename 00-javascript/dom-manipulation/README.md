# DOM Manipulation in JavaScript

## Introduction to the DOM

The Document Object Model (DOM) is a programming interface for web documents that represents the page as a structured, hierarchical tree of objects. Each HTML element becomes a node in this tree, allowing JavaScript to interact with and manipulate the page content, structure, and styles.

### Key Characteristics of the DOM:

1. **Tree Structure**: The DOM represents documents as a tree structure where each node is an object representing part of the document.
2. **Live Representation**: The DOM is a live representation - changes to the DOM are immediately reflected in what you see in the browser.
3. **Platform- and Language-Neutral**: While we use JavaScript to manipulate it, the DOM specification is independent of any programming language.
4. **Standardized API**: The DOM provides a standardized set of objects and methods for document access and manipulation.

### Why DOM Manipulation Matters:

- **Dynamic Content**: Enables creating interactive web pages that can update without full page reloads
- **User Interaction**: Allows responding to user actions like clicks, form submissions, etc.
- **Single Page Applications**: Forms the foundation for modern SPAs where content changes dynamically
- **Accessibility**: Proper DOM manipulation ensures accessible web experiences
- **Performance**: Understanding the DOM helps optimize web application performance

## How the DOM Works

When a web page loads:
1. The browser parses the HTML and creates the DOM tree
2. The browser parses CSS and applies styles
3. JavaScript can then interact with this DOM tree through the DOM API
4. Any changes to the DOM cause the browser to re-render affected parts of the page

## Core Concepts

### Selecting Elements
```javascript
// By ID
const header = document.getElementById('header');

// By class name (returns HTMLCollection)
const items = document.getElementsByClassName('item');

// By tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// CSS selectors (returns first match)
const button = document.querySelector('.btn-primary');

// CSS selectors (returns NodeList of all matches)
const allButtons = document.querySelectorAll('.btn');
```

### Modifying Content
```javascript
// Text content
header.textContent = 'New Header Text';

// HTML content (be careful with XSS vulnerabilities)
header.innerHTML = '<em>New</em> Header';

// Attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
console.log(link.getAttribute('href'));

// Classes
const box = document.querySelector('.box');
box.classList.add('active');
box.classList.remove('inactive');
box.classList.toggle('visible');
```

### Creating/Removing Elements
```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'New content';

// Append to DOM
document.body.appendChild(newDiv);

// Insert before another element
const container = document.querySelector('.container');
container.insertBefore(newDiv, container.firstChild);

// Remove element
container.removeChild(newDiv);
```

### Event Handling
```javascript
// Basic event listener
button.addEventListener('click', function(event) {
  console.log('Button clicked!', event);
});

// Event delegation
document.querySelector('.list').addEventListener('click', function(e) {
  if (e.target.classList.contains('item')) {
    console.log('List item clicked:', e.target);
  }
});
```

### Forms
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.querySelector('#username');
  console.log('Submitted value:', input.value);
});
```

### Styling
```javascript
// Inline styles
const element = document.querySelector('.box');
element.style.color = 'blue';
element.style.backgroundColor = '#f0f0f0';

// Get computed styles
const styles = window.getComputedStyle(element);
console.log('Current color:', styles.color);
```

## Examples

See `examples/dom-manipulation.html` for practical implementations.