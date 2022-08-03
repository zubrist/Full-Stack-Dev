function alpha(){
    return 'A'
}
function beta(){
    return 'B'
}

function area(height, width){
    console.log('height=', height, 'width=', width)
    if(typeof width == 'undefined') {
        return Math.PI*height*height

    }
    if (!height){
        return console.log('NO HEIGHT')
    }
    return height*width
}