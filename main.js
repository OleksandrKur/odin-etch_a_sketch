const defaultResolution = 16;
let currentResolution = defaultResolution;
let currentMode = "monochrome";
const container = document.querySelector(".container");
let radios = document.querySelectorAll('input[type="radio"]');



fillCanvas();
draw(currentMode);


radios.forEach(radio => {
    radio.addEventListener("click", ()=> {
        removeCanvas();
        fillCanvas();
        currentMode = radio.value;
        draw(currentMode);
    })
})


function draw(mode = "monochrome"){
    let canvas = document.querySelectorAll(".pixel");
    canvas.forEach(pixel => {
        pixel.addEventListener("mouseover", event => {
            if (mode === "monochrome"){
                event.target.style.backgroundColor = "#292521";
            }
            else if(mode === "random"){
                event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
            else{
                event.target.style.backgroundColor = `#000000`;
                lowerOpacity(event.target);
            }
        }); 
    })
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
    });
}


function fillCanvas(){
    for (let i = 0; i < currentResolution*currentResolution; i++){
        const pixel = document.createElement("div");
        pixel.style.width = `${100 / currentResolution}%`
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}

function changeResolution(){
    currentResolution = parseInt(prompt("Please enter a number (maximum 100)."));
    if (currentResolution > 0 && currentResolution <= 100){
        removeCanvas();
        fillCanvas(currentResolution);
        draw(currentMode);
    }
    else{
        currentResolution = defaultResolution;
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