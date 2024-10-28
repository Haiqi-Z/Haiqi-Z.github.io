const body = document.querySelector('body');
const img_night = document.querySelector('#night');
const img_pink = document.querySelector('#pink');
const img_green = document.querySelector('#green');
const img_m = document.querySelector('#morning');
const img_coney = document.querySelector('#coney');

displayHeight = () => body.style.height = window.innerHeight + "px";

function coordinates(event){
	let xPos = event.clientX;
	let yPos = event.clientY;

	setFilter(xPos,yPos);
}

function setFilter(xPos,yPos){
	let hue = (xPos / window.innerWidth) * 100;
	let lightness = (yPos / window.innerHeight) * 100 + 5;

	if (lightness <= 30){
		lightness = 10
		img_pink.style.visibility = "hidden";
		img_coney.style.visibility = "hidden";
		img_night.style.visibility = "visible";
		img_m.style.visibility = "visible";
		img_green.style.visibility = "hidden";
		body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
	}
	else if (hue <= 53){
		hue = 53;
		img_m.style.visibility = "visible";
		img_pink.style.visibility = "visible";
		img_coney.style.visibility = "visible";
		img_m.style.visibility = "visible";
		img_night.style.visibility = "hidden";
		body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
	}
	else if (hue <= 140){
		hue = 90;
		img_green.style.visibility = "visible";
		img_coney.style.visibility = "hidden";
		img_night.style.visibility = "hidden";
		img_pink.style.visibility = "hidden";
		img_m.style.visibility = "hidden";
		body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
	}
}

window.addEventListener('load',function(){
	displayHeight();
});

window.addEventListener('resize',function(){
	displayHeight();
});

window.addEventListener("pointermove",coordinates);
window.addEventListener("pointerdown",coordinates);