const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     results();
// }

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = compChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    console.log(winner);
}

function playerChoice() {
    let input = prompt("Choose either rock, paper or scissors");
    input = input.toLowerCase();
    return input;
}

function compChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
    if (
        (choiceP === "scissors" && choiceC === "paper") ||
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock")) {
        playerScore++;
        return `You win, ${choiceP} beats ${choiceC}`;
    }
    else if (choiceP === choiceC) {
        return "It's a tie!";
    }
    else {
        computerScore++;
        return `You lose, ${choiceC} beats ${choiceP}`;
    }
}

function results() {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a draw!");
    }
}

// game();
playRound();
