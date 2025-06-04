const minInput = document.getElementById("minvalue");
const maxInput = document.getElementById("maxvalue");
const guessInput = document.getElementById("guessinput");
const Answer = document.getElementById("Answer");

let rand; 
let gameStarted = false;

document.getElementById("submit").onclick = function () {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);
    const guess = Number(guessInput.value);

    if (!gameStarted) {
        if (isNaN(min) || isNaN(max) || min >= max) {
            Answer.textContent = "Enter valid min and max (min < max)";
            return;
        }

        rand = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("Random number is:", rand); // For testing
        gameStarted = true;
    }

    if (isNaN(guess)) {
        Answer.textContent = "Enter a valid guess number.";
    } else if (guess < min || guess > max) {
        Answer.textContent = `Guess must be between ${min} and ${max}`;
    } else if (guess > rand) {
        Answer.textContent = "Too high!";
    } else if (guess < rand) {
        Answer.textContent = "Too low!";
    } else {
        Answer.textContent = "🎉 Correct! You guessed it! 🎉";
        gameStarted = false; 
    }
};
