
// first class vs higher order functions

// First Class functions 
/*
    - JavaScript treats function as first class citizens
    - this means that frunctiona are simply values
    - function ar just another "type" of object in JavaScript

    => store function in variables or properties:
        - const add = (a, b) => a + b;
        - const counter = { value: 11, increment: function() { this.value++; } };

    => pass functions as arguments to other function 
        - function greet(f) { f(); }
        - btn.addEventListener('click', greet);

    => retur fucntions from frunctions
    => call methods on functions 
        - counter.cinc.bind(someOtherObject);

*/



// Higher-Order Functions
/*
    - A function that receives another function as argument, that returns a new function, or both
    - this only possible because of first-class functions

    => function that receives another function as argument
        - function greet(f) { f(); }
        - btn.addEventListener('click', greet);
          => addEventListener => higherOrder  function
          => greet => callback function

    => function that returns new function 
        - function count() {
                let counter = 0;
                return function () {
                counter++
                }
          }

*/
