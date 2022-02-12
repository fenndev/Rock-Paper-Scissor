/* Global Variables */
let playerWins = 0;
let computerWins = 0;
let gameRuns = 0;

/* DOM Objects */

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

/* Event Listeners */

/* Game Logic */

game();

function game() {
    determineWinner();
}

function playRound() {
    let userSelection = userPlay();
    console.log(`You chose ${userSelection}!`);
    let computerSelection = computerPlay();
    console.log(`Your opponent chose ${computerSelection}!`);
    alert(compareSelections(userSelection, computerSelection));
    gameRuns++;
}

function userPlay() {
    let userChoice = selectionPrompt();
    return userChoice;
}

function selectionPrompt() {
    let input = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if(input == "rock" || input == "paper" || input == "scissors") {
        return input;
    }
    else {
        alert("Incorrect selection. Please try again.");
        selectionPrompt();
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
                playerWins++;
                return "You won! Rock beats Scissors.";
        }
    }
    else if(playerChoice == 'paper') {
        switch (cpuChoice) {
            case 'rock':
                playerWins++;
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
                return "You lose! Rock beats Paper.";
            case 'paper':
                playerWins++;
                return "You won! Scissors beats Paper.";
            default:
                return "It was a tie!";
        }
    }
}

function determineWinner() {
    if(playerWins > computerWins) {
        playAgain(true);
        }
    else {
        playAgain(false);
    }
}

function playAgain(playerWon) {
    let playAgain;
    if(playerWon == true) {
        playAgain = confirm("You won! Want to play again?");
    }
    else {
        playAgain = confirm("You lost! Want to play again?");
    }

    if(playAgain) {
        playerWins = 0;
        computerWins = 0;
        gameRuns++;
        console.clear();
        game();
    }
}

function randomPick(limitOne, limitTwo) {
    let pickNumber = Math.floor(Math.random() * (limitTwo - limitOne + 1) + limitOne);
    return pickNumber;
}