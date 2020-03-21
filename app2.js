// CLOSURES 2
// esto cambia desde el es6 donde se usa let!

function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

var fs = buildFunctions2();
console.log('app2');
fs[0]();
fs[1]();
fs[2]();
console.log('-----');