function game() {
    let playerCount =0;
    let pcCount=0;

    do {
    let userSelection = prompt("Rock, Paper or Scissors?");
    let ChoicesArray = ["Scissors", "Paper", "Rock"]
         if (ChoicesArray.includes(userSelection)) {
        console.log("You selected " + userSelection)}
        else {userSelection = prompt("Rock, Paper or Scissors?")}
    const computerChoice = ChoicesArray[Math.floor(Math.random()*ChoicesArray.length)];
        

             
    function playRound(playerChoice, randomChoice) {
        console.log("Round = " + playerChoice + " vs " + randomChoice)
        
        switch(playerChoice) {
            case "Rock": if (randomChoice == "Scissors") {
                        console.log("You win!");
                        playerCount++
                        }
                        else if (randomChoice == "Rock") {
                            console.log("It's a tie!")
                        }
                        else {console.log("You lose! :(");
                        pcCount++;
                        }
                        break;
            case "Paper": if (randomChoice == "Rock") {
                        console.log("You win!");
                        playerCount++
                        }
                        else if (randomChoice == "Paper") {
                            console.log("It's a tie!")
                        }
                        else {console.log("You lose! :(");
                        pcCount++;
                        }
                        break;
            
            case "Scissors": if (randomChoice == "Paper") {
                        console.log("You win!");
                        playerCount++
                        }
                        else if (randomChoice == "Scissors") {
                            console.log("It's a tie!")
                        }
                        else {console.log("You lose! :(");
                        pcCount++;
                        }
                        break;
            }
            




        }
        console.log(playRound(userSelection,computerChoice))}
        while (playerCount < 5 || pcCount < 5);

        if(playerCount==5) {
            console.log("You are the winner!!!")
        }
        else {console.log("You are the loser! :(")}

    }
   



    
