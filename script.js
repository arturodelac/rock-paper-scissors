let playerSelection = "rock"
let counterPlayer = 0;
let counterPc = 0;
let divs = document.querySelectorAll(".cont")

const playerC = document.querySelector("#playerC")


const PcC = document.querySelector("#PcC")



//listents for input
divs.forEach((div) => div.addEventListener("click", function (e) {
    playerSelection = div.id;
    playGame()
}))

function getComputerChoice() {
    let x = Math.random();
    if (x < .3) {
        return "rock"
    }
    else if (x > .3 && x < .6) {
        return "paper"
    }
    else {
        return "scissors"
    };
};

function round() {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("Tie");
        return "It's a tie"
    }

    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == 'rock') {
        console.log("Player Wins!");
        return "Player Wins!"

    }

    else
        console.log("PC Wins!");
    return "Computer Wins";
}

function playGame() {
    let x = round();
    if (x == "Player Wins!") {
        counterPlayer = counterPlayer + 1;
        //alert(x);
    }
    else if (x == "Computer Wins") {
        counterPc = counterPc + 1;
        //alert(x);
    }

    else {
        counterPc = counterPc + 1;
        counterPlayer = counterPlayer + 1;
    }


    PcC.textContent = counterPc;
    playerC.textContent = counterPlayer;

    if (counterPc >= 5) {
        counterPc = 0;
        counterPlayer = 0;


        PcC.textContent = counterPc;
        playerC.textContent = counterPlayer;
        return alert("Pc Wins");

    }

    if (counterPlayer >= 5) {
        counterPc = 0;
        counterPlayer = 0;


        PcC.textContent = counterPc;
        playerC.textContent = counterPlayer;
        return alert("Player Wins");
    }
    //else
    //alert("Tie");

    // if (counterPlayer == 5) {
    //return alert("Player Wins")
    // }
    // else if (counterPc == 5) {
    //return alert("PC wins")
    // }
    // else
    //playGame();
}





