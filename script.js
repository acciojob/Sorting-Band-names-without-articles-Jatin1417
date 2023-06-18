//your code here
let bands = ["red","blue","pink","yellow","green"];
bands.sort();
let mainUl = document.getElementById("band");

bands.foreach(element => {
	let child = document.createElement("li");
	child.innerText = element;
	mainUl.appendchild(li);
})




