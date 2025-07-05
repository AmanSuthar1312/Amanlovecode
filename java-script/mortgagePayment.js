function CalculateEMI() {
    //------Gets princciple amount from user----
    const principleAmount = document.getElementById('emiAmount').value;
    //------Gets  amount of time from user----
    const emiTimeDuration = document.getElementById('emiTime').value;
    //------Gets intrest rate from user----
    let emiIntrestRate = document.getElementById('interestRate').value;
    //------Converts Persentage of rate to decimal value----
    emiIntrestRate = emiIntrestRate/100;
    //------Convert Years to Months----
    let Monthtime = emiTimeDuration*12;
    //--------Checks for The type  Repayments or intrust only----
    const repaymentType = document.getElementById('repayment').checked;

    const interestOnly = document.getElementById('interestOnly').checked;
    
    //-----------Calculate the Simple Intrest (Principle+Intrest A=P(1+rt)--

    let Totalrepayment =principleAmount*(1+emiIntrestRate*emiTimeDuration)
    //------------- Show to only 2 decimal point Acurracy-
        Totalrepayment = Totalrepayment.toFixed(2);
    //-----------Sets total payment over the term-------
    let DisplayTrepayments = document.getElementById("totalRepayment");
    DisplayTrepayments.textContent = (`${Totalrepayment}Rs`);
    
    let Monthlyandintrust = document.getElementById("Monthlyandintrust");

    let repaymentValue = document.getElementById("repaymentValue");


    //--------Checked "logics"------
    if(repaymentType){
        let Monthlyrepayment = Totalrepayment/Monthtime;

        Monthlyrepayment = Monthlyrepayment.toFixed(2);

        Monthlyandintrust.textContent =(`Monthly Repayments`);

        repaymentValue.textContent = (`${Monthlyrepayment}Rs`);

    }
    else if(interestOnly){
        Monthlyandintrust.textContent = "Intrest Only";

        Intrest = Totalrepayment- principleAmount;

        repaymentValue.textContent = (`${Intrest}Rs`);

    }
}
