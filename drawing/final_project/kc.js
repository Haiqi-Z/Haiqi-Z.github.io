const bglist = ['img/guanyin.jpg','img/interior.jpg','img/beiwei.jpg','img/exterior.jpg','img/jiagu.jpg'];
const svg = document.querySelector('svg');
const bg = document.querySelector('body');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

displayHeight = () => bg.style.height = window.innerHeight + 'px';

function slideshow(){
	//console.log("Mouse over canvas");
	randomBG = bglist[Math.floor(Math.random() * 5)];
	//console.log(randomBG);
	bg.style.backgroundImage = `url(${randomBG})`;
	svg.style.display = 'None';
	left.style.display = 'None';
	right.style.display = 'None';
	left.style.animation = 'none';
	//canvas.style.backgroundColor = 'rgba(96,381,200,0)';
	//console.log(canvas.style.backgroundColor.value);
}

function reset_bg(){
	bg.style.backgroundImage = 'url(img/kc1.jpg)';
	svg.style.display = 'initial';
	left.style.display = 'initial';
	right.style.display = 'initial';
}

window.addEventListener('load', displayHeight);
window.addEventListener('resize', displayHeight);

svg.addEventListener('mouseover',slideshow);
svg.addEventListener('mouseout',reset_bg);