const options = [`Rock`, `Paper`, `Scissors`]

function getComputerChoice(compChoice){
    compChoice = Math.floor(Math.random() * options.length);
    return options[compChoice];
}