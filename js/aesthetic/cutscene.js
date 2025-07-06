const start = document.getElementById("Start");
const img1 = document.getElementById("imagem1");
const img2 = document.getElementById("imagem2");
const img3 = document.getElementById("imagem3");
const area1 = document.getElementById("clickarea1");
const area2 = document.getElementById("clickarea2");
const area3 = document.getElementById("clickarea3");
const audio = document.getElementById("startmusic");

area1.style.display = "none";
area2.style.display = "none";
area3.style.display = "none";


start.addEventListener("click", function() {
    start.style.display = "none";
    img1.src = "../../img/GIFs/startscreen.gif";
    audio.muted = false;
    audio.play();
    
    setTimeout(() => {
    img1.src = "../../img/fundos/backmorning.jpeg";
    img3.src = "../../img/fundos/mesa.png"
    audio.pause();

    area1.style.display = "block";
    area2.style.display = "block";
    area3.style.display = "block";

    }, 12000);


});