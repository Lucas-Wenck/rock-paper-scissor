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
        console.log(`Congratulations! ${player} beats ${compChoice}!`);
    }
    else if((player == `Rock` && compChoice == `Paper`) || (player == `Paper` && compChoice == `Scissors`) || (player == `Scissors` && compChoice == `Rock`)){
        compVicCount = compVicCount + 1;
        console.log(`Sorry! ${compChoice} beats ${player}.`);
    }
    else{
        console.log(`A draw!`);
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () =>{
    player = 'Rock';
    round();
})
