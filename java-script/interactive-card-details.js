// interactive Card Deails display

// card display lets
let cardholdername = document.querySelector(".card-holder");
let cardholdernumber = document.querySelector(".card-number");
let cardholderexp = document.querySelector(".exp-date");
let cardholderncvc = document.querySelector(".cvc-number");

function displaydetails(){
    const name = document.getElementById("cardholder-name").value;
    const cardnumber = document.getElementById("card-number").value;
    const monthexp = document.getElementById("MM").value;
    const yearexp = document.getElementById("YY").value;
    const cvc = document.getElementById("cvc").value;

    const expiry = `${monthexp}/${yearexp}`;
    cardholderexp.textContent = expiry;


    let number = cardnumber; 
    let digits = number.toString().split('');
    let numbers = digits.map(Number); 
    let formattedNumber = '';
    for (let x = 0; x < numbers.length; x++) {
        
        if (x > 0 && x % 4 === 0) {
            formattedNumber += ' ';
        }
        formattedNumber += numbers[x];
    }

    cardholdernumber.textContent = formattedNumber;

    cardholdername.textContent = name;
    cardholderncvc.textContent = cvc;

}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  
});