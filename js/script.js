var argButtonName, button_paper, button_rock, button_scissors, buttonTest, argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

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
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		printMessage('Wygrywasz!');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('Remis');
	} else {
		printMessage('Przegrywasz :(');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
	console.log('wybór ruchu gracza to: ' + playerInput);
	playerMove = argButtonName;
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
	clearMessages();
	console.log(argButtonName + ' został kliknięty');
}

buttonTest = document.getElementById('button-test');
button_rock = document.getElementById('button-rock');
button_paper = document.getElementById('button-paper');
button_scissors = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function () { buttonClicked('Guzik TEST'); });
button_rock.addEventListener('click', function () { buttonClicked('Guzik KAMIEŃ'); });
button_paper.addEventListener('click', function () { buttonClicked('Guzik PAPIER'); });
button_scissors.addEventListener('click', function () { buttonClicked('Guzik NOŻYCE'); });