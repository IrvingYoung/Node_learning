// JavaScript Events Examples

// 1. Basic Event Listeners
const button = document.querySelector('#demoButton');
button.addEventListener('click', function(e) {
    console.log('Button clicked!', e);
    alert('Button was clicked!');
});

// 2. Different Event Types
const box = document.querySelector('.event-box');
box.addEventListener('mouseenter', () => box.style.backgroundColor = '#e3f2fd');
box.addEventListener('mouseleave', () => box.style.backgroundColor = '');

document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key} (Code: ${e.code})`);
});

// 3. Event Propagation
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

// Bubbling phase (default)
outer.addEventListener('click', () => console.log('Outer clicked (bubbling)'));
inner.addEventListener('click', () => console.log('Inner clicked (bubbling)'));

// Capturing phase
outer.addEventListener('click', () => console.log('Outer clicked (capturing)'), true);
inner.addEventListener('click', (e) => {
    console.log('Inner clicked (capturing)');
    // e.stopPropagation(); // Uncomment to stop propagation
}, true);

// 4. Event Delegation
const list = document.querySelector('.item-list');
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        console.log('List item clicked:', e.target.textContent);
        e.target.classList.toggle('selected');
    }
});

// 5. Form Events
const form = document.querySelector('#eventForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#formInput');
    console.log('Form submitted with value:', input.value);
    input.value = '';
});

// 6. Custom Events
const customEventElement = document.querySelector('#customEventDemo');
customEventElement.addEventListener('build', (e) => {
    console.log('Custom build event received:', e.detail);
    customEventElement.textContent = `Event time: ${new Date(e.detail.time).toLocaleTimeString()}`;
});

// Trigger custom event
setTimeout(() => {
    const event = new CustomEvent('build', {
        detail: { time: Date.now() },
        bubbles: true
    });
    customEventElement.dispatchEvent(event);
}, 2000);

// 7. Removing Event Listeners
function handleClick() {
    console.log('This will only log once');
    button.removeEventListener('click', handleClick);
}
button.addEventListener('click', handleClick);