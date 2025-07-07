const start = document.getElementById("Start");
const img1 = document.getElementById("imagem1");
const img2 = document.getElementById("imagem2");
const img3 = document.getElementById("imagem3");
const area1 = document.getElementById("clickarea1");
const area2 = document.getElementById("clickarea2");
const area3 = document.getElementById("clickarea3");
const audio = document.getElementById("startmusic");

img1.src = "../../img/fundos/StartScreen.png";
start.src = "../../img/fundos/StartScreen.png";
img3.style.display = "none";


start.addEventListener("click", function(){
    start.src = "../../img/GIFs/video.mp4"
    start.muted = false;
    start.play();
    
    
}, {once: true});

start.onended = function() {
    start.style.display = "none";
    img1.src = "../../img/fundos/backmorning.jpeg";
    img3.src = "../../img/fundos/mesa.png";
    img3.style.display = "block";
    };

   

