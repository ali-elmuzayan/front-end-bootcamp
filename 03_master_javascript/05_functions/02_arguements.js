'use strict'

const flight = 'Lh234';
const ali = {
    name: 'ali',
    passport: 23456789
}

const checkIn = function(flightNum, passenger) {

    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 23456789) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

checkIn(flight, ali);
console.log(flight);
console.log(ali);


/*
In summery 
    - passing a primitve type to a function is summilar to creating a copy 
    - otherwise when passing an object or arrays to a function what ever 
      happen to the copy the change will happen to teh original
*/

// so if we did that the object will change 
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(ali);
checkIn(flight, ali);

// passing by value and passing by reference (&)
/*
    - javascript doesn't have a concept of passing by reference 
    - so if we pass an object or array to a function it will create a copy of the object or array but what ever
      happen to the copy the change will happen to the original, which is essentially a pointer 
      to the memory location of the data

    - while primitive type (numbers, strings, booleans) are always doing the same as passing as value 
      so the copy will not change the original

*/