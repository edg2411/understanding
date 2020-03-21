function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'es') {
            console.log('hola ' + firstname + ' ' + lastname);
        }
        if (language === 'en') {
            console.log('hello ' + firstname + ' ' + lastname);
        }
    };
}

var greetingEnglish = makeGreeting('en');
var greetingSpanish = makeGreeting('es');

greetingEnglish('eze', 'dg');
greetingSpanish('eze', 'dg');