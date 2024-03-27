
// function print (){
//     var a = 10;
//     console.log(a)
// }
// console.log(a); 
// // it gives an error that a  is not defined . why ? because the variable 'a' is only available inside the function scope,
// // so outside of it print();
// print(); 


function count(){

    var init = 1;
    function plus(){
        console.log(++init);
    }
    return plus;
}
var c =count();
c()
//closure scope: when a inner function has the scope of outer function

// a variable of a function is also available to its closure scope of the function
//example

function counter(val){

    function plus(){
        console.log(++val);
    }
    return plus;
}

var c = counter(10);
c(); // 11
c(); // 12