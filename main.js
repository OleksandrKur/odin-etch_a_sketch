const NUMBEROFSQARES = 16;
const container = document.querySelector(".container");
fillCanvas();


let canvas = document.querySelectorAll(".pixel");
canvas.forEach(pixel => {
    pixel.addEventListener("click", event => {
        event.target.style.backgroundColor = "black";
    })
})




function fillCanvas(){
    for (let i = 0; i < NUMBEROFSQARES*NUMBEROFSQARES; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}
