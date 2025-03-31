// JavaScript Objects Examples

console.log("--- Object Literals & Properties ---");
const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  yearPublished: 1979,
  genres: ["Science Fiction", "Comedy"],
  publisher: {
    name: "Pan Books",
    location: "London"
  },
  "ISBN-10": "0345391802" // Key with hyphen requires quotes
};

// Accessing Properties
console.log("Title (dot):", book.title);
console.log("Author (bracket):", book['author']);
console.log("Publisher Name:", book.publisher.name);
console.log("ISBN (bracket required):", book["ISBN-10"]);

let propKey = "yearPublished";
console.log("Year (variable key):", book[propKey]);

// Adding/Modifying Properties
book.rating = 4.5; // Add new property
book.yearPublished = 1980; // Modify existing property (UK edition year)
book["pages"] = 224; // Add using bracket notation

console.log("Rating:", book.rating);
console.log("Updated Year:", book.yearPublished);
console.log("Pages:", book.pages);

// Deleting Properties
delete book.pages;
console.log("Pages after delete:", book.pages); // undefined
console.log("'pages' in book:", 'pages' in book); // false
console.log("");

// --- Methods ---
console.log("--- Methods ---");
const rectangle = {
  width: 10,
  height: 5,
  // ES6 method syntax
  calculateArea() {
    return this.width * this.height;
  },
  // Traditional function expression method
  describe: function() {
    // 'this' refers to the 'rectangle' object here
    console.log(`Rectangle: ${this.width}x${this.height}, Area: ${this.calculateArea()}`);
  }
};
rectangle.describe();
console.log("");

// --- Constructor Functions ---
console.log("--- Constructor Functions ---");
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  // Method defined on instance (less efficient)
  // this.getInfo = function() {
  //   return `${this.title} (${this.year}), directed by ${this.director}`;
  // }
}

// Adding method to prototype (more efficient)
Movie.prototype.getInfo = function() {
  return `${this.title} (${this.year}), directed by ${this.director}`;
};

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("Parasite", "Bong Joon-ho", 2019);

console.log(movie1.getInfo());
console.log(movie2.getInfo());
console.log("movie1 instanceof Movie:", movie1 instanceof Movie); // true
console.log("");

// --- Prototypal Inheritance (using Constructor Functions) ---
console.log("--- Prototypal Inheritance ---");
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.display = function() {
  console.log(`${this.name} - $${this.price.toFixed(2)}`);
};

function Food(name, price, calories) {
  Product.call(this, name, price); // Call parent constructor
  this.calories = calories;
}
// Inherit from Product prototype
Food.prototype = Object.create(Product.prototype);
Food.prototype.constructor = Food; // Reset constructor

Food.prototype.showCalories = function() {
  console.log(`${this.name} has ${this.calories} calories.`);
};

const apple = new Food("Apple", 0.50, 95);
apple.display(); // Inherited method
apple.showCalories(); // Own method
console.log("apple instanceof Food:", apple instanceof Food); // true
console.log("apple instanceof Product:", apple instanceof Product); // true
console.log("");

// --- ES6 Classes ---
console.log("--- ES6 Classes ---");
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // Method on prototype
  getDetails() {
    return `${this.make} ${this.model}`;
  }
  // Static method
  static vehicleType() {
    return "Generic Vehicle";
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model); // Call parent constructor
    this.payload = payload;
  }
  // Override parent method
  getDetails() {
    return `${super.getDetails()} - Payload: ${this.payload} lbs`;
  }
}

const car1 = new Vehicle("Tesla", "Model 3");
const truck1 = new Truck("Ford", "F-150", 2000);

console.log(car1.getDetails());
console.log(truck1.getDetails());
console.log("Vehicle Type:", Vehicle.vehicleType());
console.log("Truck Type (inherited static):", Truck.vehicleType());
console.log("");

// --- Object Methods (Built-in) ---
console.log("--- Object Methods (Built-in) ---");
const sampleObj = { a: 1, b: 2, c: 3 };
console.log("Object.keys:", Object.keys(sampleObj));
console.log("Object.values:", Object.values(sampleObj));
console.log("Object.entries:", Object.entries(sampleObj));

const source1 = { b: 4, d: 5 };
const target = Object.assign({}, sampleObj, source1); // Merge into new object
console.log("Object.assign (target):", target);
console.log("Object.assign (original sampleObj):", sampleObj); // Unchanged

const frozenObj = { x: 10 };
Object.freeze(frozenObj);
// frozenObj.x = 20; // Fails silently (or TypeError in strict mode)
console.log("Frozen Object:", frozenObj);
console.log("");

// --- Getters and Setters ---
console.log("--- Getters and Setters ---");
const circle = {
  radius: 5,
  get diameter() {
    return this.radius * 2;
  },
  set diameter(value) {
    if (value > 0) {
      this.radius = value / 2;
    } else {
      console.error("Diameter must be positive.");
    }
  }
};
console.log("Initial Radius:", circle.radius);
console.log("Getter Diameter:", circle.diameter);
circle.diameter = 12; // Use setter
console.log("New Radius:", circle.radius);
console.log("New Diameter:", circle.diameter);
circle.diameter = -4; // Use setter with invalid value
console.log("");

// --- Property Descriptors ---
console.log("--- Property Descriptors ---");
const descObj = {};
Object.defineProperty(descObj, 'readOnlyProp', {
  value: "Cannot change",
  writable: false,
  enumerable: true,
  configurable: false
});
console.log("Read Only Prop:", descObj.readOnlyProp);
const descriptor = Object.getOwnPropertyDescriptor(descObj, 'readOnlyProp');
console.log("Property Descriptor:", descriptor);
console.log("");
