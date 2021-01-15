let flag = 1;
let numberOfButtons = document.querySelectorAll(".grid-item").length;
for(let index=0;index<numberOfButtons;index++){
	document.querySelectorAll(".grid-item")[index].addEventListener("click",handleClick);
}
function handleClick(){
	let box = this.id;
	let checkForEmpty = this.innerHTML;
	if(checkForEmpty == ""){
		if(flag == 1){
			this.innerHTML = "X";
			flag = 0;
		}else{
			this.innerHTML = "O";
			flag = 1;
		}
	} 
}

function resetGame(event){
	let scoreElements = document.getElementsByClassName("score");
	for(let index=0;index<scoreElements.length;index++){
		scoreElements[index].innerHTML = "0";
	}
	clearGrid();
}

function clearGrid(){
	for(let index=0;index<numberOfButtons;index++){
		document.querySelectorAll(".grid-item")[index].innerHTML = "";
	}
}