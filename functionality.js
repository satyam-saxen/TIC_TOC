let flag = 1;
let status = false;
let running = true;
let count = 0;
let winningPosition = [];
let numberOfButtons = document.querySelectorAll(".grid-item").length;
let winningPositions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
for(let index=0;index<numberOfButtons;index++){
	document.querySelectorAll(".grid-item")[index].addEventListener("click",handleClick);
}
function handleClick(){
	let box = this.id;
	let checkForEmpty = this.innerHTML;
	if(checkForEmpty == "" && status == false){
		if(flag == 1){
			this.innerHTML = "X";
			flag = 0;
		}else{
			this.innerHTML = "O";
			flag = 1;
		}
	} 
	status = winningStatus();
	if(status == true && running == true){
		running = false;
		if(flag == false){
			let number = document.getElementById("p1").innerHTML;
			number++;
			document.getElementById("p1").innerHTML = number;
			document.getElementById("play").innerHTML = "Player 1 won!";
		}else{
			let number = document.getElementById("p2").innerHTML;
			number++;
			document.getElementById("p2").innerHTML = number;
			document.getElementById("play").innerHTML = "Player 2 won!";
		}
		document.getElementById(winningPosition[0].id).style.color = "black";
		document.getElementById(winningPosition[1].id).style.color = "black";
		document.getElementById(winningPosition[2].id).style.color = "black";
	}else if(status == false && running == true && count==9){
		running = false;
		let number = document.getElementById("tie").innerHTML;
		number++;
		document.getElementById("p2").innerHTML = number;
		document.getElementById("play").innerHTML = "Whoa , It's tie";
	}
}



function winningStatus(){
	count++;
	var result = false;
	for(let index=0;index<winningPositions.length;index++){
		winningPosition[0] = document.getElementById(winningPositions[index][0]);
		winningPosition[1] = document.getElementById(winningPositions[index][1]);
		winningPosition[2] = document.getElementById(winningPositions[index][2]);

		if(winningPosition[0].innerHTML === winningPosition[1].innerHTML && winningPosition[1].innerHTML === winningPosition[2].innerHTML && winningPosition[0].innerHTML != ""){
			result = true;
			break;
		}
	}
	return result;
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
		document.querySelectorAll(".grid-item")[index].style.color = "grey";
	}
	document.getElementById("play").innerHTML = "Let's play!!";
	resetCommands();
}

function resetCommands(){
	running = true;
	flag = 1;
	status = false;
	count=0;
}