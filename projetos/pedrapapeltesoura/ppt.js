let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("result_p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function tradutor(word){
    switch (word){
        case "rock":
            return "pedra"
        case "paper":
            return "papel"
        case "scissors":
            return "tesoura"
    }
}


function capitalize (word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}


function win(userChoice, computerChoice){
    const smallUserWord = " user".fontsize(3).sup();
    const smallCompWord = " comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= `${capitalize(tradutor(userChoice))}${smallUserWord} ganha de ${tradutor(computerChoice)}${smallCompWord}. Você ganhou!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 600);
}


function lose(userChoice, computerChoice){
    const smallUserWord = " user".fontsize(3).sup();
    const smallCompWord = " comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= `${capitalize(tradutor(userChoice))}${smallUserWord} perde para ${tradutor(computerChoice)}${smallCompWord}. Você perdeu!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 600);
}


function draw(userChoice, computerChoice){
    const smallUserWord = " user".fontsize(3).sup();
    const smallCompWord = " comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= `${capitalize(tradutor(userChoice))}${smallUserWord} e ${tradutor(computerChoice)}${smallCompWord}. Empatou!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 600);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperrock":
        case "scissorspaper":
            lose(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}


main();