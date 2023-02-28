const options = [`Rock`, `Paper`, `Scissors`]
let compChoice;
let playerVicCount = 0;
let compVicCount = 0;

function getComputerChoice(){
    compChoice = Math.floor(Math.random() * options.length);
    return compChoice = options[compChoice];
}

function round(){
    getComputerChoice();
    if((player == `Rock` && compChoice == `Scissors`) || (player == `Paper` && compChoice == `Rock`) || (player == `Scissors` && compChoice == `Paper`)){
        playerVicCount = playerVicCount + 1;
        this.document.getElementById('talk').innerText = `Congrats! ${player} beats ${compChoice}!`;
        this.document.getElementById('playerScore').innerText = `${playerVicCount}`;
    }
    else if((player == `Rock` && compChoice == `Paper`) || (player == `Paper` && compChoice == `Scissors`) || (player == `Scissors` && compChoice == `Rock`)){
        compVicCount = compVicCount + 1;
        this.document.getElementById('talk').innerText = `Sorry! ${compChoice} beats ${player}.`;
        this.document.getElementById('compScore').innerText = `${compVicCount}`;
    }
    else{
        this.document.getElementById('talk').innerText = `A draw!`;
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () =>{
    player = 'Rock';
    round();
})

paper.addEventListener('click', () =>{
    player = 'Paper';
    round();
})

scissors.addEventListener('click', () =>{
    player = 'Scissors';
    round();
})
