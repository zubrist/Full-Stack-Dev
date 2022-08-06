 g = 100 // global variable
var f= 30 // function scope
let b = 50 // block scope


function scope(){
    let a = 100;

    if(a==100){
        var s = 100
        console.log("Inside:", s)
    }
    console.log("outside:", s)

}