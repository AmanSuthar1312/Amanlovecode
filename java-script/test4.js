const cel = document.getElementById("Celsius");
const kel = document.getElementById("Kelvin");
let Submit = document.getElementById("mySubmit");
let result = document.getElementById("result");
let temp;
let tempvalue;

Submit.onclick = function(){
    temp = Number(document.getElementById("Temp").value);

    if (cel.checked){
        tempvalue = (temp - 273.15);
        result.textContent = (Number(tempvalue.toFixed(2))+"°C");

    }
    else if (kel.checked){
        tempvalue = (temp + 273.15);
        result.textContent = Number(tempvalue.toFixed(2)+"K");
    }
    else{
        result.textContent = ("Enter a Valid number");
    }
}
