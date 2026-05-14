// function declaration
function greet(){
    console.log("Hello there");
}
greet();

// function expression
// const speak = function(){
//     console.log('good day!');
// };
// speak();
// speak();
// speak();

// arguments and parameters

const speak = function(name = 'Luigi', time = 'night'){
    console.log(`good ${time}! ${name}`);
};
speak("May", 'evening');;
speak();

// returning values
// const calArea = function(radius){
//     return 3.14 * radius**2;
// };

// console.log(calArea(100));

//  arrow functions
const calArea2 = radius => 3.14 * radius**2;

const area = calArea2(25);
console.log(area)

// practice arrow functions
const greet2 = () => 'hello, world';
console.log(greet2());

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    };
    return total;
};

console.log(bill([10, 15, 30], 0.2));