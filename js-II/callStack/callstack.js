// Understanding Call Stack in javaScript


function ceo(){
    console.log("let`s make a dent in the universe");
    cto();
}
function cto(){
    console.log("let`s make a game changing product");
    vpengg();
}
function vpengg(){
    console.log("let`s make a new js framework");
    techlead();
}

function techlead(){
    console.log("let`s port Angular to Typescript ");
    developer();

}
function developer(){
    console.log("let`s copy code from StackOverflow");
}

ceo();