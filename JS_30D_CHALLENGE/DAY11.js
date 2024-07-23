// Activity 1: Understanding Promises
// Task 1:
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Done");
  }, 2000);
}).then((message) => console.log(message));

// Task 2:
new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task Failed");
  }, 2000);
}).catch((error) => console.error(error));

// Activity 2: Chaining Promises
// Task 3:
const fetchData1 = (data, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched: ${data}`);
      resolve(data);
    }, delay);
  });
};
fetchData1("Data 1", 1000)
  .then(() => {
    return fetchData1("Data 2", 2000);
  })
  .then(() => {
    return fetchData1("Data 3", 3000);
  })
  .then(() => {
    console.log("All data fetched in sequence");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Activity 3: Using Async/Await
// Task 4:
const asyncFunction1 = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Task Done");
      }, 2000);
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
};

asyncFunction1();

// Task 5:
const asyncFunction2 = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Task Failed");
      }, 2000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction2();

// Activity 4: Fetching Data from an API
// Task 6:
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Task 7:
const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData2();

// Activity 5: Concurrent Promises
// Task 8:
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log("All promise resolved:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// Task 9:
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved"), 3000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved"), 1000)
);

Promise.race([promiseA, promiseB, promiseC])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
