// js object literal sintax opt
var objectLiteral = {
    propName: 'eze',
    isProg: true
};

console.log(objectLiteral);

// js object literal sintax opt
var objectLiteral2 = {
    propName: 'eze',
    isProg: true
};

console.log(objectLiteral2);

// data via internet
/* 
<object>
    <propName>eze</propName>
    <isProg>true</isProg>
</object>
 */

// JSON: Java Script Object Notation

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"propName": "eze","isProg": true}');
console.log(jsonValue);

// JSON != JS OBJECT (LITERAL)