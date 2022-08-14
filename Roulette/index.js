import{colourConverter} from "../scripts/colour.js"
import { sumByArray } from "../scripts/functions.js";

var spinBtn = document.getElementById("spin");
var syncBtn = document.getElementById("sync");

var addBtn = document.getElementById("addButton");
var list = document.getElementById("list");

var field = document.getElementsByClassName("roulette-field")[0];

var time;

(function(){
    spinBtn.addEventListener("click", function(event){
        let labelText = ["Spin!", "Stop!"];
        let label = event.target.innerText;
        let index = labelText.indexOf(label);

        let interval;

        switch(index){
            case 0:
                time = 0;
                interval = setInterval(function(){
                    time++;
                }, 1);
                break;

            case 1:
                let deg = (time / 25 * 36 - list.children[0].children[1].value) % 360;
                let pos = 0;
                console.log(deg, time, deg / 180);
                for(let i = 0; i < list.children.length; i++){
                    if(pos > deg / 180){
                        console.log(list.children[i - 1].children[0].innerText);
                        break;
                    }

                    pos += list.children[i].children[1].value;
                }

                clearInterval(interval);
                time = 0;
                break;
        }

        field.style.animationPlayState = ["paused", "running"][1 - index];
        event.target.innerText = labelText[1 - index]; 
    });

    syncBtn.addEventListener("click", function(){
        let parts = [];

        let rows = list.children;
        for(let i = 0; i < rows.length - 1; i++){
            let part = {
                length: parseInt(rows[i].children[1].value),
                colour: null,
            };

            parts.push(part);
        }

        loadRoulette(parts);
    });

    let addListener = function(event){
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
        createBtn.addEventListener("click", addListener);*/

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
        //row.appendChild(createBtn);
        row.appendChild(removeBtn);

        list.insertBefore(row, event.target);
        syncLabel();
    };

    addBtn.addEventListener("click", addListener);

    for(let i = 0; i < 3; i++) addBtn.click();
    syncBtn.click();
})();

function loadRoulette(parts){
    for(let i = field.children.length - 1; i >= 0; i--) field.children[i].remove();
    
    let a = 0;
    for(let i = 0; i < parts.length; i++) a += parts[i].length;

    let radius = 150;
    field.style.width = `${radius*2}px`;
    field.style.borderRadius = `${radius}px`;

    let currentAngle = -Math.PI * parts[0].length / (2 * a);
    for(let i = 0; i < parts.length; i++){
        let part = document.createElement("div");
        part.classList.add("roulette-part");

        let angle = Math.PI * parts[i].length / a;
        let vertical = radius;
        let horizontal = vertical * Math.tan(angle / 2);
        let rgb = colourConverter.HSVtoRGB((360 / Math.PI) * (currentAngle + angle * Math.random()), 1, 1);
        let colour = `rgb(${256 * rgb.r}, ${256 * rgb.g}, ${256 * rgb.b})`;

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

