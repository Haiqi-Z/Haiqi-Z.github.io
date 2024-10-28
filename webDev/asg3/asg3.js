function randArray(){
	let prize = ["Bloom Chicken", "Me Chicken Rice","Hello Saigon","Fields Good Chicken","Song E Napule"]
	let prizeImg = ["images/bloom.jpeg","images/meChicken.jpeg","images/saigon.jpeg","images/fieldsChicken.png","images/songE.jpeg"]
	let rand = Math.floor (Math.random()* prize.length);
	let output="";
	//for (i=0; i<prize.length; i++)
	//{
	//output += "<p>" + "Your free lunch " + String(i+1) + " is " + prize[i];
	//console.log (i , prize[i], output, rand);
	//}
	let result= "<h2 class='addSpace'> Congratulations! You won a free lunch at " + prize[rand] + "</h2>";
	document.open();
	document.write("<!DOCTYPE html><html><head><title>Assignment 3: Free lunch generator</title><link rel='stylesheet' href='custom.css' type='text/css'></head><body>");
	document.write("<h1 class=header>Assignment 3: Free lunch generator</h1>");
	document.write(result);
	document.write("<img src='" + prizeImg[rand] + "' id=lunch>");
	document.write("<a href='index.html' id='back'> go back to main page </a>");
	document.write("</body></html>");
}

window.onload = randImage;
function randImage(){
	let imgArray = ["images/starWars1.jpg","images/starWars2.jpeg","images/starWars3.jpeg","images/starWars4.jpeg","images/starWars5.jpeg","images/starWars6.jpeg","images/starWars7.jpeg","images/starWars8.jpeg"]
	let rand = Math.floor (Math.random()* imgArray.length);
	let obj1 = document.images[0];
	obj1.src = imgArray[rand];
}

var slideImg = ["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg","images/slide4.jpg","images/slide5.jpg","images/slide6.jpg"];
var index = 0;
var mySlide;

function start(){
	if (index >= slideImg.length)
	{
		index = 0;
	}
	document.images[1].src= slideImg[index];
	//document.images[1].style.width="50%";
	
	index++; 

	mySlide = setTimeout(start,1000);
}

function stop(){
	clearTimeout(mySlide);
}