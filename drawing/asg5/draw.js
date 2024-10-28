const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const image = document.querySelector('img');

let width;
let height;
let pxScale = window.devicePixelRatio;
const imgScale = 20;

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  canvas.width = width * pxScale;
  canvas.height = height * pxScale;
  context.scale(pxScale, pxScale);
}

const pixelColors = [];

function sampleColors() {
  context.drawImage(image, 0, 0, 45, 30);

  let imageData = context.getImageData(0, 0, 45 * pxScale, 30  * pxScale);
  let data = imageData.data;

  context.clearRect(0, 0, width, height); 

  for (let channel = 0; channel < data.length; channel += 4) {
    let color = `rgba(${data[channel]}, ${data[channel + 1]}, ${data[channel + 2]}, ${data[channel + 3]})`;
    pixelColors.push(color);
  }
}

function drawWave(w = 7){
  context.strokeStyle = pixelColors[Math.floor( Math.random() * pixelColors.length)];
  for (i = 0; i < w; i++){
    context.beginPath();
    if (i % 2 != 0){
      context.ellipse(0,5/8 * height,1/16 * width,1/16 * width,0,Math.PI,0);
    }
    else{
      context.ellipse(0,5/8 * height,1/16 * width,1/16 * width,0,0,Math.PI);
    }
    context.stroke();
    context.translate(1/8 * width, 0);
    context.closePath();
  }
}

function draw() {
  context.textBaseline = 'bottom';
  context.textAlign = 'right';
  context.font = '14px sans-serif';

  if (width >= height){
    context.drawImage(image,0,0,width/imgScale, width/imgScale * (image.height / image.width));
  }
  else{
    context.drawImage(image,0,0,height/imgScale * (image.width / image.height), height/imgScale);
  }

  let imageData = context.getImageData(0,0,canvas.width/imgScale, canvas.height/imgScale);
  let data = imageData.data;

  context.clearRect(0,0,width,height);
  context.translate(0.5/100 * width, 2/100 * height);
  context.save();

  for (let y = 0;y < imageData.height; y++){
    for (let x = 0;x < imageData.width; x++){
      let index = (x + y*imageData.width) * 4; 

      let r = data[index]; 
      let g = data[index + 1]; 
      let b = data[index + 2]; 
      let a = data[index + 3]; 

      context.fillStyle = `rgba(${r},${g},${b},1)`;

      context.fillText('C',(x * imgScale)/pxScale, (y * imgScale)/pxScale);
      context.fillText('A',(x * imgScale)/pxScale, (y * imgScale)/pxScale);
      context.fillText('~',(x * imgScale)/pxScale, (y * imgScale)/pxScale);
    }
  }

  context.fillStyle = pixelColors[Math.floor( Math.random() * pixelColors.length)];
  context.save();
  drawWave(9);
  context.restore();
  context.translate(-1/16 * width, -1/6 * height);
  drawWave(9);
}

window.addEventListener('load', () => {
  setup();
  sampleColors();
  draw();
});

window.addEventListener('resize', () => {
  setup();
  draw();
});