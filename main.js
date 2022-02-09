/*
Functions:

game(): Stores variables playerWins and computerWins. Calls playRound() 5 times, and then calls determineWinner()
passing both playerWins and computerWins in as variables.

playRound(): calls userPlay() and then computerPlay(), storing the returned
results as variables. Then calls compareSelections(), passing the variables in as parameters.

userPlay(): the user is prompted for an input and
inputs an option (either rock, paper, or scissors, case insensitive) 
into the console. The selection is returned.

computerPlay(): the computer randomly chooses an option (either rock, paper, or scissors). 
The selection is returned.

compareSelections(selectionOne, selectionTwo): the playerSelection variable is compared to computerSelection using
the following logic:

IF the player selected rock
    IF the computer selected scissors
        increment playerWins by 1
        return the string "You won! Rock beats Scissors!"
    IF the computer selected paper
        increment computerWins by 1
        return the string "You lose! Paper beats Rock."
    ELSE
        return the string "It was a tie! Try again!"
END

ELSE IF the player selected paper
    IF the computer selected scissors
        increment computerWins by 1
        return the string "You lose! Scissors beats Paper."
    ELSE IF the computer selected paper
        return the string "It was a tie! Try again!"
    ELSE
        increment playerWins by 1
        return the string "You won! Paper beats Rock!"
END

ELSE
    IF the computer selected scissors
        return the string "It was a tie! Try again!"
    ELSE IF the computer selected paper
        increment playerWins by 1
        return the string "You won! Scissors beats Paper!"
    ELSE
        increment computerWins by 1
        return the string "You lose! Rock beats Scissors."
END

determineWinner(): outputs either "You won! Congratulations!" or "You lost! How unfortunate!"
depending on whether playerWins or computerWins is higher.
*/

let playerWins = 0;
let computerWins = 0;
let gameRuns = 0;

game();

function game() {
    alert("Welcome to Rock, Paper, Scissors! You will play 5 rounds against an opponent. Good luck!");
    do {
        playRound();
    } while(gameRuns < 5);

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