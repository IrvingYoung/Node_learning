// DOM Manipulation Examples

// 1. Selecting Elements
const header = document.getElementById('header');
const buttons = document.getElementsByClassName('btn');
const firstParagraph = document.querySelector('p');
const allItems = document.querySelectorAll('.item');

console.log('Selected elements:', { header, buttons, firstParagraph, allItems });

// 2. Modifying Content
document.getElementById('changeText').addEventListener('click', () => {
    header.textContent = 'Header Text Changed!';
    header.style.color = 'blue';
});

// 3. Working with Classes
document.getElementById('addClass').addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.toggle('active'));
});

// 4. Event Handling
document.getElementById('eventButton').addEventListener('click', (e) => {
    console.log('Button clicked!', e);
    alert('Button was clicked!');
});

// 5. Event Delegation
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.style.backgroundColor = '#b3e5fc';
        console.log('Clicked item:', e.target.textContent);
    }
});

// 6. Form Handling
document.getElementById('sampleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    console.log('Form submitted with username:', username);
    alert(`Hello, ${username}!`);
});

// 7. Creating/Removing Elements
let counter = 1;
document.getElementById('addElement').addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.textContent = `New Element ${counter++}`;
    newElement.className = 'new-item';
    newElement.style.margin = '5px 0';
    newElement.style.padding = '5px';
    newElement.style.backgroundColor = '#e8f5e9';
    
    document.getElementById('dynamicContent').appendChild(newElement);
});

// 8. Working with Attributes
const firstBtn = document.querySelector('.btn');
firstBtn.setAttribute('title', 'This is a button tooltip');
console.log('Button title:', firstBtn.getAttribute('title'));

// 9. Inline Styles
const boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    box.style.borderRadius = '5px';
    box.style.marginBottom = '20px';
    if (index % 2 === 0) {
        box.style.borderLeft = '4px solid #007bff';
    }
});