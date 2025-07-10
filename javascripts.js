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
    return output;
}

function getHumanChoice(input) { 
    return input;
}


function playRound(humanChoice, computerChoice) { 
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    const div = document.createElement("div");
    const body = document.querySelector("body");
    div.setAttribute("style","white-space: pre;");
    div.textContent = `${newline}Player has entered: ${humanChoiceLowerCase}. \r\n`;
    div.textContent += `Computer has entered: ${computerChoice}.\r\n`;
    
    if (humanChoiceLowerCase === "rock" && computerChoice === "rock" ||
        humanChoiceLowerCase === "paper" && computerChoice === "paper" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "scissors") {
            div.textContent += "No one wins. " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) +" does not beat " +computerChoice +".";
            body.appendChild(div);
            return 0;
    } else if (humanChoiceLowerCase === "rock" && computerChoice === "scissors" ||
        humanChoiceLowerCase === "paper" && computerChoice === "rock" ||
        humanChoiceLowerCase === "scissors" && computerChoice === "paper") { 
            div.textContent += "You win! " + humanChoiceLowerCase.charAt(0).toUpperCase() + humanChoiceLowerCase.slice(1) + " beats " + computerChoice +".";
            body.appendChild(div);
            return 1;
    } else {
        div.textContent += "You lose! " + computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1) + " beats " +humanChoiceLowerCase +".";
        body.appendChild(div);
        return -1;
    }
}

function printStartingScore() {
    const startingScore = document.createElement("div");
    const body = document.querySelector("body");
    startingScore.setAttribute("style","white-space: pre;");
    startingScore.textContent = `${newline}Human Score: ${humanScore} \xa0\xa0`;
    startingScore.textContent += `Computer Score: ${computerScore}`;
    body.appendChild(startingScore);
}

function playGame (playRound) { 
        let score = playRound(getHumanChoice(id), getComputerChoice()); //1 if human wins and -1 if computer wins
        if (score == 1) {
            humanScore++;
        } else if (score == -1) { 
            computerScore++; 
        }
}

const buttons = document.querySelectorAll("button");
let id = "";
let humanScore = 0;
let computerScore = 0;
let newline = "\r\n";

printStartingScore();


buttons.forEach((button) => {
    button.addEventListener("click", function() {
        id = button.id;

        const score = document.createElement("div");
        score.setAttribute("style","white-space: pre;");
        const body = document.querySelector("body");
        const announceWinner = document.createElement("div");
        announceWinner.setAttribute("style","white-space: pre;");

        if ((humanScore === 5) || (computerScore === 5)) {
            let winner = (humanScore === 5) ? "player" : "computer";
            announceWinner.textContent += `\r\nNo more Round. The Winner is ${winner}.`;
            body.appendChild(announceWinner);
        } else {
            playGame(playRound);
            score.textContent = `Human Score: ${humanScore} \xa0\xa0`;
            score.textContent += `Computer Score: ${computerScore}`;
            body.appendChild(score);
        }
        
     
    });
});

