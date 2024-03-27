/**
 *                                   
88  88  88888888888  88888888888  
88  88  88           88           
88  88  88           88           
88  88  88aaaaa      88aaaaa      
88  88  88"""""      88"""""      
88  88  88           88           
88  88  88           88           
88  88  88           88888888888      Immediately Invoked function Expression
 */

(function(){
    console.log("hello");
}) (); // IIFE - Immediately Invoked Function Expression 

// Above code is executed as soon as the script is loaded into memory, and it logs "Hello!" to the browser's console 

/**
 * Benefits - Its help us to create local scope without  polluting the global namespace, 
 * it also helps in preventing conflicts with other scripts that use similar variable
 */

(function (){

    var a = 10;
    var b= 20;
    console.log(a + b);
})();
//console.log(a); //  output : ReferenceError: a is not defined

// although 'var' has  function scope but its value is not accessible outside of the IIFE 

//Another use of IIFE is minification - lets understand with an example  

function doMath(){
    console.log("3^4 = ", Math.pow(3, 4));
    console.log("root 4 =", Math.sqrt(4));
    console.log("sin(45) =",Math.sin(45));
}
doMath()
// comment the above code to run below one

(function (l,p,r,s){
    l("3^4 = "+p(3, 4));
    l("root 4 =" + r(4));
    l("sin(45) ="+ s(45));
})(console.log, Math.pow, Math.sqrt,Math.sin);

