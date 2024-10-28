const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");
const bglist = ['img/bg2.jpg','img/bg3.jpg','img/bg4.jpg','img/bg5.jpg','img/bg6.jpg'];
const bg = document.querySelector('body');
const svg = document.querySelector('svg');

var scale = window.devicePixelRatio;
canvas.width = canvas.width * scale;
canvas.height = canvas.height * scale;

var xPos = 280;
var yPos = 0;
var boxSize = 40;

var pixelShift = 1;

var fps = 60; 
var previousTime = performance.now(); 

var frameInterval = 1000 / fps; 
var deltaTimeMultiplier = 1; 
var delta_time = 0;

var currentDate = new Date();
var hours = currentDate.getHours();
console.log(hours);

displayHeight = () => bg.style.height = window.innerHeight + 'px';

function movingRect(currentTime){
	if (hours <= 18){
		context.fillStyle = 'rgb(255, 255, 255)';
	}
	else{
		context.fillStyle = 'rgb(0, 0, 0)';
	}
	context.clearRect(0,0, canvas.width, canvas.height);
	deltaTime = currentTime - previousTime;
    deltaTimeMultiplier = deltaTime / frameInterval;

    yPos += pixelShift * deltaTimeMultiplier;

    previousTime = currentTime; 

    context.fillRect(xPos, yPos, boxSize, boxSize);

    if (yPos >= canvas.height - boxSize) {
      yPos = canvas.height - boxSize - 10; 
      pixelShift *= -1; 
    } else if (yPos <= 0) {
      yPos = 10; 
      pixelShift *= -1; 
    }

    requestAnimationFrame(movingRect);
}

function slideshow(){
	//console.log("Mouse over canvas");
	randomBG = bglist[Math.floor(Math.random() * 5)];
	//console.log(randomBG);
	bg.style.backgroundImage = `url(${randomBG})`;
	svg.style.backgroundColor = 'rgba(96,381,200,0)';
	canvas.style.backgroundColor = 'rgba(96,381,200,0)';
	console.log(canvas.style.backgroundColor.value);
}

window.addEventListener('load',() => {
	window.requestAnimationFrame(movingRect);
	displayHeight();
});

window.addEventListener('resize',() => {
	window.requestAnimationFrame(movingRect);
	displayHeight();
});

canvas.addEventListener('mouseover',slideshow);