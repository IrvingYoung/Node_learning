# JavaScript Events

Events are actions or occurrences that happen in the system you're programming, which the system tells you about so you can respond to them in some way if desired.

## Introduction to Events

JavaScript events allow you to create interactive web pages by detecting and responding to user actions and browser occurrences. Events can represent everything from basic user interactions to sophisticated system notifications.

### How Events Work:

1. **Event Target**: The DOM element where the event occurs (button clicked, key pressed, etc.)
2. **Event Type**: What kind of interaction occurred (click, mouseover, keydown, etc.)
3. **Event Handler**: The JavaScript function that runs in response to the event
4. **Event Object**: Contains details about the event (position, key pressed, target element, etc.)

## Core Concepts

### Common Event Types

#### Mouse Events
```javascript
element.addEventListener('click', handleClick);
element.addEventListener('dblclick', handleDoubleClick);
element.addEventListener('mouseenter', handleMouseEnter);
element.addEventListener('mouseleave', handleMouseLeave);
```

#### Keyboard Events
```javascript
element.addEventListener('keydown', handleKeyDown);
element.addEventListener('keyup', handleKeyUp);
element.addEventListener('keypress', handleKeyPress);
```

#### Form Events
```javascript
form.addEventListener('submit', handleSubmit);
input.addEventListener('change', handleChange);
input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);
```

#### Window/Document Events
```javascript
window.addEventListener('load', handlePageLoad);
window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);
```

### Event Listeners

The primary way to handle events is using `addEventListener()`:

```javascript
// Basic event listener
button.addEventListener('click', function(event) {
  console.log('Button was clicked!', event);
});

// Named function as handler
function handleClick(event) {
  console.log('Button was clicked!', event);
}
button.addEventListener('click', handleClick);
```

### Event Propagation

Events propagate through the DOM in three phases:
1. **Capturing Phase**: From window down to target element
2. **Target Phase**: On the target element itself
3. **Bubbling Phase**: From target element back up to window

```javascript
// Use capture phase (true) or bubbling phase (false/default)
element.addEventListener('click', handler, true); 

// Stop propagation
function handleClick(event) {
  event.stopPropagation();
  // Handle the event
}
```

### Event Delegation

Instead of adding listeners to each element, add one to a parent:

```javascript
document.querySelector('.list').addEventListener('click', function(e) {
  if (e.target.classList.contains('item')) {
    console.log('List item clicked:', e.target);
  }
});
```

### Custom Events

Create and dispatch your own events:

```javascript
// Create event
const event = new CustomEvent('build', { 
  detail: { time: Date.now() },
  bubbles: true,
  cancelable: true
});

// Listen for event
element.addEventListener('build', function(e) {
  console.log('Custom event triggered:', e.detail);
});

// Dispatch event
element.dispatchEvent(event);
```

## Examples

See `examples/events.js` for practical implementations.