//  by value

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference ( all obj including func)

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by ref paramenters

function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals (=) sets uop new mem space (new address)

c = { greeting: 'howdy' }; // crea un espacio para howdy y luego apunta c a esa direccion

console.log(c);
console.log(d);