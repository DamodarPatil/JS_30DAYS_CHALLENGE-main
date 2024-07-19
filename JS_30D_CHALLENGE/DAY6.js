//Activity 1: Array Creation and Access
//Task 1:
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);

//Task 2:
console.log(`First Element ${myArr[0]}`);
console.log(`Last Element ${myArr[myArr.length - 1]}`);

//Activity 2: Array Methods(Basic)
//Task 3:
const myArr1 = [1, 2, 3, 4, 5];
myArr1.push(6);
console.log(myArr1);

//Task 4:
myArr1.pop();
console.log(myArr1);

//Task 5:
myArr1.shift();
console.log(myArr1);

//Task 6:
myArr1.unshift(11);
console.log(myArr1);

//Activity 3: Array Methods (Intermediate)
//Task 7:
const myArr3 = [1, 2, 3, 4, 5];
console.log(myArr3);
const newArr = myArr3.map((num) => num * 2);
console.log(newArr);

//Task 8:
const newArr1 = myArr3.filter((num) => num % 2 == 0);
console.log(newArr1);

//Task 9:
const initialValue = 0;
const myTotal = myArr3.reduce(
  (accumalator, currentValue) => accumalator + currentValue,
  initialValue
);
console.log(myTotal);

//Activity 4: Array Iteration
//Task 10:
const myArr4 = [1, 2, 3, 4, 5];
for (let i = 0; i < myArr4.length; i++) {
  console.log(myArr4[i]);
}

//Task 11:
myArr4.forEach((element) => {
  console.log(element);
});

//Activity 5: Multi-dimensional Arrays
//Task 12:
const twoDimesionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(twoDimesionalArray);
console.log(twoDimesionalArray[2][0]);


