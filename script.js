const options = [`Rock`, `Paper`, `Scissors`]
let compChoice;

function getComputerChoice(){
    compChoice = Math.floor(Math.random() * options.length);
    return compChoice = options[compChoice];
}

function round(){
    let player = prompt(`Please choose rock paper or scissors`)
    player = player.trim();
    player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    if(player != `Rock` && player != `Paper` && player != `Scissors`){
        return `Thats not an option`
    }
    else{
        getComputerChoice();
        if((player == `Rock` && compChoice == `Scissors`) || (player == `Paper` && compChoice == `Rock`) || (player == `Scissors` && compChoice == `Paper`)){
            return `Congratulations! ${player} beats ${compChoice}!`;
        }
        else if((player == `Rock` && compChoice == `Paper`) || (player == `Paper` && compChoice == `Scissors`) || (player == `Scissors` && compChoice == `Rock`)){
            return `Sorry! ${compChoice} beats ${player}.`;
        }
        else{
            console.log(player)
            console.log(compChoice)
            return `A draw!`
        }
    }
}