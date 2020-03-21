function greet(firstname, lastname, language) {
    // function greet(firstname, lastname, language, ...other) {    // me parece que no se usa esto!

    language = language || 'en';

    if (arguments.length === 0) {
        console.log('no params');
        console.log('---------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);

    console.log(arguments); //  no esta declarada por mi en ningun lado! (array-like)
    console.log('arg 0: ' + arguments[0]);

    console.log('------');
}

greet();
greet('eze');
greet('eze', 'dg');
greet('eze', 'dg', 'esp');
greet('eze', 'dg', 'esp', 'esto es un parametro extra!');