const canvas1 = document.querySelector('#c1');
const canvas2 = document.querySelector('#c2');
const context1 = canvas1.getContext("2d");
const context2 = canvas2.getContext("2d");
const text = document.querySelector('p');

displayError = () => text.textContent = 'Unable to determine ^vix quote.';

accessData = async() =>{
	let url = `https://yh-finance8.p.rapidapi.com/stock/get_current_change?symbol=%5EVIX&region=US`;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7b9ba38a64msh003915e43903593p1afb0ejsn61cf385ac8e9',
			'X-RapidAPI-Host': 'yh-finance8.p.rapidapi.com'
		}
	};

	let response = await fetch(url,options);

	if (response.ok){
		let json = await response.json();
		console.log(json);
		console.log(json.value);
		draw1(json.value);
	}
	else{
		console.log(response.status);
		displayError();
	}
}

function draw1(value){
	let multiple = 5;
	let vol = Math.ceil(value) + 2;
	console.log(vol);
	let width1 = canvas1.width;
	let height1 = canvas1.height/2;
	context2.beginPath();
	context2.strokeStyle = 'green';
	for (i = 0; i < width1; i++){
		let direction = Math.random();
		if (direction >= 0.5){
			direction = 1;
		}
		else{
			direction = -1;
		}
		let move = Math.floor(Math.random()*multiple*direction);
		height1 += move;
		if (height1 >= canvas1.height | height1 <= 0){
			height1 = canvas1.height / 2;
		}
		context1.lineTo(i+1,height1);
		context2.lineTo(i+1,height1);
	}
	context1.strokeStyle = 'green';
	context1.lineWidth = 1;
	context1.stroke();

	context2.lineWidth = 1;
	context2.stroke();

	context2.beginPath();
	for (j = 0; j < vol; j++){
		let width1 = canvas1.width;
		let height1 = canvas1.height/2;
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		context2.strokeStyle = `rgba(${r},${g},${b},0.5)`;
		context2.lineWidth = vol;
		context2.moveTo(0, height1);
		for (i = 0; i < width1; i++){
			let direction = Math.random();
			if (direction >= 0.5){
				direction = 1;
			}
			else{
				direction = -1;
			}
			let move = Math.floor(Math.random()*multiple*direction*vol);
			height1 += move;
			if (height1 >= canvas1.height | height1 <= 0){
				height1 = canvas1.height / 2;
			}
			context2.lineTo(i+1,height1);
		}
		context2.stroke();
	}
}

window.addEventListener('load',() => {
	accessData();
});