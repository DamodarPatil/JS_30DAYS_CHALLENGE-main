import { addTwoNumber } from "./mathModule.js";
import { person } from "./personModule.js";
import { sumTwoNumbers, subTwoNumbers } from "./mathOperation.js";
import mulTwoNum from "./multiplyModule.js";
import * as obj from "./utilityModule.js";
import _ from "lodash";
import axios from "axios";

console.log(addTwoNumber(5, 10));

console.log(person.name);
person.greet();

console.log(sumTwoNumbers(10, 20));
console.log(subTwoNumbers(20, 5));

console.log(mulTwoNum(10, 10));

console.log(obj.value);
console.log(obj.multiplication(5, 20));
console.log(obj.greet("Damodar"));

const array = [1, 2, 3, 4, 5];
const shuffledArray = _.shuffle(array);
console.log(shuffledArray);

const axiosTest = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = response.data;
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
};
axiosTest();


