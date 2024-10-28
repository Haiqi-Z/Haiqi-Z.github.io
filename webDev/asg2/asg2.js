function change()
{
	let textId="p1";
	let textId2="p2";
	document.getElementById(textId).style.fontSize="20pt";
	document.getElementById(textId).style.backgroundColor="white";
	document.getElementById(textId).style.fontFamily="Pacifico-Regular";
	document.getElementById(textId2).style.fontSize="20pt";
	document.getElementById(textId2).style.backgroundColor="white";
	document.getElementById(textId2).style.fontFamily="Pacifico-Regular";
}

function swapT()
{
	let textId="p1";
	let textId2="p2";
	let temp=document.getElementById(textId).textContent;
	document.getElementById(textId).textContent=document.getElementById(textId2).textContent;
	document.getElementById(textId2).textContent=temp;
}

function swapImg()
{
	let imgId="img1";
	let imgId2="img2";
	let temp=document.getElementById(imgId).src;
	document.getElementById(imgId).src=document.getElementById(imgId2).src;
	document.getElementById(imgId2).src=temp;
}