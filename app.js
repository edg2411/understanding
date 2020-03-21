var arr1 = new Array(); // una forma de declararlo

var arr = [ // otra forma de declararlo
    1,
    false,
    { name: 'eze' },
    function(name) {
        var greeting = 'hello ';
        console.log(greeting + name);
    },
    "hi"
];

// distintos elementos del array no necesariamente tienen que ser del mismo tipo

console.log(arr);

arr[3](arr[2].name);

// 3 es el indice de la funcion, 2 el indice del objeto y .name el valor que contiene (value-pair)