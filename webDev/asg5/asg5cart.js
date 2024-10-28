const eggPrice = 4;
const shrimpPrice = 5;
const pickUpPrice = 0;
const deliveryPrice = 2;
const emailRegExp = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

var quantEgg = document.getElementById("eggQuant");
var quantShrimp = document.getElementById("shrimpQuant");
var pickUp = document.getElementById("pickUp");
var delivery= document.getElementById("delivery");
var shipPrice = document.getElementById("shipPrice");
var total = document.getElementById("total");
var obj = document.forms[1];
var currDate = new Date();
var year = currDate.getUTCFullYear();
var month = currDate.getUTCMonth() + 1;
var date = currDate.getUTCDate();

quantEgg.addEventListener("change", changeF1);
quantEgg.addEventListener("change", calcTotal);
quantShrimp.addEventListener("change", changeF2);
quantShrimp.addEventListener("change", calcTotal);
pickUp.addEventListener("change", updateShipping);
pickUp.addEventListener("change", calcTotal);
delivery.addEventListener("change", updateShipping);
delivery.addEventListener("change", calcTotal);

function changeF1()
{
	let subtotal = quantEgg.value * eggPrice;
	document.getElementById("subEgg").value = subtotal;
}

function changeF2()
{
	let subtotal = quantShrimp.value * shrimpPrice;
	document.getElementById("subS").value = subtotal;
}

function updateShipping()
{
	if (pickUp.checked)
	{
		shipPrice.value = pickUpPrice;
	}
	else if (delivery.checked)
	{
		shipPrice.value = deliveryPrice;
	}
}

function calcTotal()
{
	let subShrimp = document.getElementById("subS").value;
	let subEgg = document.getElementById("subEgg").value;
	total.value = parseInt(subShrimp) + parseInt(subEgg) + parseInt(shipPrice.value)
}

function chooseCard()
{
	visa = document.getElementById("visa");
	mastercard = document.getElementById("mastercard");
	amex = document.getElementById("amex");
	if (visa.checked || mastercard.checked || amex.checked)
	{
		return true;
	}
	else
	{
		return false;
	}
}

obj.addEventListener("submit", function(e)
{
	e.preventDefault();
	let len = obj.elements.length;
	let text =  "<h2> Thanks for your purchase today and here is your receipt: </h2>";
	text += "<div id='rcpt'><h3 class='receipt'>Item(s) purchased: </h3>";
	text += "<h3 class='receipt'>" + parseInt(quantEgg.value) + " egg pork rice roll(s) and " + parseInt(quantShrimp.value) + " shrimp rice roll(s). <h3>";
	text += "<h3 class='receipt'> Your Total is: $" + parseInt(total.value) + "</h3>";
	text += "<h3 class='receipt'> Date: " + parseInt(year) + "/" + parseInt(month) + "/" + parseInt(date) + "</h3>";
	
	for (let i=0; i < len -2; i++)
	{
		if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
		{
			alert("Make sure to input " + obj.elements[i].name);
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i == 1) && (!emailRegExp.test(obj.elements[i].value)))
		{
			console.log(obj.elements[i].value);
			console.log(emailRegExp.test(obj.elements[i]));
			alert("Please double check the formatting of your email address. ");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i == 4 ) && (obj.elements[i].value.length != 5))
		{
			alert("Zipcode must be 5-digit!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor="red";
			return;
		}
		else if (chooseCard()!=true)
		{
			alert("Choose your credit card type!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor="red";
			return;
		}
		else if ((i == 8) && obj.elements[i].value.length!=16)
		{
			alert("Check the credit card number you enter!");
			obj.elements[i].focus();
			obj.elements[i].select();
			obj.elements[i].style.backgroundColor="red";
			return;
		}
		else if (i<5)
		{
			text += "<h3 class='receipt'>";
			text += obj.elements[i].name;
			text += ": ";
			text += obj.elements[i].value;
			text += "</h3>";
		}
		else if ((i == 5) && obj.elements[i].checked)
		{
			text += "<h3 class='receipt'>";
			text += obj.elements[i].name;
			text += ": ";
			text += obj.elements[i].value;
			text += "</h3>";
		}
		else if ((i == 6) && obj.elements[i].checked)
		{
			text += "<h3 class='receipt'>";
			text += obj.elements[i].name;
			text += ": ";
			text += obj.elements[i].value;
			text += "</h3>";
		}
		else if ((i == 7) && obj.elements[i].checked)
		{
			text += "<h3 class='receipt'>";
			text += obj.elements[i].name;
			text += ": ";
			text += obj.elements[i].value;
			text += "</h3>";
		}
	}
	
	
	text += "<h3 class='receipt'>";
	text += document.getElementById("cardNumber").name;
	text += ": ";
	text += "xxxx-xxxx-xxxx-" + parseInt(document.getElementById("cardNumber").value%10000);
	text += "</h3></div>";
	console.log(text);
	document.open();
	document.write("<!DOCTYPE html><html><head><title>Assignment 5: Shopping Cart</title><link rel='stylesheet' href='custom.css' type='text/css'></head><body>");
	document.write("<h1 class=header>Assignment 5: Shopping Cart</h1>");
	document.write(text);
	//document.write("<a href='index.html' id='back'> Go back to main page </a>");
	document.write("</body></html>");
})
