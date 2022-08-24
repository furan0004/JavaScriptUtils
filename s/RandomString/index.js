import { toggleButton } from "/scripts/toggleButton.js";
import { restrictLength } from "/scripts/functions.js";
import { createRandomString } from "/scripts/functions.js";
import characters from "./characters.json" assert {type: "json"};

import indexStyle from "./index.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexStyle);

(function(){
    let resultDisplay = document.getElementById("result");
    resultDisplay.addEventListener("dblclick", function(event){
        let text = event.target.value;
        event.target.select();
        event.target.setSelectionRange(0, text.length);
        navigator.clipboard.writeText(text);

        console.log(text);
    });

    let lengthInput = document.getElementById("genLen");

    let genBtn = document.getElementById("genBtn");
    genBtn.addEventListener("click", function(){
        let map = "";

        let items = document.getElementsByClassName("toggle_item");
        for(let i = 0; i < items.length; i++){
            let bool = false;
            let list = items[i].classList;
            for(let j = 0; j < list.length; j++) if(list[j] == toggleButton.CLASS.TRUE){
                bool = true;
                break;
            }

            if(bool){
                let keys = items[i].innerText.split("\n")[0].split(" - ");
                map += (keys.length == 1) ? characters[keys[0]] : characters[keys[0]][keys[1]];
            }            
        }

        resultDisplay.value = createRandomString(map, lengthInput.value);
    });

    let holders = document.getElementsByClassName("toggle-button-holder");

    let keys = Object.keys(characters);
    for(let i = 0; i < keys.length; i++){
        let section = (keys[i] == "Others") * 1;

        if(typeof characters[keys[i]] == "string"){
            let item = new toggleButton(`${keys[i]}\n${restrictLength(characters[keys[i]], 5, "...")}`);
            holders[section].appendChild(item.get());
        }else{
            let _keys = Object.keys(characters[keys[i]]);
            for(let j = 0; j < _keys.length; j++){
                let item = new toggleButton(`${keys[i]} - ${_keys[j]}\n${restrictLength(characters[keys[i]][_keys[j]], 5, "...")}`);
                holders[section].appendChild(item.get());
            }
        }
    }

    for(let i = 0; i <= 1; i++){
        let item = document.getElementById(`group${i}`);
        item.addEventListener("click", function(){
            let a = holders[i].style.display; 
            holders[i].style.display = (a == "none") ? "flex" : "none";
        });

        let interval = null;
        let time = 0;
        item.addEventListener("mousedown", function(){
            interval = setInterval(function(){
                time++;

                if(time % 10 == 0){
                    for(let j = 0; j < holders[i].children.length; j++){
                        let child = holders[i].children[j];
                        if(child.className.indexOf((time / 10) % 2 == 0 ? toggleButton.CLASS.TRUE : toggleButton.CLASS.FALSE) != -1) child.click();
                    }

                    clearInterval(interval);
                }
            }, 100);
        });

        item.addEventListener("mouseup", function(){
            clearInterval(interval);
        });
    }

    document.getElementById(`group1`).click();
})();



