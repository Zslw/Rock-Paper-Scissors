 // JavaScript weas
let playerScore = 0;
let comScore = 0;
let numberOfTides = 0;
 
 function computerPlay(){
    const comChoice = ["rock", "paper","scissors"]
    return comChoice[Math.floor(Math.random()*3)]
}

function singleRound(playerSelection){
computerSelection = computerPlay();

console.log( "You chose " + playerSelection + " and the computer chose " + computerSelection + ".");
    // tide
    if (playerSelection==computerSelection){
        numberOfTides++;
        return tide = "It's a tide";
    }  // player wins
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return uWin = "You Win";
    } // computer wins
    else {
        comScore++;
        return comWin = "Computer Wins";
    }
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    singleRound('rock');
});
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    singleRound('paper');
});
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    singleRound('scissors');
});

//--------------------------------------------------
const scoreScreen = document.querySelector('#scoreScreen');

const tideScore = document.createElement('p');
tideScore.classList.add('tideScore');
tideScore.textContent = numberOfTides + ' tides had happend.';

const userScore = document.createElement('p');
userScore.classList.add('userScore');
userScore.textContent = 'Your score is : ' + playerScore;

const computerScore = document.createElement('p');
computerScore.classList.add('computerScore');
computerScore.textContent = 'Computer score is : ' + comScore;

const display = document.createElement('div');
display.classList.add('display')

scoreScreen.appendChild(display);
scoreScreen.appendChild(tideScore);
scoreScreen.appendChild(userScore);
scoreScreen.appendChild(computerScore);