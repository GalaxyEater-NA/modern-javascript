// string
console.log('hello, world!');

let email = "mike@example.com";
console.log(email);

// string concaternation
let firstName =  "Brandon";
let lastName = "Smith";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods

// let result2 = email.lastIndexOf('l');

// let result2 = email.slice(0,5);

// let result2 = email.substring(4, 10)

// let result2 = email.replace('m', 'w');

let result2 = email.replace('e', 'a')
console.log(result2);

// Number

let radius = 10;
const pi  = 3.1415;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result3 = radius % 3; 
// let result3 = pi * radius ** 2;
// Order of opperations - B I D M A S - Brackets, Indices, Division, Multiplication, Addition, Subtraction

// let result3 = 5*(10 - 3) ** 2;

// console.log(result3);

let likes = 10;

// likes = like + 1;
// likes++;
// likes--;

// likes +=10;
// likes *= 8;
// likes /= 2;
// likes -= 8;


console.log(likes);

// NaN - Not a Number

// console.log(7 / 'hello');
// console.log(5 *  "hi");

let result4 = 'the blog has ' + likes + ' likes';
console.log(result4);

// template strings
const title = 'Best reads of 2024';
const author = 'Mario';
const likes2 = 30;

// concatenation way
// let result5 = 'The blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes';
// console.log(result5);

// template string way
let result5 = `The blog called ${title} by ${author} has ${likes2} likes`;
console.log(result5);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes2} likes</span>
`;
console.log(html);