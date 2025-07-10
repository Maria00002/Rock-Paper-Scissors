function getComputerChoice() { 
    let number = Math.random();
    let output;
    if (number < (1/3)) { 
        output = "rock";
    } else if (number >= (1/3) && number < (2/3)) { 
        output = "paper";
    } else {
        output = "scissors";
    }
    // console.log("Computer has entered: "+output);
    return output;
}

function getHumanChoice(input) { 
    // let input = prompt("The player please enter rock/paper/scissors: ","");
    // console.log("The player has entered: " + input);
    return input;
}


function playRound(humanChoice, computerChoice) { 
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    const div = document.createElement("div");
    const body = document.querySelector("body");
    div.setAttribute("style","white-space: pre;");
    div.textContent = `\r\nPlayer has entered: ${humanChoiceLowerCase}. \r\n`;
    div.textContent += `Computer has entered: ${computerChoice}.\r\n`;
    
    if (humanChoiceLowerCase === "rock" && computerChoice === "rock" ||
        humanChoiceLowerCase === "paper" && computerChoice === "paper" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "scissors") {
            div.textContent += "No one wins. " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) +" does not beat " +computerChoice +".";
            // console.log("No one wins. " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) +" does not beat " +computerChoice);
            // return 0;
    } else if (humanChoiceLowerCase === "rock" && computerChoice === "scissors" ||
        humanChoiceLowerCase === "paper" && computerChoice === "rock" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "paper") { 
            div.textContent += "You win! " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) + " beats " + computerChoice +".";
            // console.log("You win! " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) + " beats " + computerChoice);
            // return 1;

    } else {
        div.textContent += "You lose! " + computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1) + " beats " +humanChoiceLowerCase +".";
        // console.log("You lose! " + computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1) + " beats " +humanChoiceLowerCase);
        // return -1;
    }
    body.appendChild(div);
}



// playGame();
// Add an event listener to the buttons that call your playRound function 
// with the correct playerSelection every time a button is clicked

const buttons = document.querySelectorAll("button");

// try to display the correct button id
// working 
// buttons.forEach((button) => {
//     button.addEventListener("click", ()=> {
//     getHumanChoice(button.id);
//     });
// });

// working
// buttons.forEach((button) => {
//     button.addEventListener("click", function() {
//         getHumanChoice(button.id);
//     });
// });


buttons.forEach((button) => {
    button.addEventListener("click", function() {

        // Add a div for displaying results and change all of your console.logs into DOM methods
        




        playRound(getHumanChoice(button.id), getComputerChoice());
        
    });
});








// Step 6: Write the logic to play the entire game
// The game will play 5 rounds. 
// Keep track of the scores and declares a winner at the end
// function playGame () { 
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log("Round " + (i+1));
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
    
//         let score = playRound(humanSelection, computerSelection); //1 if human wins and -1 if computer wins
//         if (score == 1) {
//             humanScore++;
//         } else if (score == -1) { 
//             computerScore++; 
//         }
//         console.log("Human score is " + humanScore + ". Computer score is " + computerScore + ".");   
//         console.log("");
//     }
// }