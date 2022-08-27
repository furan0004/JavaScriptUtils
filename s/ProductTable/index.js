import { convertToNthDecimal } from "/lib/functions/calcuratiion.js"

import indexStyle from "./index.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexStyle);

var input = document.getElementById("base");
var table = document.getElementById("table");

var listener = function(event){
    syncTable(event.target.value);
};

input.addEventListener("change", listener);
syncTable(input.value);

function clearTable(){
    let rows = table.children;
    for(let i = rows.length - 1; i >= 0; i--) rows[i].remove();
}

function syncTable(n){
    clearTable();

    for(let i = 0; i < n; i++){
        let row = document.createElement("tr");
        table.appendChild(row);
        
        for(let j = 0; j < n; j++){
            let flag = i * j == 0;
            let cell = document.createElement(flag ? "th" : "td");
            cell.innerText = convertToNthDecimal(flag ? i + j : i * j, n);

            row.appendChild(cell);
        }
    }
}