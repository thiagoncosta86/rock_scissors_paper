function computerPlay() {
	let computerChoice = ["Rock", "Paper", "Scissors"]; 
	return computerChoice[randomNumber(computerChoice.length)] ;
}

function randomNumber(a) {
	return Math.floor(Math.random()*a);
}

function captalize (a) {
	return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	let playerWin = false; 
	playerSelection = captalize(playerSelection);
	computerSelection = captalize(computerSelection);
	playerWin = ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper"))
	
	/*
	if (playerSelection == "Rock" && computerSelection == "Scissors") {
		playerWin = true;
	}

	if (playerSelection == "Paper" && computerSelection == "Rock") {
		playerWin = true;
	}
	
	if (playerSelection == "Scissors" && computerSelection == "Paper") {
		playerWin = true;
	}
	*/
	if (playerWin == true) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
	}
	else if (playerSelection == computerSelection){
		console.log(`It\'s a draw! ${computerSelection} can\'t loose or beat ${playerSelection}.`);
	}
	else {
		console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);
	}

	return playerWin;
}

function game() {
	let rounds = 1;
	let score = 0;
	let playerPlay = "";
	console.log("Welcome to the \"Rock-Scissors-Paper\" game!");
	while (rounds <= 5) {
		playerPlay = prompt(`Round ${rounds}\nPlease choose Rock, Scissors or Paper.`);
		if(playRound(playerPlay,computerPlay())) {
			score++;
		}
		rounds++;
	}
	if (score>=3) {
		console.log(`Congratulations! You won!`);
	} else {
		console.log(`Sorry! You lose!`);
	}
	console.log(`Your SCORE: ${score}`);
}
