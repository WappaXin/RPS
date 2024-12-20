
const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);
        
div0 = document.createElement("div");
div1 = document.createElement("div");
div2 = document.createElement("div");
div3 = document.createElement("div");
div4 = document.createElement("div");
div5 = document.createElement("div");

div.appendChild(div0);
div.appendChild(div1);
div.appendChild(div2);
div.appendChild(div3);
div.appendChild(div4);
div.appendChild(div5);


// humChoice variable is selected through this and then given value in playGame function when a choice button is clicked 
const userChoice1 = document.querySelector("button.rock");
const userChoice2 = document.querySelector("button.paper");
const userChoice3 = document.querySelector("button.scissor");


// Math.random() has a range of greater than or equal to 0 and less than 1
// Assign each one third of that range to rock, paper and scissors and get compChoice
function getComputerChoice() {
    let num = Math.random();
    
    if (num >= 0 && num < 0.33)
    { return  "Rock"; }
    else if(num >= 0.33 && num < 0.66)
        { return "Paper"; }
    else 
    { return "Scissor"; }  
}

// Function result shows the score for every round
function result() {
    div1.textContent = `Your choice -  ${humChoice}`;
    div2.textContent = `Computer's choice -  ${compChoice}`;
    div3.textContent = `Your score = ${humanScore}`;
    div4.textContent = `Computer's score = ${computerScore}`;
}
    
let humanScore = 0;
let computerScore = 0;

function playRound(humChoice,compChoice) {
    
    if (humChoice === compChoice) {     
            div0.textContent = `You have a Tie!!, Play again.`;         
            result();
            return;
            }

    if(humChoice === "Rock") { 
        if (compChoice === "Paper") {
            div0.textContent = `You lose!`;
            computerScore++;
            }
        else {
            div0.textContent = `You won!`;
            humanScore++;
        }    
    }

    if(humChoice === "Paper") {
        if (compChoice === "Rock") {
            div0.textContent = `You won!`;
            humanScore++;
            }
            else {
            div0.textContent = `You lose!`;
            computerScore++;
            }    
        }
        
    if(humChoice === "Scissor") {                 
        if (compChoice === "Paper") {
            div0.textContent = `You won!`;
            humanScore++;
        }
        else {
            div0.textContent = `You lose!`;
            computerScore++;
        }    
    }

    // Show results once winner is decided
    result();

    // Once someone reaches 5 points, it shows the result of the last round as it does for every round
    // then disables the buttons for humanChoice and adds a button called play again to restart the game 
    // Once the play again button is clicked it clears all the text of Results section
    if (humanScore == 5){
        div5.textContent = `You won the Game!!`; 
        result();
        disableBtn();
        btn();
        clear();
    } else if (computerScore == 5){
        div5.textContent = `You lost the Game..`;  
        result();
        disableBtn();
        btn();
        clear(); 
        }
    }


function btn(){
    playAgainBtn = document.createElement("button");
    div.appendChild(playAgainBtn);
    playAgainBtn.textContent = 'Play Again';            
}

//Disables all the buttons for humanChoice
function disableBtn() {
    userChoice1.disabled = true;
    userChoice2.disabled = true;
    userChoice3.disabled = true;
}

// Once the play again button is clicked, it clears all the text from the divs of the Result section 
// It also resets the score and enables the disabled buttons for humanChoice and removes the play again button
function clear() { 
    playAgainBtn.addEventListener("click" , (event) => {
        div0.textContent = '';
        div1.textContent = '';
        div2.textContent = ''; 
        div3.textContent = '';
        div4.textContent = '';
        div5.textContent = '';

        humanScore = 0;
        computerScore = 0;

        userChoice1.disabled = false;
        userChoice2.disabled = false;
        userChoice3.disabled = false;

        div.removeChild(playAgainBtn);
    })
}

function playGame(){
    userChoice1.addEventListener("click" , () => {humChoice = "Rock"; compChoice = getComputerChoice(); playRound(humChoice,compChoice) });
    userChoice2.addEventListener("click" , () => {humChoice = "Paper"; compChoice = getComputerChoice(); playRound(humChoice,compChoice) });
    userChoice3.addEventListener("click" , () => {humChoice = "Scissor"; compChoice = getComputerChoice(); playRound(humChoice,compChoice) });
}

playGame();