var button_scissors, argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
var playerWins = 0;
var computerWins = 0;

const button_rock = document.getElementById('button-rock'),
button_paper = document.getElementById('button-paper');

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		return 'kamień';
	}
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		printMessage('Wygrywasz rundę!');
		playerWins += 1;
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('Wygrywasz rundę!');
		playerWins += 1;
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz rundę!');
		playerWins += 1;
	} else if (argPlayerMove == argComputerMove) {
		printMessage('Remis rundy.');
	} else {
		printMessage('Przegrywasz rundę :(');
		computerWins += 1;
	}
	if (playerWins + computerWins == 10) {
		if (playerWins > computerWins) {
			printMessage('Wygrałeś grę!');
		} else if (playerInput < computerWins) {
			printMessage('Przegrałeś grę :(');
		} else if (playerWins == computerWins) {
			printMessage('Remis gry.')
		}
	}
	printResult(playerWins + ' - ' + computerWins);
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
	clearMessages();
	clearResult();
	console.log(argButtonName + ' został kliknięty');
	console.log('wybór ruchu gracza to: ' + playerInput);
	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
}

button_scissors = document.getElementById('button-scissors');
button_rock.addEventListener('click', function () { buttonClicked('kamień'); });
button_paper.addEventListener('click', function () { buttonClicked('papier'); });
button_scissors.addEventListener('click', function () { buttonClicked('nożyce'); });