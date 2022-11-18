const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let totalRounds = 0;
const you = document.querySelector('.you');
const comp = document.querySelector('.comp');
const ties = document.querySelector('.ties');
const result = document.querySelector('.result');
const round = document.querySelector('.round');


const buttons = document.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playRound(buttons[i].id);
        results();
    })
}


function playRound(playerChoice) {
    const playerSelection = playerChoice;
    const computerSelection = compChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    round.textContent = `you: ${playerSelection} - - computer: ${computerSelection} - - ${winner}`;
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    console.log(winner);
    you.textContent = `${playerScore}`;
    comp.textContent = `${computerScore}`;
    ties.textContent = `${tie}`
};

// function playerChoice() {
//     // let input = prompt("Choose either rock, paper or scissors");
//     // input = input.toLowerCase();
//     let input = 'rock';
//     return input;
// }

function compChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function checkWinner(choiceP, choiceC) {
    if (
        (choiceP === "scissors" && choiceC === "paper") ||
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock")) {
        playerScore++;
        totalRounds++;
        return `You win, ${choiceP} beats ${choiceC}`;
    }
    else if (choiceP === choiceC) {
        tie++;
        totalRounds++;
        return "It's a tie!";
    }
    else {
        computerScore++;
        totalRounds++;
        return `You lose, ${choiceC} beats ${choiceP}`;
    }
};

function results() {
    if (totalRounds < 5) {
        return;
    }
    else {
        you.textContent = `${playerScore}`;
        comp.textContent = `${computerScore}`;
        ties.textContent = `${tie}`
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Ties: ${tie}`);
        if (playerScore > computerScore) {
            result.textContent = "You win!";
            console.log("You win!");
        }
        else if (playerScore < computerScore) {
            result.textContent = "You lose!";
            console.log("You lose!");
        }
        else {
            result.textContent = "It's a draw!";
            console.log("It's a draw!");
        }
        disableButton();
    }
};

function disableButton() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}


