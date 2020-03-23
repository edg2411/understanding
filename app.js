// "use strict"

// puede usarse al principio del archivo o al principio de una funcion
// es un extra, no todos los engines resuelven igual

var a = {
    firstname: 'eze',
    lastname: 'dg',

};
console.log(a);
console.log(typeof a);

var b = JSON.stringify(a);

console.log(b);
console.log(typeof b);

var c = JSON.parse(b);

console.log(c);
console.log(typeof c);

var e = function() {}

console.log(typeof e);
console.log(e instanceof Object);