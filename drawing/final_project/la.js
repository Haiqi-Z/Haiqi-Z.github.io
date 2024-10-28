const canvas1 = document.querySelector('#canvas1');
const context1 = canvas1.getContext("2d");
const video = document.querySelector('video');
const bg = document.querySelector('body');
const svg = document.querySelector('svg');
const canvas2 = document.querySelector('#canvas2');
const context2 = canvas2.getContext("2d");
const bglist = ['img/la2.jpg','img/la3.jpg','img/la4.jpg','img/la5.jpg','img/la6.jpg'];
const image = document.querySelector('img');
const path = new Path2D(d="m 105.20859,50.24316 c -0.59889,-0.0105 -1.24181,0.04601 -1.93444,0.17987 -5.423165,1.04751 -8.059303,10.664695 -10.240762,15.027635 -4.292496,8.585045 -8.443912,17.232473 -12.735287,25.815229 -2.949624,5.899225 -5.524,11.729136 -10.754986,16.016906 -5.693421,4.66689 -12.616108,5.43994 -19.619595,6.44913 -9.641733,1.38935 -19.277345,2.81013 -28.912737,4.23645 -5.326178,0.78842 -15.2165324,0.18205 -18.0901515,5.65181 -3.47189479,6.60845 4.8451443,11.88156 8.7970095,15.83341 6.703409,6.70346 13.454822,13.39697 20.307661,19.94976 5.047143,4.82608 10.645187,9.25751 13.467423,15.84667 3.121237,7.28728 1.63344,14.19794 0.385681,21.68442 -1.530868,9.18507 -3.161735,18.35257 -4.701798,27.53598 -0.827116,4.93214 -4.437187,14.46548 -1.35441,18.93032 5.842808,8.46227 19.282062,-2.7281 25.590095,-5.93488 7.731628,-3.93043 15.354078,-8.07377 23.061744,-12.05206 7.27173,-3.75324 14.350393,-6.95843 22.717123,-4.72473 5.29838,1.41448 9.98529,4.41381 14.80011,6.95432 7.8984,4.16758 15.81421,8.30862 23.74981,12.40453 4.24197,2.18943 10.84225,7.68238 15.8328,6.5608 8.4859,-1.90706 5.35817,-11.32207 4.27689,-17.31941 -1.87859,-10.41947 -3.6065,-20.87706 -5.33675,-31.32218 -1.04337,-6.30495 -2.63933,-12.56771 -1.04117,-18.93091 2.53222,-10.08198 11.6864,-16.99843 18.96715,-23.78061 4.12876,-3.84605 7.81397,-8.18484 12.04663,-11.91806 4.71228,-4.15631 13.79954,-10.4496 13.40887,-17.30793 -0.40067,-7.0325 -9.65185,-6.81236 -14.78563,-7.5277 -9.53004,-1.32785 -19.03783,-2.80231 -28.56809,-4.13022 -6.02799,-0.83989 -12.60668,-1.2037 -18.24285,-3.63408 -9.18756,-3.96171 -13.13193,-12.72004 -17.13411,-21.193111 -2.79109,-5.909154 -5.84298,-11.708891 -8.76562,-17.55418 -2.39961,-4.799284 -4.65866,-9.657201 -7.05813,-14.456075 -1.90069,-3.80146 -3.94027,-7.214321 -8.13248,-7.291104 z");

let width;
let height;

let pxScale = window.devicePixelRatio;
let imgScale = 8;
let scaleFactor = imgScale * pxScale;

displayHeight = () => bg.style.height = window.innerHeight + 'px';

function setup() {
	video.play();

	width = canvas1.width;
	height = canvas1.height;

	canvas1.style.width = width + 'px';
	canvas1.style.height = height + 'px';

	canvas1.width = width * pxScale;
	canvas1.height = height * pxScale;

	context1.scale(pxScale, pxScale);
}

function draw() {
	context1.drawImage(video, 0, 0, width, height);
	//console.log(width,height);
	let imageData = context1.getImageData(0, 0, width, height);
    let data = imageData.data;

    context1.clearRect(0, 0, width, height);

    for (let y = 0; y < imageData.height - 2; y++) { 
      for (let x = 0; x < imageData.width - 2; x++) { 
        let index = (x + y * imageData.width) * 4; 

        let r = data[index + 0]; 
        let g = data[index + 1]; 
        let b = data[index + 2];
        let a = data[index + 3];

        context1.fillStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;

        context1.save();
        context1.translate(x * imgScale, y * imgScale); 
        context1.scale(0.035, 0.035);
        context1.fill(path);
        context1.restore();
        /*context1.fillStyle = `rgba(${r},${g},${b},1)`;

        context1.fillText('~',(x * imgScale)/pxScale, (y * imgScale)/pxScale);*/
      }
    }

	requestAnimationFrame(draw);
}

function slideshow(){
	//console.log("Mouse over canvas1");
	randomBG = bglist[Math.floor(Math.random() * 5)];
	//console.log(randomBG);
	image.src = randomBG;
	context2.drawImage(image, 0, 0, canvas2.width, canvas2.height);
	canvas2.style.visibility = 'visible';
}

function reset_bg(){
	canvas2.style.visibility = 'hidden';
	svg.style.display = 'initial';
}

window.addEventListener('load', () => {
	displayHeight();
  setup();
  draw();
});

svg.addEventListener('mouseover',slideshow);
svg.addEventListener('mouseout',reset_bg);