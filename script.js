let playerSelection = "rock"
let counterPlayer = 0;
let counterPc = 0;
let divs = document.querySelectorAll(".cont")


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





