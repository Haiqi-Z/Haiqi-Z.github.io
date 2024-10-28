var btn = document.getElementById("nodeChange");
var container = document.getElementsByTagName("ul");

btn.addEventListener("click",addNChange);

function addNChange()
{
	var node1 = document.createElement("li");
	var text1 = document.createTextNode("Products");
	node1.appendChild(text1);
	container[0].appendChild(node1);

	var node2 = document.createElement("li");
	var text2 = document.createTextNode("Contact");
	node2.appendChild(text2);
	container[0].appendChild(node2);

	let allContent = document.querySelectorAll("li");
	//let chosen = [0,4,5];

	for (i = 0; i < allContent.length; i++) 
	{            

  		allContent[i].className = 'new';
  
	}
}