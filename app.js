String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('ezequiel'.isLengthGreaterThan(3));

Array.prototype.myCustomeFeature = 'cool';

arr = ['eze', 'juan', 'perez'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// de hecho iterar en objetos nunca es conveniente, y como los arrays son objetos en js no lo deberias hacer
// excepto de la manera clasica donde te aseguras con arr.length 
// de no pasarte al prototipo u otras cosas dentro del obj array