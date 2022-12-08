var go = document.getElementById("go")
var timer;
var startInput;

function startcount(){
    timer =setInterval(room, 1000);
    document.getElementById("zero").innerHTML = go.value
    startInput = go.value;
    go.value = "";
}

function room(){
    startInput--
    document.getElementById("zero").innerHTML = startInput;
    if(startInput == 0){
        Pausecount()
    }
}

function pausecount(){
    clearInterval(timer)
}

function resetcount(){
    pausecount()
    document.getElementById("zero").innerHTML = "0";
}