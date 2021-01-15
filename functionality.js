let numberOfButtons = document.querySelectorAll(".grid-item").length;
for(let index=0;index<numberOfButtons;index++){
	document.querySelectorAll(".grid-item")[index].addEventListener("click",handleClick);
}
function handleClick(){
	let box = this.id;
	console.log(box);
}