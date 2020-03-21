// en js el overload o sobrecarga de funciones no es igual que en otros lenguajes
// pero al tener first class functions se puede manejar 
// esta e suna forma de salvar problemas, no es la mejor ni la unica!

function greet(firstname, lastname, language) {

    language = language || 'en'; // esto sirve tambien!

    if (language === 'en') {
        console.log('hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
        console.log('hola ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greetEnglish('eze', 'dg');
greetSpanish('eze', 'dg');