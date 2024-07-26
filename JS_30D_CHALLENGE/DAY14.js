// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `${this.name} is ${this.age} year old`;
    }
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age is ${this.age}`);
    }
  
    static genericGreeting() {
      return "Good Morning";
    }
  }
  
  console.log(person.genericGreeting());
  
  const person1 = new person("Damodar", 19);
  
  console.log(person1.greet());
  person1.updateAge(20);
  
  // Activity 2: Class Inheritance
  // Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
  // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
  
  class student extends person {
    static count = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      student.count++;
    }
    getStudentId() {
      return `${this.name} StudentId is ${this.studentId}`;
    }
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }
  }
  
  const student1 = new student("Devansh", 20, 1473);
  const student2 = new student("Damodar", 29, 2263);
  
  console.log(student1.getStudentId());
  console.log(student1.greet());
  console.log(`Total Students: ${student.count}`);
  
  // Activity 3: Static Methods and Properties
  // Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
  // Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
  
  // Static method already added in person class and used earlier.
  // Static property already added in student class and used earlier.
  
  // Activity 4: Getters and Setters
  // Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
  // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  
  class person2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ");
    }
  }
  const person3 = new person2("Harsh", "Patil");
  console.log(`${person3.fullName}`);
  person3.fullName = "Devansh Patil";
  console.log(`Updated full name is: ${person3.fullName}`);
  
  // Activity 5: Private Fields (Optional)
  // Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
  
  class Account {
    #balance;
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance = this.#balance + amount;
        console.log(`Deposited: $${amount}`);
      }
    }
  
    withDraw(amount) {
      if (amount > 0 || this.#balance >= amount) {
        this.#balance = this.#balance - amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Insufficient balance or invalid amount!");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account1 = new Account(500);
  console.log(`Total Balance: $${account1.getBalance()}`);
  account1.deposit(500);
  console.log(`Balance after deposit: $${account1.getBalance()}`);
  account1.withDraw(200);
  console.log(`Balance after withdrawal: $${account1.getBalance()}`);
  