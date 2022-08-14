import{colourConverter} from "../scripts/colour.js"
import { sumByArray } from "../scripts/functions.js";

var addBtn = document.getElementById("addButton");
var list = document.getElementById("list");

var field = document.getElementsByClassName("roulette-field")[0];

var colours = [];

(function(){
    var parts = [1, 2, 1, 2];
    loadRoulette(parts);

    let listener = function(event){
        let row = document.createElement("div");
        row.classList.add("row");

        let label = document.createElement("span");
        label.classList.add("label");

        let lengthInput = document.createElement("input");
        lengthInput.type = "number";
        lengthInput.min = 1;
        lengthInput.value = 1;
        lengthInput.placeholder = "length";

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "name";

        /*let createBtn = document.createElement("span");
        createBtn.classList.add("btn");
        createBtn.innerText = "↑";
        createBtn.addEventListener("click", listener);*/

        let removeBtn = document.createElement("span");
        removeBtn.classList.add("btn");
        removeBtn.innerText = "×";
        removeBtn.style.color = "#FF0000";
        removeBtn.addEventListener("click", function(){
            row.remove();
            syncLabel();
        });

        row.appendChild(label);
        row.appendChild(lengthInput);
        row.appendChild(nameInput);
        row.appendChild(createBtn);
        row.appendChild(removeBtn);

        list.insertBefore(row, event.target);
        syncLabel();
    };

    addBtn.addEventListener("click", listener);
})();

function loadRoulette(parts){
    for(let i = 0; i < field.children.length; i++) field.children[i].remove();

    let a = sumByArray(parts);
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
        let rgb = colourConverter.HSVtoRGB((360 / Math.PI) * (currentAngle + angle * Math.random()), 1, 1);
        let colour = `rgb(${256 * rgb.r}, ${256 * rgb.g}, ${256 * rgb.b})`;

        console.log(rgb);

        part.style.borderTop = `${colour} solid ${vertical}px`;
        part.style.borderBottom = `${colour} solid ${vertical}px`
        part.style.borderLeft = `transparent solid ${horizontal}px`;
        part.style.borderRight = `transparent solid ${horizontal}px`;

        part.style.transform = `translateX(${radius - horizontal}px) rotate(${currentAngle + angle/2}rad)`;
        currentAngle += angle;
        
        field.appendChild(part);
    }
}

function syncLabel(){
    let rows = list.children;
    for(let i = 0; i < rows.length - 1; i++){
        rows[i].children[0].innerText = i + 1;
    }
}

