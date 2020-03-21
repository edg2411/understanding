console.log(this);

function a() {
    console.log(this);
    this.newvar = 'hello';
}

var b = function() {
    console.log(this);
}

a();

console.log(newvar);

b();

// en todos los casos anteriores this apuntaba al objeto global window
// al crear un obj literal el this apunta a ese obj y no al glob
var c = {
    name: 'obj c',
    log: function() {
        this.name = 'updt obj c';
        console.log(this);

        var setname = function(newname) {
            //se supone que this dentro de esta funcion sigue apuntando al objeto c pero no..
            this.name = newname;
            //es mas.. este this apunta al objeto global, aunque este dentro de un objeto dentro de una funcion etc..
        };
        setname('new updt obj c');
        console.log(this);
    }
};
// considerado bug
c.log();

var d = {
    name: 'obj d',
    log: function() {
        var self = this; // self o that le llaman apunta all objeto d
        this.name = 'updt obj d';
        console.log(self);

        var setname = function(newname) {
            // va a encontrar self (el engine) afuera de function (scope chain) y que apunta al obj d
            self.name = newname;
        };
        setname('new updt obj d');
        console.log(self);
    }
};

d.log();