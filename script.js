function getComputerChoice() {
    let choice = Math.floor(3 * Math.random());
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 0) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Computer's paper defeats Human's rock.")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Human's rock beats Computer's scissors.")
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Computer's scissors defeat Human's paper.")
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Human's paper defeats Computer's rock.")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Human's scissors defeat Computer's paper.")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Computer's rock beats Human's scissors.")
    }
    else {
        console.log("A draw has occured!")
    }
}



function playGame() {
    let humanSelection = toLowerCase(getHumanChoice());
    let computerSelection = toLowerCase(getComputerChoice());
    playRound(humanSelection, computerSelection);

    humanSelection = toLowerCase(getHumanChoice());
    computerSelection = toLowerCase(getComputerChoice());
    playRound(humanSelection, computerSelection);

    humanSelection = toLowerCase(getHumanChoice());
    computerSelection = toLowerCase(getComputerChoice());
    playRound(humanSelection, computerSelection);

    humanSelection = toLowerCase(getHumanChoice());
    computerSelection = toLowerCase(getComputerChoice());
    playRound(humanSelection, computerSelection);

    humanSelection = toLowerCase(getHumanChoice());
    computerSelection = toLowerCase(getComputerChoice());
    playRound(humanSelection, computerSelection);

    console.log(`You won ${humanScore} games whereas the computer won ${computerScore} games!`);
}