
// Abstract equality (==)
// Strict Equality  (===)

console.log(1=='1');//true
console.log(1 === '1');//false

console.log(0=='');// true because number('') == 0

console.log('false'==false); // Number(false)==0 and Number('false')=NaN  so it returns false

console.log(''==false);// true , number('') == 0 and number(false)==0

console.log([1,2]==[1,2]);//false. array is object in js and both have same value but different object