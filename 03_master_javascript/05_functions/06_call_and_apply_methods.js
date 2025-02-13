/*  
    - we will learn how to set the this keyword manually 
    - and why we want to do that 


    remeber:
    - writing method using enhanced object literal syntax 
      book() {}
      in the previous we should write it like this 
      book: function() {}

    - all the function has method and properties 
      methods like => call() apply() bind()

Advice:
  - in moder we use call not apply even if you have the data as an array just spread them ...
*/

const lufthansa = {
  airline: 'Lufthansa', 
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} BOOKED A SEAT ON ${this.airline} FLIGHT ${this.iataCode}${flightNum}`);
    this.bookings.push({fligh: `${this.iataCode}${flightNum}`, name});
  }
}
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}

const egyptAirLine = {
  airline: 'Egyptairline',
  iataCode: 'EG',
  bookings: []
}

const book = lufthansa.book;

book.call(eurowings, 239, 'ali');  


lufthansa.book(239, 'ali');
console.log(eurowings.bookings);
console.log(lufthansa.bookings);




// call, apply and bind
/*
why we use them 
  - to set the this keyword manually, to tell Javascript explicitly what the this keyword should be

*/

// call()
/*
  - when we need something like this
    for example when having a function that contain this and this function doesn't related to any objects
    so this keyword will be undefind and show error 
    to handle that use call() as method of the function itself and pass the object as first value 
    book.call()
*/

// apply
/*
  - apply method is doing the same as call method but apply doesn not receive the arguments after the this 
    keyword, instead it will going to take an array

Notes:
  - this apply method it is not that used anymore in modern JS because now  we have a better way of doing that 
  - in a regular function call "this" keywork is points to undefined
*/

const flightData = [588, 'osama mohamed']
book.apply(egyptAirLine, flightData); // not modern 
book.call(egyptAirLine, ...flightData); // better to use 



// bind methos 
/*
  - bind also allows us to manually set this keywords for any function cvalll.
  - the dirrenece is that bind doesn't immedialty call the function instead it returns a new function
    where this keyword is bound

another situation to use bind:
  - when we use object together with event lisntener
  - with partial appliction 


Note:
  - by specifying parts of the arguent beoreheand, this common patter called partial application
  -> partial application means that a part of the arguments of the original function are already applied
     whcih mean olready set.
  - if you use it with somthing that doesn't have this keyword so first parameter shouold be null

*/
const bookEW = book.bind(eurowings);
bookEW(23, 'ali');

// we can create a function that is specified for the 23trip
const bookEW23 = book.bind(eurowings, 23);

bookEW23('osama')
bookEW23('ahmed')


// bind with event listener:
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}
document.querySelector('body').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));// use bind not call
// because if you try to write call so the call method will call it here while we just need to assign it here
// and bind will return a new function

// if you write in this way, so 'this' will indicate it to the button itself and the result will be Nan
document.querySelector('body').addEventListener('click', lufthansa.buyPlane)


// Partial application 
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate
  }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));