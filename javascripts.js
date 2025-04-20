// This is Project: Rock Paper Scissors 
// This game is played entirely in the console. Press F12 to get there 

// Declare the players score variables
// Your game will keep track of the players score. 
let humanScore = 0;
let computerScore = 0;

// getComputerChoce will randomly return one of the followings: 
// rock, paper, scissors
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
// getHumanChoice will return one of the valid choices depending on what 
// the user inputs. Do not need to handle reprompting if the user enters 
// an invalid input  
function getHumanChoice(){
    let input = prompt("The player please enter rock/paper/scissors: ","");
    console.log("The player has entered: " + input);
    return input;
}

// Write the logic to play a single round
// takes the human and computer player choices as arguments 
// play a single round, increments the round winner's score 
// and logs a winner annoucement 


function playRound(humanChoice, computerChoice){
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    let humanWins = true;
    let computerWins = true;
    let noOneWins = true;

    // Write out the logic of who wins
    // Write the winning score to console.log a string value representing the round winner
    // Increment the humanScore or computerScore varaibles based on the round wintner
    if (humanChoiceLowerCase === "rock" && computerChoice === "rock" ||
        humanChoiceLowerCase === "paper" && computerChoice === "paper" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "scissors") {
            console.log("No one wins. " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) +" does not beat " +computerChoice);
            return noOneWins;
    }
    else if (humanChoiceLowerCase === "rock" && computerChoice === "scissors" ||
        humanChoiceLowerCase === "paper" && computerChoice === "rock" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "paper"){
            console.log("You win! " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) + " beats " + computerChoice);
            humanScore ++;
            return humanWins;

    }
    else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1) + " beats " +humanChoiceLowerCase);
        computerScore ++;
        return computerWins;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

