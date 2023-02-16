const options = [`Rock`, `Paper`, `Scissors`]
let compChoice;
let playerVicCount = 0;
let compVicCount = 0;

function getComputerChoice(){
    compChoice = Math.floor(Math.random() * options.length);
    return compChoice = options[compChoice];
}

function round(){
    let player = prompt(`Please choose rock paper or scissors`)
    player = player.trim();
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    if(player != `Rock` && player != `Paper` && player != `Scissors`){
        console.log(`Thats not an option`);
    }
    else{
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
}

function game(){
    for(let i = 0; i < 5; i++){
        round();

    }
    return `The game was ${playerVicCount} for you and ${compVicCount} for me! Good Game!`
}