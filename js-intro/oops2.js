// Lets check how to create objects

//one  way of creating an object 

var apple={
    taste:"sweet",
    color:"red",
// but if we have a lot of fruits it will lenghty
}

// another way 
function Fruit(taste, color){
    this.taste= taste;
    this.color=color;
    // now we can use new keyword to create  objects of the Fruit
}

let mango= new Fruit("sweet","yellow");
let Orange = new Fruit("Sour","Orange");
let banana = new Fruit("sweet","Yellow")

// 2015 , JS introduced new way , using "Class" keyword

//class is special type of function
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}; // when we make a class by declaration we need to put semicolon
let grape = new FruitClass ("Dreary","Green");


// Difference Between Class and Function in JS is that there is no concept of Class Hoisting unlike
// function hoisting
