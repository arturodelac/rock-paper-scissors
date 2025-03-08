//Creates a Random Choice for the PC

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

//Listeners for User Choice

function clickRock() {
    playRound('rock')
}

function clickPaper() {
    playRound('paper')
}
function clickScissors() {
    playRound('scissors')
}

//Keeps score and updates the webpage

let humanScore = 0;
let pcScore = 0;
let displayHumanScore = document.getElementById('humanScore');
let displaypcScore = document.getElementById('pcScore')

function updateText() {
    displayHumanScore.textContent = `${humanScore}`;
    displaypcScore.textContent = `${pcScore}`;
}


//Game Logic

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();



    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                humanScore++;
                pcScore++;
                break;
            }
            else if (computerChoice == "paper") {
                pcScore++;
                break;
            }
            else {
                humanScore++;
                break;
            }


        case "paper":
            if (computerChoice == "paper") {
                humanScore++;
                pcScore++;
                break;
            }
            else if (computerChoice == "scissors") {
                pcScore++;
                break;
            }
            else {
                humanScore++;
                break;
            }

        case "scissors":
            if (computerChoice == "scissors") {
                humanScore++;
                pcScore++;
                break;
            }
            else if (computerChoice == "rock") {
                pcScore++;
                break;
            }
            else {
                humanScore++;
                break;

            }
    }


    if (pcScore == 5) {
        alert('pcWinssss');
        pcScore = 0;
        humanScore = 0;
    }

    else if (humanScore == 5) {
        alert('Youw wwwwinssss');
        pcScore = 0;
        humanScore = 0;
    }
    updateText();
}

function playGame() {
    while (pcScore < 5 && humanScore < 5) {
        playRound()
    }
}



