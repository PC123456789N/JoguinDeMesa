const start = document.getElementById("Start");
const img1 = document.getElementById("imagem1");
const img2 = document.getElementById("imagem2");
const img3 = document.getElementById("imagem3");

const audio = document.getElementById("startmusic");

start.addEventListener("click", function() {
    start.style.display = "none";
    img1.src = "../../img/GIFs/startscreen.gif";
    audio.muted = false;
    audio.play();
    
    setTimeout(() => {
    img1.src = "../../img/fundos/backmorning.jpeg";
    img3.src = "../../img/fundos/mesa.png"
    audio.pause()
    }, 12000);


});