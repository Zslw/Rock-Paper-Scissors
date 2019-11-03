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
    }  // player wins
    else if(playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
    } // computer wins
    else {
        comScore++;
    }
    return [numberOfTides, playerScore, comScore];
}

function printScores(tides,player,coms){
    tideScore.textContent = tides + ' tides had happend.';
    userScore.textContent = 'Your score is : ' + player;
    computerScore.textContent = 'Computer score is : ' + coms;
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
   let values = singleRound('rock');
   let tides = values[0];
   let player = values[1];
   let coms = values[2];
   printScores(tides,player,coms);
});
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let values = singleRound('paper');
    let tides = values[0];
    let player = values[1];
    let coms = values[2];
    printScores(tides,player,coms);
});
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let values = singleRound('scissors');
    let tides = values[0];
    let player = values[1];
    let coms = values[2];
    printScores(tides,player,coms);
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