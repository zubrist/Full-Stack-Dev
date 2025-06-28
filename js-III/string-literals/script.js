
// He said,"this is awesome!"

let s1 = 'he said,"this is awesome"'

let s2= " he said,  \"this is awesome\"";

let s3 ="he said,'this is awesome'";

let s4 = `he said , "this is awesome" `;

console.log(s1);//output: he said,"this is awesome"

console.log(s2);//output : he said, "this is awesome"

console.log(s3);// output: he said,  "this is awesome" (not recommended) 
console.log(s4); //output: he said,  "this is awesome"

//multi-line
let s5= "This is a multi line string It has \n new lines" ;
console.log(s5);
let multiLineString =`This is a 
                        multiline string`; // no need of \n

console.log(multiLineString);

let name='zubi'
let g= 'Good Morning' + name //Good Morningzubi

console.log(g);

let g2 =`Good Morning ${name}` //Good Morning zubi
console.log(g2);

let math=`2+2=${2+2}`;
console.log(math);//2+2=4 // backtick is useful this way
