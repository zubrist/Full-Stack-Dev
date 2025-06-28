function creatGreeting(greeting)
{
    function greet(name){
        console.log(greeting, name)
    }
    return greet
}

function getName(){
    return document.getElementById('name').value
}
let g1= creatGreeting('Good morning')
let g2= creatGreeting('Good Evenig ')
