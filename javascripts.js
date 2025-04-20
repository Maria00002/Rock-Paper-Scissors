// This is Project: Rock Paper Scissors 
// This game is played entirely in the console. Press F12 to get there 



let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.random();
    let output;
    if (number < (1/3)){
        output = "rock";
    }
    else if (number>=(1/3)&& number<(2/3)){
        output = "paper";
    }
    else {
        output = "scissors";
    }
    console.log("Computer has entered: "+output);
    return output;
}

function getHumanChoice(){
    let input = prompt("The player please enter rock/paper/scissors: ","");
    console.log("The player has entered: " + input);
    return input;
}

function playRound(humanChoice, computerChoice){
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    If ()

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
// getHumanChoice();
// getComputerChoice();