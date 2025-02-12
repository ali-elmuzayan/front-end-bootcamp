'use strict'


const bookings = []; 

// to set teh default value  price = vale 
// note that: you can set the default value to be equal to the previous parameter price = numPassengers

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking)
}


createBooking('LH123', 2, 1000);
createBooking('LH123');
createBooking('LH123', 5);


// when calling it if you want the second parameter to be as default and assign the third parameter 
// to do that make the second parameter to undefined => becuase undefined is the same way as not setting it 
createBooking('LH123', undefined, 1000) 


// before the ES6 that is the way we was setting the default valur
// this is the ES5 way
const OldCreateBokking = function (flightNum, numPassengers, price) {
    numPassengers = numPassengers || 1;
    price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking)
    
}