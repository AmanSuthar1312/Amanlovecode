const increse = document.getElementById("inc");
const reset = document.getElementById("res");
const decrease = document.getElementById("dec");
const displaytext = document.getElementById("h1tag");

let no = 0;

increse.onclick = function () {
    no++;
    displaytext.textContent = no;
}

reset.onclick = function () {
    no = 0;
    displaytext.textContent = no;
}

decrease.onclick = function () {
    no--;
    displaytext.textContent = no;
}
