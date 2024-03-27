// lets understand var , let and Const

var a =10;
a++

console.log(a);


let b= 20;
b ++;
console.log(b);

const c=3;

//  c++; //  error because const variable cannot be reassigned
console.log(c);

function withVar() {
    var x = 10;
    if (true) {
      var x = 20; // Re-declares x within the if block, but still accessible outside
      console.log("Inside if:", x); // Output: 20
    }
    console.log("Outside if:", x); // Output: 20 (x is accessible throughout the function)
  }
  
  function withLet() {
    let y = 10;
    if (true) {
      let y = 20; // Creates a new local variable y within the if block
      console.log("Inside if:", y); // Output: 20
    }
    console.log("Outside if:", y); // Output: 10 (y declared with let is only accessible within the block)
  }
  
  function withConst() {
      const PI = 3.14159;  // Constant value cannot be reassigned later
      // PI = 3.14;  // This line will cause an error (attempt to reassign const)
      if (true) {
        // const PI = 3.14;  // This line will also cause an error (cannot redeclare const)
        console.log("Inside if:", PI); // Output: 3.14159
      }
      console.log("Outside if:", PI); // Output: 3.14159 (PI remains constant)
    }
  
  withVar();
  withLet();
  withConst();