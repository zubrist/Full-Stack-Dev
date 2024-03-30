

//this 

// we can write 'this' without any class and function and it will return  the window object.
console.log(this);

function check() {
    console.log(this); // this function will also return window bcz we called the func from window scope.
}

let obj={
    a:10,
    b:20,
    c:true,
    d: function(){
        console.log(this);// this  inside of the function is referring to the obj not window because we are calling the function on an object
    },
// we can make object inside an object
    e: {
        x:10,
        y:20,
        z:false
    }

}
let z=obj.d

typeof z // function 

z() // output: window , 'this' in js is bounded to runtime. At the runtime the interpreter checks if the 'this' via an object then
// it returns an object else it returns the global scope i.e window


// Point to be noted
/*************
 * json structure 
 * 
 *  let objName={
 *      key: value,
 *      key: value,
 *      key: value 
 * }
 * here value can be of any type but key should be a string.
 * 
 * but if we put any int or true false as key , it will be treated as string and then it will be accessed another way
 * see example:
 * ******************/
let person ={
    name:"John",
    1:30,
    city:"New York"
}
person.name // output: John
//person.1 // error 
//solution
person["1"] // output : 30