// Immediatly invoked function esxpression IIFE
/*
    - sometimed in JS we need a function that call once and then disappear
    - we can need this technique with something called async/await
    - we need to call the function without assigning it to any variable or without declaring
      a function 
    - not used in moder JS because if you want  ot create a new scoope for data privacy 
      you should use let and const inside {}

if you try to do this way 
    - function () {// you will got an error so to handle that}
*/

(function () {
    console.log('This will never run again');
})();
(() => console.log(' Whti will also never run agian '))(); 

// why this pattern invented:
/* *
    first we should know that:
    - this is not a feature of JS, it is just a pattern some developer come with.

it used 
    - to create a new scope for data privace 
*/

// remeber:
/*
    - what also create a scope in ES6 is the variable declared with let and const, they create 
     thier own scope inside a block 
     try this :
*/
{
    const isPrivate = 23
    var notPrivate = 46
}
console.log(notPrivate);
console.log(isPrivate );


// note to trick JS
/*
    - if your write this code function() {console.log('Hello')}; you will got an error
    - you can trick JS by writing (function () {console.log('Hello')}) and it will think
      it is an expression so the error will not generated 
    - or you can add () to the previous and it will run the code immediatly
*/