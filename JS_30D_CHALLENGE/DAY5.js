//Activity 1: Function Declaration

//Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
oddOrEven(2);
oddOrEven(3);

//Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(5));

//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let find = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
};
find(5, 10);

//Task 4: Write a function expression to concatenate two strings and return the result.
let concatenate = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenate("Dam", "odor"));

//Activity 3: Arrow Functions

//Task 5: Write an arrow function  to calculate the sum of two numbers and return the result.
const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(sumOfTwoNumbers(5, 2));

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkCharacter = (str, char) => {
  return str.includes(char);
};
console.log(checkCharacter("Damara", "a"));

//Activity 4: Function Parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(num1, num2 = 5) {
  return num1 * num2;
}
console.log(product(5));

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name, age = 18) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greeting("Peter");

//Activity 5: Higher-Order Functions

//Task 9: Write a higher-order function that takes a function and number, and calls the function that many times.
function callFunctionXTimes(func, times) {
  for (let i = 1; i <= times; i++) {
    func(i);
  }
}
let sayHello = (iteration) => {
  console.log(`Hello! This is call number ${iteration}.`);
};
callFunctionXTimes(sayHello, 4);

//Task 10:Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
  const firstResult = func1(value);

  return func2(firstResult);
}

function multiplyByTwo(x) {
  return x * 2;
}

function addThree(x) {
  return x + 3;
}

console.log(applyFunctions(multiplyByTwo, addThree, 20));
