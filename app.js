// first class functions    en js las funciones son objetos y punto

console.log('normal');


// greet(); // esto funciona 

//statement
function greet() {
    console.log('hi');
}

greet(); // esto funciona 

console.log(greet());

console.log('anonima');


// anonymousGreet(); // esto no funciona!

// la variable esta hoisteada pero no tiene nada cargado (undefined) y por eso tira error al poner ()

//expression
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet(); // esto funciona 

console.log(anonymousGreet);
console.log(anonymousGreet());

// nota: pasa lo mismo del undefined


function log(a) {
    a();
}

//function expression

log(function() {
    console.log('hi');
});