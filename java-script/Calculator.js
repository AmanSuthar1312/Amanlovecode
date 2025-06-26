 const display = document.getElementById("displayWindow");

function displayAppend(input){
    display.value += input; 
}

function backSpace(){
    display.value = display.value.slice(0,-1);
}

function result(){
    try{
        display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error";
        setTimeout(() => {display.value = "";}, 1000);

    }
}

