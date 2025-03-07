function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice <= .33) {
        return 'rock'
    }
    else if (computerChoice > .33 && computerChoice <= .66) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon", "rock");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Choose your weapon", "rock");
    }
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}


let humanScore = 0;
let pcScore = 0;


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();



    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("It's a tie")
                break;
            }
            else if (computerChoice == "paper") {
                console.log("Rock vs Paper, Pc Wins");
                pcScore++;
                console.log(pcScore)
                break;
            }
            else {
                console.log("Rock vs Scissors, You Win!");
                humanScore++;
                console.log(humanScore)
                break;
            }


        case "paper":
            if (computerChoice == "paper") {
                console.log("It's a tie")
                break;
            }
            else if (computerChoice == "scissors") {
                console.log("Paper vs Scissors, Pc Wins");
                pcScore++;
                console.log(pcScore)
                break;
            }
            else {
                console.log("Paper vs Rock, You Win!");
                humanScore++;
                console.log(humanScore)
                break;
            }

        case "scissors":
            if (computerChoice == "scissors") {
                console.log("It's a tie")
                break;
            }
            else if (computerChoice == "rock") {
                console.log("Scissors vs Rock, Pc Wins");
                pcScore++;
                console.log(pcScore)
                break;
            }
            else {
                console.log("Scissors vs Paper, You Win!");
                humanScore++;
                console.log(humanScore)
                break;

            }
    }
}

function playGame() {
    while (pcScore < 5 && humanScore < 5) {
        playRound()
    }
}


playGame();
