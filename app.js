// CLOSURES

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) { // si yo le pongo let en vez de var cambia!
        // cuando se llama a buildFunctions() se crean las fs pero el clg no se ejecuta hasta que las fs no son llamadas
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    // en este punto i = 3 por eso salio del for()
    return arr;
}

var fs = buildFunctions();

// por closure la variable i es retenida (igual que arr) para este scope pero vale 3
fs[0]();
fs[1]();
fs[2]();
// cada una genera un exec context que tiene un clg que busca i pero no esta y por scope chain y closure la encuentra
// y cada una tiene la misma referencia porque fueron creadas en el mismo lugar..


/* 
    si vos le preguntas a 3 hermanos que edad tiene su padre
    te van a contestar los 3 la misma edad, 
    no te van a contestar la edad que tenia el padre cuando ellos nacieron
    tiene sentido?
*/