

// converting the function to 

// turn first word to uppercase
const upperFirstWord = function (str) {
    const [first , ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// transform the input 
const transform = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transforming string: ${fn(str)} using ${fn.name}`);
}


transform('Hello everyone', str.toUpperCase)


const high5 = function() {
    console.log('👏')
}
document.body.addEventListener('click', high5) // high5 here is the callback function and it called event handler or event listener

// Notes:
/*
    - function can have property like name fn.name => this will return the name of the function
    - callback function is the function that javascript call we not call it by ourself. passing it 
      without a brackets

lower level function 
    - like upperfirst or high5 we call them low level function of abstraction 

higher level function 
    - like transform we call them higher level function of abstraction
    - it is a function that take another function as an argument
    - also calling it higher order function 

*/

// why our callback function is much more useful in JS 
/*
    - it make it easy to split our code also make it more easier and useful
    - allow us to create abstraction


*/