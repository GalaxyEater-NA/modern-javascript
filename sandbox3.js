// for loops

for(let i = 0; i<5; i++){
    console.log('in loop:', i);
}

// console.log('loop finished');

const names = ['john', 'susan', 'anna', 'peter', 'bob'];

// for (let i =0; i < names.length; i++){
//     // console.log(names[i]);
//     let html =`<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops

// let i = -85;
// while (i<5){
//     console.log('in loop:', i);
//     i++;
// };

// let i = 0
// while (i < names.length){
//     console.log(names[i]);
//     i++;
// };


// do while loops

// let i = 5;
// do {
//     console.log('val of i is: ', i);
//     i++;
// } while (i<5);

// if statements

// const age = 25;
// if  (age >20){
//     console.log('you are over 20 years old');
// };

// if (names.length > 3){
//     console.log("that's a lot of names");
// };

// else if statements
// logical opperators - OR || and AND &&
const password = 'pa@ss';

if (password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if (password.length >= 8|| password.includes('@') && password.length>= 5 ){
    console.log('that password is strong enough');
} else {
    console.log('password is strong');
};

// logical NOT (!)
let user = false;

if (!user){
    console.log('you must be logged in to continue');
};

// break and continue
const score = [50, 25, 0, 30 ,100, 20, 10];

for (let i = 0; i< score.length; i++){
    if (score[i] ===0){
        continue;
    }
    console.log('your score: ', score[i]);
    // if score is 100, break out of the loop
    if (score[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements
const grade = 'P';

switch (grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got a E!');
        break;
    default:
        console.log('invalid grade');
}

// varibale & block scope
// var has global scope, let and const have block scope
const age = 30;

if (true){
    const age = 40;
    const name = 'Bob';
    console.log("inside 1st code block: ", age, name);
    if (true){
        const age = 50;
        console.log("inside 2nd code block: ", age);
    }
};
console.log('outside code block: ', age, name)