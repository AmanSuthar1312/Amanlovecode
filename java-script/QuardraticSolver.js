const Submit = document.getElementById("Submit");

Submit.onclick  = function(){
    Avalue = Number(document.getElementById("avalue").value);
    Bvalue = Number(document.getElementById("bvalue").value);
    Cvalue = Number(document.getElementById("cvalue").value);
    
    let Result = document.getElementById("Answers");

    // Valid Quadratic check

    if (Avalue === 0){
        Result.textContent = (`Enter a valid no 👎`);
    }
    
    let discriminant = Math.sqrt((Bvalue**2)-(4*Avalue*Cvalue));
    let onerealroot = false;
    let twodistintrealroot = false;
    let norealroot = false;

    // Discriminant Check

    if(discriminant === 0){
        onerealroot = true;
    }
    else if (discriminant > 0 ){
        twodistintrealroot = true;
    }
    else if (discriminant < 0){
        norealroot = true;
    }

    // discriminant Value find


    let px = (((-Bvalue)+discriminant)/2*Avalue);

    let nx = (((-Bvalue)-discriminant)/2*Avalue);

    if(onerealroot && px == nx){
        Result.textContent = (`The Equation has one real root ${px}`);
    }

    else if(twodistintrealroot){
        Result.textContent = (`The Equation has Two distint  real root ${px} and ${nx}`);
    }

    else if(norealroot){
        Result.textContent = (`The Equation has no real root ${px} and ${nx}`);
    }

}