const container = document.querySelector(".container");
let resolutionButton = document.getElementById("set_resolution");

fillCanvas();
draw("test");


function draw(mode = 'black'){
    let canvas = document.querySelectorAll(".pixel");
    if (mode === "black"){
        canvas.forEach(pixel => {
            pixel.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = "#292521";
            });
        })
    }
    else if(mode === "random"){
        canvas.forEach(pixel => {
            pixel.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            });
        })       
    }
    else{
        canvas.forEach(pixel => {
            pixel.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = `#000000`;
                lowerOpacity(event.target);
            });
        })      
    }
}

function removeCanvas(){
    let canvas = document.querySelectorAll(".pixel");
    canvas.forEach(pixel => {
        pixel.remove();
    });
}

function erase(){
    let canvas = document.querySelectorAll(".pixel");
    canvas.forEach(pixel => {
        pixel.style.backgroundColor = "unset";
        console.log(pixel.style.backgroundColor);
    });
}


function fillCanvas(squares = 16){
    for (let i = 0; i < squares*squares; i++){
        const pixel = document.createElement("div");
        pixel.style.width = `${100 / squares}%`
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}

function changeResolution(){
    let resolution = parseInt(prompt("Please enter a number (maximum 100)."));
    if (resolution > 0 && resolution <= 100){
        removeCanvas();
        fillCanvas(resolution);
        draw();
    }
    else{
        alert("Valid input: number (1-100)")
    }

}

function lowerOpacity(element){
    let opacity = 100;
    element.style.opacity = `${opacity}%`;
    let fadeTimer = setInterval(() => {
        if (opacity == 0){
            clearInterval(fadeTimer);
        }
        else{
            opacity -= 10;
            element.style.opacity = `${opacity}%`;
        }
    },100)
}