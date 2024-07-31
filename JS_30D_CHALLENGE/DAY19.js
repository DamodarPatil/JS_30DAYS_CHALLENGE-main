// 1
const str1 = "Winter is coming.";
const matches1 = str1.match(/Winter/g);
console.log(matches1);

// 2
const str2 = "My number is 1234 and 5678";
const matches2 = str2.match(/\d+/g);
console.log(matches2);

// 3
const str3 = "John Snow is Targaryen";
const matches3 = str3.match(/\b[A-Z][a-z]*\b/g);
console.log(matches3);

// 4
const str4 = "The numbers are 12, 345, and 6789.";
const matches4 = str4.match(/\d+/g);
console.log(matches4);

// 5
const str5 = "(123) 456-7890";
const matches5 = str5.match(/\((\d{3})\) (\d{3})-(\d{4})/);
console.log(matches5);

// 6
const str6 = "example@mail.com";
const matches6 = str6.match(/(\w+)@(\w+\.\w+)/);
console.log(matches6);

// 7
const str7 = "When you play a game of thrones you win or you die.";
const matches7 = str7.match(/^When\b/);
console.log(matches7);

// 8
const str8 =
  "When the snows fall and the white winds blow, the lone wolf dies but the pack survives.";
const matches8 = str8.match(/\bsurvives.$/);
console.log(matches8);

// 9
const password = "Password1!";
const isValid1 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
    password
  );
console.log(isValid1);

// 10
const url = "https://www.example.com";
const isValid2 = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-]*)*$/i.test(
  url
);
console.log(isValid2); //
