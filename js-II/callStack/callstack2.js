

function friends(){
    console.log("Lets go to Goa");
    zubrist();

}

function zubrist(){
    console.log("let me ask for permission!");
    mom();
}
function mom(){
    console.log("i don`t know ask you dad");
    dad();
}
function dad(){
    console.log("Don`t ask me , ask your mom");
    mom();
}

friends();

// This code wil fall in infinite loooooooooooop...