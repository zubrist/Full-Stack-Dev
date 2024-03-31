

let str="asdff"
let num =233
let bool= true
let arr=[1,2,3,4,5]
let obj={
    a:10,
    b:20
}
let fun= function () {
    console.log('hi !');
    
}

console.log( 'typeof String :', typeof String);
console.log( 'typeof Object :', typeof Object);
console.log( 'typeof Boolean:', typeof Boolean);
console.log( 'typeof Number :', typeof Number);
console.log( 'typeof Array :', typeof Array);
console.log( 'typeof Function :', typeof Function);

console.log(str.__proto__)


// In JS everything is Object , obj.__proto__
console.log('==========Prototypes=========');
console.log(obj.__proto__==Object.prototype); //true
console.log(str.__proto__==String.prototype); //true
console.log(bool.__proto__==Boolean.prototype); //true
console.log(arr.__proto__==Array.prototype);// true
console.log(num.__proto__==Number.prototype); //true
console.log(fun.__proto__==Function.prototype); //true

// all the objects are inherited form Object.prototype
// all the strings are inherited form String.prototype
// all the functions are inherited form Function.prototype
// and so on ...

// String.prototype inherits  from Object.prototype 

// two elements can have same __proto__ but there typeof may not be the same
