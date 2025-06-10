const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
let compdisplay = document.getElementById("compmoves");
let resultDisplay = document.getElementById("result");
const winSound = new Audio("../Audio Effects/Win.mp3");
const gameover = new Audio("../Audio Effects/gameover.mp3");

const moves = ["rock", "paper", "scissors"];

function gameon(userMove) {
    const rand = Math.floor(Math.random() * 3);
    const compMove = moves[rand];


    compdisplay.innerHTML = `<img src="../pics/${rand}.svg" class="move-img" />`;


    let result = "";
    if (userMove === compMove) {
        result = "It's a Draw!";
    } else if (
        (userMove === "rock" && compMove === "scissors") ||
        (userMove === "paper" && compMove === "rock") ||
        (userMove === "scissors" && compMove === "paper")
    ) {
        result = "You Win!🎉 ";
        winSound.play();
        winSound.volume = 0.6;
    } else {
        result = "Computer Wins!🎉";
        gameover.play();
        winSound.volume = 0.6;
    }

    resultDisplay.textContent = `You chose ${userMove}, Computer chose ${compMove} — ${result}`;
}


rock.onclick = () => gameon("rock");
paper.onclick = () => gameon("paper");
scissors.onclick = () => gameon("scissors");
