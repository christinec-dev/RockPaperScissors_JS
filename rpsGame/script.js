let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//caching the DOM

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random()* 3);
    return choices[randomNum];
}
//getting the computer to generate a result

function convertToWord(letter) {
    if(letter === "r") return("Rock");
    if(letter === "p") return("Paper");
     return("Scissor");
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 1000)
}

function lose(userChoice, computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow')}, 1000)
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = convertToWord(computerChoice) + " draws with " + convertToWord(userChoice) + ". It's a draw!";
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('yellow-glow')}, 1000)
}

//returns result

function game(userChoice) {
    const computerChoice = getCompChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
       win( userChoice, computerChoice);
        break;
        case "rp":
        case  "ps":
        case  "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case  "pp":
        case  "ss":
       draw(userChoice, computerChoice);
        break;
    }
}


function main() {
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissor_div.addEventListener('click', function() {
    game("s");
})
}

main();
//getting to generate a result