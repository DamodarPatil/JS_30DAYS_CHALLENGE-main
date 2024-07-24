// Activity 1: Basic Error Handling with Try-Catch
// Task 1:
const throwError = () => {
  try {
    throw new Error("This is an error message");
  } catch (error) {
    console.error("Error caught:", error.message);
  }
};
throwError();

// Task 2:
const divideNumbers = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by Zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error caught:", error.message);
  }
};
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));

// Activity 2: Finally Block
// Task 3:
const finallyBlock = () => {
  try {
    console.log("In try block");
    throw new Error("Something went wrong");
  } catch (error) {
    console.error("Caught error:", error.message);
  } finally {
    console.log("Finally block executed");
  }
};
finallyBlock();

// Activity 3: Custom Error Objects
// Task 4:
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const testCustomError = () => {
  try {
    throw new customError("This is a custom error");
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};
testCustomError();

// Task 5:
class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError";
  }
}

const validateInput = (input) => {
  try {
    if (input.trim() === "") {
      throw new Error("Input cannot be empty");
    }
    console.log("valid input:", input);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};
validateInput("Hello");
validateInput("");

// Activity 4: Error handling in Promises
// Task 6:
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
};

randomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.error("Error:", error));

// Task 7:
const ErrorHandling = async () => {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error);
  }
};
ErrorHandling();

// Activity 5: Graceful Error Handling in Fetch
// Task 8:
fetch("https://invalidUrl.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });

// Task 9:
const fetchErrorHandling = async () => {
  try {
    const response = await fetch("https://invalidUrl.com");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};
fetchErrorHandling();
