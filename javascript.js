  
let playerCount =0;
let pcCount=0;
  
  //button listener 
  
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach((button) => {button.addEventListener('click',()=> {game(button.id)})});
    
    
  
        
  
  
  const container = document.querySelector('#results-container');
  const bigContainer = document.querySelector('.big-container');
  const playAgain = document.createElement('button');
   
  const result = document.createElement('h1');
  const count = document.createElement('h3');
  const userCount = document.createElement('h3');
  const selected = document.createElement('h2');
  const versus = document.createElement('h2');
  

  container.appendChild(selected);
  container.appendChild(versus);
  container.appendChild(result);
  bigContainer.appendChild(count);
  bigContainer.insertBefore(userCount,container);
  
 
  

function game(userSelection) {
    
  
   

    
    const ChoicesArray = ["Scissors", "Paper", "Rock"];
    //displays user selection    
    selected.textContent = ("You selected " + userSelection);

    //assigns computer choice and then displays round 
    const computerChoice = ChoicesArray[Math.floor(Math.random()*ChoicesArray.length)];
    versus.textContent= (userSelection + " vs. "+ computerChoice)    

             
    function playRound(playerChoice, randomChoice) {
       //possible cases 
        switch(playerChoice) {
            case "Rock": if (randomChoice == "Scissors") {
                                playerCount++;
                                return("You win!");
                        }
                        else if (randomChoice == "Rock") {
                                return("It's a tie!")
                        }
                        else {
                            pcCount++;
                            return("You lose! :(");
                                
                        }
                        break;
            case "Paper": if (randomChoice == "Rock") {
                                 playerCount++
                                return("You win!");
                        }
                        else if (randomChoice == "Paper") {
                                return("It's a tie!")
                        }   
                        else {
                            pcCount++;
                            return("You lose! :(");
                        }
                        break;
            
            case "Scissors": if (randomChoice == "Paper") {
                                pcCount++;
                                return("You win!");                             }
                        else if (randomChoice == "Scissors") {
                                return("It's a tie!")
                            }
                        else {
                                pcCount++;
                                return("You lose! :(");
                            
                            }
                        break;
            }
            




        }

        const round = playRound(userSelection,computerChoice);
        //displays round
        if(playerCount<4 && pcCount<4){
        result.textContent = (round) ;
        
        }

        if (playerCount>5 || pcCount>5){}

        count.textContent=  pcCount;
        count.setAttribute('style','align-self:center;');

        userCount.textContent=  playerCount;
        userCount.setAttribute('style','align-self:center;');

  
      // while (playerCount < 5 || pcCount < 5);
         //final result

       if(playerCount==5 && pcCount <5) {
        count.textContent="";
        userCount.textContent="";
            selected.textContent="";
            versus.textContent="";
        result.textContent =("You are the ultimate winner!")
        playAgain.classList.add("playAgain")
            playAgain.addEventListener('click',()=> {
            pcCount=0;playerCount=0;container.removeChild(playAgain);result.textContent="";})
            container.appendChild(playAgain)
            playAgain.textContent=('Play again?');}
       
        if(pcCount==5  && playerCount<5) {
            count.textContent="";
            userCount.textContent="";
            selected.textContent="";
            versus.textContent="";
            result.textContent =("You are a big LOSAAAAR")
            playAgain.classList.add("playAgain")
            playAgain.addEventListener('click',()=> {
                pcCount=0;playerCount=0;container.removeChild(playAgain);result.textContent="";})
            container.appendChild(playAgain)
            playAgain.textContent=('Play again?');}

            if (playerCount>5 || pcCount>5){
                count.textContent="";
            selected.textContent="";
            versus.textContent="";
            userCount.textContent="";


            }
        
        
        
        }
      

 //   }
   
        
      
    
    
