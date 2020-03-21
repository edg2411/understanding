// IIFE & safe code
(function(global, name) {
    var greeting = 'hola '; // se crea en un nuevo exec context, no en el global..
    global.greeting = ' a proposito hola'; // estoy a proposito modificando una variable que no esta en este archivo
    console.log(greeting + ' ' + name);
})(window, 'eze'); // con los () puedo embeber toda mi funcion y evitar que colisione con otros archivos
// pq window es el obj global en el browser

console.log(greeting);