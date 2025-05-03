console.log("hellow");
// plan/pseudocode
// ask user for input
function getHumanChoice() {
    let humanChoice;
    while(humanChoice === undefined){
        humanChoice = prompt("What is your move?");
    }
    return humanChoice
}

// generate computer's move
    // use a random number generator
function getComputerChoice() {
    let computerChoice;
    randomNum = Math.random();
    if (randomNum < 0.3333333333) {
        computerChoice = "rock";
    } else if (randomNum < 0.6666666666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}



// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            console.log("Draw!");
            return "draw";
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                return "lose";
            } else {
                console.log(`You win ${humanChoice} beats ${computerChoice}`)
                return "win";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                return "lose";
            } else {
                console.log(`You win ${humanChoice} beats ${computerChoice}`)
                return "win";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                return "lose";
            } else {
                console.log(`You win ${humanChoice} beats ${computerChoice}`)
                return "win";
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let outcome = playRound(getHumanChoice(), getComputerChoice)
        if (outcome === "win") {
            humanScore += 1;
        } else if (outcome === "lose") {
            computerScore += 1;
        }
    }
    console.log(`${humanScore} is the human score`);
    console.log(`${computerScore} is the computer's score`)
}

playGame();
// figure out who won
// output if you won or not