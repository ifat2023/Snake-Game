let Square = document.getElementById("Square");


let context = Square.getContext("2d")

let window_height= window.innerHeight;
let window_width = window.innerWidth;

Square.width = 500; 
Square.height = 500;


let speed = 7;

let block = 30;
let blockSize = Square.width / block -6;

let headSnake = 10;
let bodySnake =10;

let foodx =5
let foody = 5



function draw() {
    drawSnake()
    setTimeout(draw,1000/speed);
    drawFood()
    
}



function drawSnake(){
    context.fillStyle = 'black';
context.fillRect(headSnake * block, bodySnake  * block, blockSize, blockSize);
}

function drawFood(){
    context.fillStyle = 'red';
context.fillRect(foodx * block,  foody  * block, blockSize, blockSize);
}


draw();