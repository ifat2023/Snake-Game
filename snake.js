let Square = document.getElementById("Square");


let context = Square.getContext("2d")

let window_height= window.innerHeight;
let window_width = window.innerWidth;

Square.width =  300; 
Square.height = 300;


let speed = 7;

let block = 25;
let blockSize = Square.width / block -5;

let headSnake = 5;
let bodySnake =5;



function draw() {
    drawSnake()
    setTimeout(draw,1000/speed);
}



function drawSnake(){
    context.fillStyle = 'black';
context.fillRect(headSnake * block, bodySnake  * block, blockSize, blockSize);
}

draw();