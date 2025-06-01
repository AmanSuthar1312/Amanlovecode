const pi = 3.14;
let r;
let Submit;
let Answer;
let c;
let s;
let t;

Submit = document.getElementById("mySubmit");

Submit.onclick = function(){
    if ( C = document.getElementById("Circle").checked){
        r=document.getElementById("Radius").value;
        Answer= pi*(r**2);
        document.getElementById("theAnswer").textContent = Answer;

    }
    else if (s=document.getElementById("Square").checked){
        r = document.getElementById("Radius").value;
        Answer = r*4;
        document.getElementById("theAnswer").textContent = Answer;
    }
    else if (document.getElementById("rectangle").checked) {
        let r = document.getElementById("Radius").value;
        let parts = r.trim().split(" ");

        if (parts.length >= 2) {                 
            let a = parseFloat(parts[0]);       
            let b = parseFloat(parts[1]);

            if (!isNaN(a) && !isNaN(b)) {
                let Answer = a * b;
                document.getElementById("theAnswer").textContent = Answer;
            } else {
                document.getElementById("theAnswer").textContent = "Invalid numbers.";
            }
        } else {
            document.getElementById("theAnswer").textContent = "Enter two numbers separated by space.";
        }
    }
    
    else{
        document.getElementById("theAnswer").textContent = ("Enter the valid number");
    }
}

