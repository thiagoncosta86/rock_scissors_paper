let scorePlayer = 0;
let scoreComputer = 0;
let stillPlaying = true;

function computerPlay() {
	let computerChoice = ["Rock", "Paper", "Scissors"]; 
	return computerChoice[randomNumber(computerChoice.length)] ;
}

function randomNumber(a) {
	return Math.floor(Math.random()*a);
}

function captalize (a) {
	return a.slice(0,1).toUpperCase() + a.slice(1).toLowerCase();
}

function someOneWins () {
	let messageText = "won the Game! Game Over! To play again, please refresh.";
	 if(scorePlayer>=5){
	 	stillPlaying = !stillPlaying; 
	 	return "You " + messageText;
	 } 
	 if(scoreComputer>=5){
	 	stillPlaying = !stillPlaying; 
	 	return "The Computer " + messageText;
	 }
	 if(scorePlayer<5 && scoreComputer<5) return "";
}

function gameInfo(resultText,scoreText){
	let endGameText = someOneWins();
	let scoreTextDispay = scoreText;
	const results = document.querySelector('.results');
	const score = document.querySelector('.score');
	
	results.textContent = resultText;
	score.textContent = scoreText;

		
	if (endGameText !== '') {
		const endGame = document.querySelector('.end_game');
		endGame.textContent = endGameText;
	}
}

function playRound(playerSelection, computerSelection) {
	if(stillPlaying){
		let playerWin = false; 
		let resultText = '';
		let scoreText = '';
		let endGameText = '';
		playerSelection = captalize(playerSelection);
		computerSelection = captalize(computerSelection);
		playerWin = ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper"))

		if (playerWin == true) {
			resultText = `You win! ${playerSelection} beats ${computerSelection}.`;
			scorePlayer +=1;
		}
		else if (playerSelection == computerSelection){
			resultText = `It\'s a draw! ${computerSelection} can\'t loose or beat ${playerSelection}.`;
		}
		else {
			resultText = `You loose! ${computerSelection} beats ${playerSelection}.`;
			scoreComputer +=1;
		}
		scoreText = `Your Score: ${scorePlayer}	Computer Score: ${scoreComputer}`;
		
		gameInfo(resultText,scoreText);
		return playerWin;
	}
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
 button.addEventListener('click', (e) => {
 	let playerSelection = button.id.toString();
    playRound(playerSelection,computerPlay());
  });
});

/*
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
*/
