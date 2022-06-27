let cNegro = document.getElementById("cNegro")
let cVerde = document.getElementById("cVerde")
let cAmarillo = document.getElementById("cAmarillo")

window.onload = updateClock;

var totalTime = 60;

function updateClock() {
  document.getElementById('contador').innerHTML = totalTime;
  if(totalTime==0){
    console.log('Final');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}

function clicarBoton () {
    
}