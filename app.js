// using f statement

function greet(name) {
    console.log('hola ' + name);
}

greet('eze');

// using f expression

var greetF = function(name) {
    console.log('hola ' + name);
};

greetF('eze');

// using IIFE(immediately invoked function expression)

var greeting = function(name) {
    console.log('hola ' + name);
}();

var greeting2 = function(name) {
    return 'hola ' + name;
}('eze');
// console.log(greeting2());    // esto tira error pq greeting2 ahora tiene un string!
console.log(greeting2);

3;
'hola';

{
    name: 'eze'
};

// no funciona pq lo reconoce como un f statement y no puede no tener nombre! por eso token(
// function(name) {
//     return 'hello' + name;
// };

// el engine reconoce que lo que esta entre () debe ser una expresion

var firstname = 'eze';

(function(name) {
    // return 'hello' + name;
    var greeting = 'inside IIFE: hello ';
    console.log(greeting + name);
}(firstname)); // de hecho si no la invoco el vsc se queja
// })(firstname); // tambien es valido con los () de invocacion fuera de los () de wrapping