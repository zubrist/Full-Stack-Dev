//object oriented programming in javaScript
// allows to create objects without  using the class keyword.
// let`s check


// one way of creating Javascript object 
// and it called JavaScript Object Notation (JSON)
var bird={
    x:0,
    y:0,
    color:"blue",
    children:["ram", "sham","jodu","modhu"],
    fly:function(){
        if(this.x!=0 && this.y!=0)
        console.log("The bird is flying at", this.x, this.y)
        else
        console.log("The bird is not flying")
    },
    eat:function(food){ console.log(`the bird is eating ${food}`) }
};

