const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
    // console.log('after input', display.value);
}

function clearDisplay(){
    display.value = '';
}

function delfunc(){
    display.value = display.value.toString().slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error'
    }
    
}