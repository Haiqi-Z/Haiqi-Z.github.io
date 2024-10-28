const body = document.querySelector('body');
const book = document.querySelector('.book');
const cover = document.querySelectorAll(".cover")
const leftP = document.querySelector('#left');

displayHeight = () => book.style.height = window.innerHeight + "px";
displayWidth = () => book.style.width = window.innerWidth + "px";

flip = () => {
    let pageDimensions = body.getBoundingClientRect();
    let scrollPercentageV = Math.abs(pageDimensions.top) / (pageDimensions.height - window.innerHeight); 
    //console.log(pageDimensions.left,pageDimensions.width,window.innerWidth)
    let scrollPercentageH = Math.abs(pageDimensions.left) / (pageDimensions.width - window.innerWidth); 
    console.log(scrollPercentageV,scrollPercentageH);
    let rotationY = scrollPercentageV * 180;
    leftP.style.transform = `rotateX(45deg) rotateY(${rotationY}deg) translateZ(5px)`;
    book.style.perspective = scrollPercentageH * 5000 + "px";
}

window.addEventListener('load',function(){
    displayHeight();
    displayWidth();
});

window.addEventListener('resize',function(){
    displayHeight();
    displayWidth();
});

window.addEventListener('scroll',flip);