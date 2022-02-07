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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let gameRuns = 0;

    do {
        playRound();
    } while(gameRuns <= 5);

    determineWinner(playerWins, computerWins);
}

function playRound() {
    let userSelection = userPlay();
    let computerSelection = computerPlay();
    compareSelections(userSelection, computerSelection);
}