const video = document.querySelector('#gif');
const img = document.querySelector('#img1');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;
let imgScale = 10;

let pxScale = window.devicePixelRatio;
let scaleFactor = imgScale * pxScale;

//let path = new Path2D('m 91.577065,214.15999 c -15.074951,-3.3244 -27.646572,-13.18306 -34.048912,-26.70121 -3.823649,-8.07342 -5.051005,-13.4803 -5.000046,-22.02675 0.06028,-10.109 2.120528,-17.53343 7.756569,-27.95194 3.172808,-5.86508 18.65712,-30.09879 26.797579,-41.939478 3.11934,-4.537218 7.40593,-10.914211 9.52578,-14.171099 2.11985,-3.256889 4.321235,-6.08586 4.891955,-6.286633 1.58946,-0.559118 3.05388,0.153657 4.11897,2.00513 0.53131,0.923534 4.22912,6.485409 8.21736,12.359692 26.80589,39.482418 34.53972,52.677048 37.38251,63.778008 1.74802,6.82601 1.74341,17.62049 -0.0122,24.41263 -4.92071,19.05673 -19.4427,32.84694 -38.50761,36.56708 -6.10781,1.19185 -15.605755,1.17139 -21.123745,-0.0456 z m 23.412865,-2.10544 c 6.96764,-1.78272 15.56517,-6.47835 20.65644,-11.28182 15.9612,-15.05876 19.85298,-36.76478 10.27588,-57.31206 -3.40815,-7.31195 -14.19535,-24.64509 -27.91741,-44.858237 -1.70909,-2.517538 -5.71759,-8.42235 -8.9078,-13.121786 -3.1902,-4.699435 -6.17127,-8.611998 -6.62458,-8.694531 -0.45752,-0.08314 -2.18565,1.953203 -3.884235,4.577364 -1.683,2.600114 -8.30957,12.55358 -14.7257,22.11882 -19.089543,28.45893 -25.028083,38.70847 -27.9878,48.30518 -2.537181,8.22662 -2.050028,20.90469 -0.269541,26.75096 5.017636,16.47568 17.247949,28.64476 33.478251,33.31065 7.86779,2.26182 17.568495,2.33873 25.906495,0.20542 z');

function setup() {
    //video.play();

    width = canvas.width;
    height = canvas.height;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = width * pxScale;
    canvas.height = height * pxScale;

    context.scale(pxScale, pxScale);
}

//context.translate(10,0);

function draw() {
	context.textBaseline = 'bottom';
  	context.textAlign = 'right';
  	context.font = '14px sans-serif';

  	if (width >= height){
    	context.drawImage(img,0,0,width/imgScale, width/imgScale * (img.height / img.width));
  	}
  	else{
    	context.drawImage(img,0,0,height/imgScale * (img.width / img.height), height/imgScale);
  	}
	let imageData = context.getImageData(0, 0, width / imgScale, height / imgScale);
	let data = imageData.data;

	context.clearRect(0, 0, width, height);

	for (let y = 0; y < imageData.height; y++) {
	  for (let x = 0; x < imageData.width; x++) { 
	    let index = (x + y * imageData.width) * 4;
	    let hiddenX = Math.floor(Math.random() * imageData.width);
	    let hiddenY = Math.floor(Math.random() * imageData.height);

	    if (x != hiddenX & y != hiddenY){
		    var r = data[index]; 
		    var g = data[index + 1]; 
		    var b = data[index + 2]; 
		    var a = data[index + 3]; 
	    }
	    else{
	    	var r = 0; 
		    var g = 0; 
		    var b = 0; 
		    var a = 1; 
	    }
	    

	    context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;

	    context.fillText('~',(x * imgScale)/pxScale, (y * imgScale)/pxScale); 
  	 	}
	}


	/*context.drawImage(video, 0, 0, 30, 45);
	//console.log(imageData.width);

	let imageData = context.getImageData(0, 0, width / imgScale, height / imgScale);
	let data = imageData.data;
	
	context.clearRect(0, 0, width, height);

	for (let y = 0; y < imageData.height; y++) {
	  for (let x = 0; x < imageData.width; x++) { 
	    let index = (x + y * imageData.width) * 4;
	   
	    let r = data[index]; 
	    let g = data[index + 1]; 
	    let b = data[index + 2]; 
	    let a = data[index + 3]; 

	    context.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;

	    context.save();
        context.translate(x * imgScale, y * imgScale);
        context.scale(0.1, 0.1); 
        context.fill(path);
        context.restore();
  	 	}
	}
	*/

	requestAnimationFrame(draw);
}

window.addEventListener('load', () => {
	setup();
	window.requestAnimationFrame(draw);
});