// This project is created by agraj.

//    keylogger 
const startBtn= document.getElementById("start-btn");
const stopBtn= document.getElementById("stop-btn");
const logDiv= document.getElementById("log");
const stateDiv= document.getElementById("state");


startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",funDown);
    document.addEventListener("keyup",funUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",funDown);
    document.removeEventListener("keyup",funUp);
    logDiv.textContent ="";
    stateDiv.textContent =" ";
    startBtn.disabled = false;
    stopBtn.disabled = true;    
})

function funDown(e){
    logDiv.textContent=`key ${e.key} is pressed down`;
    stateDiv.textContent="key is down";
}
function funUp(e){
    logDiv.textContent=`key ${e.key} is pressed Up`;
    stateDiv.textContent="key is up";
}

//  Mouse Click Logger

const startBtn2 = document.getElementById("start-btn2");
const stopBtn2 = document.getElementById("stop-btn2");
const logDiv2 = document.getElementById("log2");

startBtn2.addEventListener("click",()=>{
    document.addEventListener("click",funLeft);
    document.addEventListener("contextmenu",funRight);
    startBtn2.disabled = true;
    stopBtn2.disabled = false;
})
stopBtn2.addEventListener("click",()=>{
    document.removeEventListener("click",funLeft);
    document.removeEventListener("contextmenu",funRight);
    logDiv2.textContent="";
    startBtn2.disabled = false;
    stopBtn2.disabled = true; 
})

function funLeft(e){
    if(e.button===0)
    {
        //agraj
        logDiv2.textContent = "Left Click";
    }
    
}
function funRight(e){
    e.preventDefault();
    logDiv2.textContent = "Right Click";
}