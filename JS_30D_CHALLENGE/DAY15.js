// Task 1:
function init() {
  let name = "Damodar";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const userName = init();
userName();

// Task 2:
const createCounter = () => {
  let count = 0;
  const increment = () => {
    count++;
  };
  const getValue = () => {
    return count;
  };
  return {
    increment,
    getValue,
  };
};
const counter = createCounter();
counter.increment();
console.log(counter.getValue());

// Task 3:
const uniqueId = () => {
  let id = 0;
  const increment = () => {
    id++;
    return id;
  };
  return increment;
};
const generatedId = uniqueId();
console.log(generatedId());
console.log(generatedId());
console.log(generatedId());

// Task 4:
const greetMessage = (name) => {
  const greet = () => {
    return `Hello, ${name}`;
  };
  return greet;
};
console.log(greetMessage("Damodar")());
const greetDamodar = greetMessage("Damodar");
console.log(greetDamodar());

// Task 5:
const createFunctionArray = () => {
  let functions = [];
  for (let i = 0; i < 5; i++) {
    functions[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i);
  }
  return functions;
};
const functionArray = createFunctionArray();
functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

// Task 6:
const createItemManager = () => {
  let items = [];
  const findIndex = (item) => {
    return items.indexOf(item);
  };

  const addItem = (item) => {
    items.push(item);
    console.log(`${item} added to the list.`);
  };

  const removeItem = (item) => {
    const index = findIndex(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`${item} removed from the list.`);
    } else {
      console.log(`${item} not found in the list.`);
    }
  };

  const listItems = () => {
    if (items.length === 0) {
      console.log(`The list is empty`);
    } else {
      console.log(`Items in the list:`);
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }
  };
  return {
    addItem,
    removeItem,
    listItems,
  };
};

const ItemManager = createItemManager();
ItemManager.addItem("Book");
ItemManager.addItem("Pen");
ItemManager.addItem("Rubber");
ItemManager.listItems();
ItemManager.removeItem("Pen");
ItemManager.listItems();

// Task 7:
const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(`Fetching from cache for arguments: ${args}`);
      return cache[key];
    }

    console.log(`Calculating result for arguments: ${args}`);
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

const add = (a, b) => {
  return a * b;
};

const memoizedAdd = memoize(add);
console.log(memoizedAdd(5, 2)); // Calculate and store
console.log(memoizedAdd(5, 2)); // Fetch from cache

// Task 8:

const memoize1 = () => {
  const cache = {};

  return (n) => {
    if (n in cache) {
      console.log(`Fetching from cache for: ${n}`);
      return cache[n];
    }

    console.log(`Calculating result for: ${n}`);
    const result = func(n);
    cache[n] = result;
    return result;
  };
};

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const memoizeFactorial = memoize(factorial);

console.log(memoizeFactorial(5));
