function generatepassword(length, incuppercase, inclowercase, incnumbers, incsymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschars = "1234567890";
    const symbols = "!@#$%^&*()_+-=";

    let allowedchars = "";
    let password = "";

    if (length <= 0) {
        console.log("Enter a value greater than 0");
        return "";
    }

    allowedchars += incuppercase ? uppercasechars : "";
    allowedchars += inclowercase ? lowercasechars : "";
    allowedchars += incnumbers ? numberschars : "";
    allowedchars += incsymbols ? symbols : "";

    if (allowedchars.length === 0) {
        console.log("At least one character set must be selected");
        return "";
    }

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;
}


let submit = document.getElementById("mySubmit");

submit.onclick = function () {
    const incuppercase = document.getElementById("Uppercase").checked;
    const inclowercase = document.getElementById("Lowercase").checked;
    const incnumbers = document.getElementById("Numbers").checked;
    const incsymbols = document.getElementById("Symbol").checked;
    const passwordlength = Number(document.getElementById("Length").value);

    const password = generatepassword(passwordlength, incuppercase, inclowercase, incnumbers, incsymbols);

    let result = document.getElementById("Result");

    result.textContent = (`Your password: ${password}`)
}





