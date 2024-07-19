//Activity 1: Object Creation and Access
//Task 1:
const Book1 = {
  title: "The Dance of Dragons",
  author: "George R. R. Martin",
  year: "12 July 2011",
};
console.log(Book1);

//Task 2:
console.log(Book1.title);
console.log(Book1.author);

//Activity 2: Object Methods
//Task 3:
const Book2 = {
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  year: "6 August 1996",
  bookdetails: function () {
    return console.log(
      `${this.title} is written by ${this.author} in ${this.year}`
    );
  },
};
Book2.bookdetails();

//Task 4:
const Book3 = {
  title: "A Storm of Swords",
  author: "George R. R. Martin",
  year: "8 August 2000",

  updateYear: function (year) {
    this.year = year;
  },
};
Book3.updateYear("12 May 2004");
console.log(Book3);

//Activity 3: Nested Objects
//Task 5:
const library = {
  name: "Fantasy library",
  books: [
    {
      title: "A Clash of Kings",
      author: "George R. R. Martin",
      year: "16 November 1998",
    },
    {
      title: "A Feast for Crows",
      author: "George R. R. Martin",
      year: "17 October 2005",
    },
    {
      title: "Fire & Blood",
      author: "George R. R. Martin",
      year: "20 November 2018",
    },
  ],
};

console.log(library);

//Task 6:
console.log(library.name);

const newBooks = library.books.map((book) => book.title);
console.log(newBooks);

//Activity 4: The this Keyword
//Task 7:
const Book4 = {
  title: "A Game of Thrones",
  author: "George R. R. Martin",
  year: "6 August 1996",
  bookdetails: function () {
    return console.log(
      `${this.title} is written by ${this.author} in ${this.year}`
    );
  },
};
Book2.bookdetails();

//Activity 5: Object Iteration
//Task 8:
const Book5 = {
  title: "The World of Ice & Fire",
  author: "George R. R. Martin",
  year: "28 October 2014",
};

for (const key in Book5) {
  console.log(`${key}: ${Book5[key]}`);
}

//Task 9:
console.log(Object.keys(Book5));
console.log(Object.values(Book5));


