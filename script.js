console.log("hellow");
// plan/pseudocode
// ask user for input

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
    let roundCount = 0;

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const div = document.querySelector(".div");

    rock.addEventListener("click", () => {
        const humanChoice = "rock"
        const result = playRound(humanChoice, getComputerChoice());
    })

    paper.addEventListener("click", () => {
        const humanChoice = "paper"
        const result = playRound(humanChoice, getComputerChoice());
    })

    scissors.addEventListener("click", () => {
        const humanChoice = "scissors"
        const result = playRound(humanChoice, getComputerChoice());
    })

    function playRound(humanChoice, computerChoice) {
        // humanChoice = humanChoice.toLowerCase();
        // computerChoice = getComputerChoice();
        let outcome;
        roundCount += 1
        if (roundCount < 5) {
            if (humanChoice === computerChoice) {
                outcome = "draw";
            } else if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                    outcome = "lose";
                } else {
                    console.log(`You win ${humanChoice} beats ${computerChoice}`)
                    outcome = "win";
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "scissors") {
                    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                    outcome = "lose";
                } else {
                    console.log(`You win ${humanChoice} beats ${computerChoice}`)
                    outcome = "win";
                }
            } else if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
                    outcome = "lose";
                } else {
                    console.log(`You win ${humanChoice} beats ${computerChoice}`)
                    outcome = "win";
                }
            }
            if (outcome === "win") {
                humanScore += 1;
            } else if (outcome === "lose") {
                computerScore += 1;
            }
        } else if (roundCount === 5)
            
        div.textContent = `${humanScore} is the human score`;
        div.textContent = `${computerScore} is the computer's score`;
    }

    // for (let i = 0; i < 5; i++) {
        

    // }

    
    


}

playGame();
// figure out who won
// output if you won or not