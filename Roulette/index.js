import{colourConverter} from "../scripts/colour.js"

var parts = [1, 2, 1, 2];

var field = document.getElementsByClassName("roulette-field")[0];

(function(){
    let a = sum(parts);
    let colourElements = "ABCD";

    let radius = 150;
    field.style.width = `${radius*2}px`;
    field.style.borderRadius = `${radius}px`;

    let currentAngle = -Math.PI * parts[0] / (2 * a);
    for(let i = 0; i < parts.length; i++){
        let part = document.createElement("div");
        part.classList.add("roulette-part");

        let angle = Math.PI * parts[i] / a;
        let vertical = radius;
        let horizontal = vertical * Math.tan(angle / 2);
        let rgb = colourConverter.HSVtoRGB(360 * Math.random(), 1, 1);
        let colour = colourConverter.RGBtoColourCode(rgb.r, rgb.g, rgb.b);

        part.style.borderTop = `${colour} solid ${vertical}px`;
        part.style.borderBottom = `${colour} solid ${vertical}px`
        part.style.borderLeft = `transparent solid ${horizontal}px`;
        part.style.borderRight = `transparent solid ${horizontal}px`;

        part.style.transform = `translateX(${radius - horizontal}px) rotate(${currentAngle + angle/2}rad)`;
        currentAngle += angle;
        
        field.appendChild(part);
    }
})();


function sum(array){
    let result = 0;
    for(let i = 0; i < array.length; i++) result += array[i];

    return result;
}