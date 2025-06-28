let obj1={
    a:10,
    b:20,
    c:3.45,
    d:true
}
obj1 //{a: 10, b: 20, c: 3.45, d: true}
let obj2= Object.create(obj1)

obj2 // {} , empty object  created from the prototype of obj1

// but 
obj2.__proto__ //{a: 10, b: 20, c: 3.45, d: true}

//and
obj2.__proto__ == obj1 //true

// So what happens when we use Object.create , object to object inheritance happened.

//the benefit is that , if i try to find
/*
* obj.a --> it will try to find a in obj2 if not 
        --> it will try to find in obj2.__proto__ if not
        --> it will try to find in obj2.__proto__.__proto__ if not 
        and so on until __proto__ becomes null
* */

obj2.p='hello'
obj2.q='world'
obj2.r=987654321

obj3=Object.create(obj2)

//console commands
obj1 //{a: 10, b: 20, c: 3.45, d: true}
obj2 //{p: 'hello', q: 'world', r: 987654321}
obj3 // {}

//but 
obj3.r   //98765432
obj3.a //10

// so , obj3.__proto__==obj2 and obj3.__proto__.__proto__==obj1