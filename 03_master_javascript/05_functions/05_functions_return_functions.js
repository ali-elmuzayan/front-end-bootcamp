// functions return function 
/*
    - when we declaring a function which will return another function that mean by assign it to anything 
      like a variable or a property it will make it a function with the returned value l

*/


const greet = function (greeeting) {
    return function(name = 'anonymous') {
        console.log(`${greeeting} ${name}`);
    }
}

const greeting = greet('hello');

console.log(greet('hello'));
console.log(greet('hello')('ali'));
console.log(greeting('ali'));


// challenge 
const greetArr = greetings => name => console.log(`${greetings} ${name}`);

greetArr('HI')('ali');