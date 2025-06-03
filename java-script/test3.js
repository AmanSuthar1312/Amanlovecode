const min = 1;
const max = 10;

const Answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Answer);

let attempts = 0;
let inp;
let playing = true;

// while (playing) {
//     inp = window.prompt("Enter a number between 1 and 10");
//     inp = Number(inp);

//     if (isNaN(inp)) {
//         window.alert("Enter a valid number");
//     }
//     else if (inp < min || inp > max) {
//         window.alert("Enter a number between 1 and 10");
//     }
//     else {
//         attempts++;
//         if (inp > Answer) {
//             window.alert("The number is too big. Try again!");
//         }
//         else if (inp < Answer) {
//             window.alert("The number is too small. Try again!");
//         }
//         else {
//             window.alert(`You guessed it right! The number was ${Answer}. It took you ${attempts} attempts.`);
//             playing = false;
//         }
//     }
// }
