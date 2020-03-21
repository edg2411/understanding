// call apply bind

var person = {
    firstname: 'eze',
    lastname: 'dg',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log('logged: ' + this.getFullName());
    console.log('args: ' + lang1 + ' ' + lang2);
    console.log('---------');
    // }.bind(person);  // salva error en logName
};

var logPersonName = logName.bind(person); // copia la funcion 

// logName(); // da error

logPersonName('en');

logName.call(person, 'en', 'es'); // ejecuta la funcion
logName.apply(person, ['en', 'es']); // ejecuta la funcion igual que call pero los parametros se pasan como array

(function(lang1, lang2) {
    console.log('logged: ' + this.getFullName());
    console.log('args: ' + lang1 + ' ' + lang2);
    console.log('---------');
}).apply(person, ['en', 'es']);

// f borrowing

var person2 = {
    firstname: 'juan',
    lastname: 'perez'
};

console.log(person.getFullName.apply(person2)); // acordate que no llamas a la funcion getFullName
// estas usando un metodo de un objeto, en otro objeto

// f currying

function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2); //  estas creando una copia de la funcion con parametros preseteados
//--------------------------------obj,param1,param2 ->  el param2 (b) no lo estoy pasando
// estas fijando a = 2

multipleByTwo(3); // esto va a hacer 2*3 

console.log(multipleByTwo(3));