const mount = document.querySelector('#mountain');
const lake = document.querySelector('#lake');
const sea = document.querySelector('#sea');
const bg = document.querySelector('body');
const seattle = document.querySelector('#seattle');
const la = document.querySelector('#la');
const kc = document.querySelector('#kc');
const az = document.querySelector('#az');
const nm1 = document.querySelector('#nm1');
const nm2 = document.querySelector('#nm2');
const nm3 = document.querySelector('#nm3');
const co = document.querySelector('#co');
const map = document.querySelector('#map');

function reset_bg(){
	bg.style.background = 'linear-gradient(171deg, rgba(179,25,66,1) 0%, rgba(255,255,255,1) 50%, rgba(10,49,97,1) 100%)';
	seattle.style.display = 'initial';
	la.style.display = 'initial';
	kc.style.display = 'initial';
	mount.style.display = 'initial';
	lake.style.display = 'initial';
	sea.style.display = 'initial';
	az.style.display = 'initial';
	nm1.style.display = 'initial';
	nm2.style.display = 'initial';
	nm3.style.display = 'initial';
	co.style.display = 'initial';
	map.style.display = 'initial';
}

function hideIcon(){
	map.style.display = 'None';
	seattle.style.display = 'None';
	la.style.display = 'None';
	kc.style.display = 'None';
	mount.style.display = 'None';
	lake.style.display = 'None';
	sea.style.display = 'None';
	az.style.display = 'None';
	nm1.style.display = 'None';
	nm2.style.display = 'None';
	nm3.style.display = 'None';
	co.style.display = 'None';
	map.style.animation = 'none';
}

function popMount(){
	//console.log('show image');
	hideIcon();
	bg.style.background = 'url(img/mount.jpg) no-repeat';
	bg.style.backgroundSize = 'cover';
}

function popLake(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/lake.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popSea(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/sea.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popAZ(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/az.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popNM1(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/nm1.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popNM2(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/nm2.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popNM3(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/nm3.jpg)';
	bg.style.backgroundSize = 'cover';
}

function popCO(){
	//console.log('show image');
	hideIcon();
	bg.style.backgroundImage = 'url(img/co.jpg)';
	bg.style.backgroundSize = 'cover';
}

mount.addEventListener('mouseover',popMount);
mount.addEventListener('mouseout',reset_bg);

lake.addEventListener('mouseover',popLake);
lake.addEventListener('mouseout',reset_bg);

sea.addEventListener('mouseover',popSea);
sea.addEventListener('mouseout',reset_bg);

az.addEventListener('mouseover',popAZ);
az.addEventListener('mouseout',reset_bg);

nm1.addEventListener('mouseover',popNM1);
nm1.addEventListener('mouseout',reset_bg);

nm2.addEventListener('mouseover',popNM2);
nm2.addEventListener('mouseout',reset_bg);

nm3.addEventListener('mouseover',popNM3);
nm3.addEventListener('mouseout',reset_bg);

co.addEventListener('mouseover',popCO);
co.addEventListener('mouseout',reset_bg);
