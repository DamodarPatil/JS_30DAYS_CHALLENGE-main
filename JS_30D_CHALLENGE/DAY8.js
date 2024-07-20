//Activity 1: Template Literals
//Task 1:
let Name = "Damodar";
let Age = 25;
console.log(`My name is ${Name} and I am ${Age} years old.`);

//Task 2:
let multiline = `This is a multiline string
using template literals`;
console.log(multiline);

//Activity 2: Destructing
//Task 3:
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);

//Task 4:
let book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
};
let { title: ti, author: au } = book;
console.log(ti, au);

//Activity 3: Spread and Rest Operator
//Task 5:
const myarray = [1, 2, 3, 4, 5];
const newArray = [...myarray, 6, 7, 8, 9, 10];
console.log(newArray);

//Task 6:
const sum = (...rest) => {
  return rest.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3, 4, 5));

//Activity 4: Default Parameters
//Task 7:
const product = (a, b = 5) => {
  return a * b;
};
console.log(product(5));

//Activity 5: Enhanced Object Literals
//Task 8:
let name = "Damodar";
let age = 20;
let person = {
  name,
  age,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
person.greet();
console.log(person);

//Task 9:create an object with computed property names based on varibles and log the object the the console.
let key1 = "name";
let key2 = "age";

let person1 = {
  [key1]: "Damodar",
  [key2]: 20,
};

console.log(person1);
