const options = [`Rock`, `Paper`, `Scissors`]

function getComputerChoice(compChoice){
    compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}

function round(computerSelection, playerSelection){
    let player = prompt(`Please choose rock paper or scissors`)
    player = player.trim();
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    console.log(player);
}