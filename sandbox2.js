let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1])

// let ages = [20,25, 30, 35];
// console.log(ages[2]);

// let random = ['shawn', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let som = ninjas.join(',');
// let som = ninjas.indexOf('chun-li');
// let som = ninjas.concat(['ken', 'crystal']);
let som = ninjas.push('ken');
som = ninjas.pop();

console.log(ninjas, som);

let age = null;

console.log(age, age + 3, `the age is ${age}`);

// boolean & comparison operators
console.log(true, false, 'true', 'false');

// methods can return booleans
let email1 = 'john@example.com';
let names = ['mario', 'luigi', 'toad'];

// let emailResult = email.includes('@');
// let namesResult = names.includes('luigi');
// console.log(emailResult);
// console.log(namesResult);

// comparison operators
let age1 = 24;

// console.log(age1 == 25);
// console.log(age1 == 24);
// console.log(age1 != 25);
// console.log(age1 < 25);
// console.log(age1 > 25);
// console.log(age1 <= 25);
// console.log(age1 >= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');

// loose comparison (different types can still be equal)
// console.log(age1 == 24);
// console.log(age1 == '24');
// console.log(age1 != 24);
// console.log(age1 != '24');

// console.log(age1 === 24);
// console.log(age1 === '24'); // False - different types
// console.log(age1 !== 24);
// console.log(age1 !== '24'); // True - different types

// type conversion
let score = '100';
// score = Number(score)
// console.log(typeof score);

// console.log(score + 1); // 1001 - string concatenation

// result = Number('hello');
// console.log(result);
result = Boolean('0');
console.log(result, typeof result);