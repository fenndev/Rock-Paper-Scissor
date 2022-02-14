/* Global Variables */
let playerWins = 0;
let computerWins = 0;
let points = 0;

/* DOM Objects */

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let playerSelectionDisplay = document.querySelector(".player-selection");
let computerSelectionDisplay = document.querySelector(".computer-selection");
let resultsDisplay = document.querySelector(".results");
let pointsDisplay = document.querySelector(".point-counter");
let playAgainButton = document.querySelector(".play-again");

/* Event Listeners */

rockButton.addEventListener('click', () => {
    playRound('rock');
});
paperButton.addEventListener('click', () => {
    playRound('paper');
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});

/* Game Logic */

function playRound(userSelection) {
    let computerSelection = computerPlay();
    playerSelectionDisplay.textContent = `You chose: ${userSelection}.`
    computerSelectionDisplay.textContent = `Opponent chose: ${computerSelection}.`;
    resultsDisplay.textContent = compareSelections(userSelection, computerSelection);
    pointsDisplay.textContent = `Points: ${points}`;
    if(points == 5) {
        determineWinner();
    }
}

function computerPlay() {
    let selection = randomPick(0, 2);
    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function compareSelections(playerChoice, cpuChoice) {
    if(playerChoice == 'rock') {
        switch (cpuChoice) {
            case 'rock':
                return "It was a tie!";
            case 'paper':
                computerWins++;
                return "You lose! Paper beats Rock.";
            default:
                points++;
                return "You won! Rock beats Scissors.";
        }
    }
    else if(playerChoice == 'paper') {
        switch (cpuChoice) {
            case 'rock':
                points++;
                return "You won! Paper beats Rock.";
            case 'paper':
                return "It was a tie!";
            default:
                computerWins++;
                return "You lose! Scissors beats Paper.";
        }
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                computerWins++;
                return "You lose! Rock beats Scissors.";
            case 'paper':
                points++;
                return "You won! Scissors beats Paper.";
            default:
                return "It was a tie!";
        }
    }
}

function determineWinner() {
    if(points > computerWins) {
        playAgain(true);
        }
    else {
        playAgain(false);
    }
}

function playAgain(playerWon) {
    changeDisplay(playerWon);
    points = 0;
    computerWins = 0;
    playerSelectionDisplay.textContent = ''
    computerSelectionDisplay.textContent = '';
    resultsDisplay.textContent = '';
    pointsDisplay.textContent = '';
    console.clear();
}

function changeDisplay(playerWon) {
    if(playerWon == true) {
        resultsDisplay.textContent = "You won! Want to play again?";
    }
    else {
        resultsDisplay.textContent = "You lost! Want to play again?";
    }
}

function randomPick(limitOne, limitTwo) {
    let pickNumber = Math.floor(Math.random() * (limitTwo - limitOne + 1) + limitOne);
    return pickNumber;
}