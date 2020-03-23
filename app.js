function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
    // this.getFullName = function() {
    //     return this.firstname + ' ' + this.lastname;
    // };
}

var john = new Person('john', 'doe');
console.log(john);
var jane = new Person('jane', 'doe');
console.log(jane);

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
};
// Person.getFullName2 = function() {
//     return this.firstname + ' ' + this.lastname;
// };

// console.log(john.getFullName());

console.log(john);