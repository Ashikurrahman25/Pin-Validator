
let attemptLefts = 3;
var curretPin ="";


function showPin(){
    document.getElementById("wrong").style.display = 'none';
    document.getElementById("matched").style.display = 'none';
    const pin = generatePin(100000);
    document.getElementById("show-pin-field").value = pin;
}

function generatePin(pinLength){
    const generatedPin = Math.random()*pinLength;
    return generatedPin.toFixed();
   
}

function writePin(number){
    curretPin = curretPin+number;
    document.getElementById("enter-pin-field").value = curretPin; 
}

function deletePin(){
    if(curretPin == "") return;

    curretPin = curretPin.slice(0,-1);
    document.getElementById("enter-pin-field").value = curretPin; 
}

function clearPin(){
    curretPin = "";
    document.getElementById("enter-pin-field").value = curretPin; 
}

function validatePin(){

    if(attemptLefts === 0) {
        alert("Please reload to claim 3 more attempts");
        return;
    }

    const generatedPin = document.getElementById("show-pin-field").value;

    if(generatedPin == ""){
        alert("To generate a pin please click on Generate Pin button.")
        return;
    } 

    if(generatedPin == curretPin)
    {
        document.getElementById("matched").style.display = 'block';
    }
    else{
        document.getElementById("wrong").style.display = 'block';
        attemptLefts--;
        document.getElementById("attempts-left").innerText = 'You have ' + attemptLefts + ' attempts left';
    }

    
    document.getElementById("show-pin-field").value = "";
    document.getElementById("enter-pin-field").value = "";
    curretPin ="";
}