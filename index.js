import pageList from "./data/pages.json" assert {type: "json"};
import { importStyles } from "./lib/functions/first.js";

(function(){
    importStyles("./index.css", "./styles/indexListItem.css");

    let line = document.getElementsByClassName("line")[0];
    for(let i = 0; i < pageList.length; i++) if(!pageList[i].hidden){
        let item = createListItem(pageList[i]);
        line.appendChild(item);
    }
})();

function createListItem(info){
    let anchor = document.createElement("a");
    anchor.classList.add("index-item-anchor");
    anchor.href = info.path;

    let row = document.createElement("div");
    row.classList.add("index-item-row");

    let body = document.createElement("div");
    body.classList.add("index-item-body");

    let icon = document.createElement("img");
    icon.classList.add("index-item-icon");
    if(info.iconPath){
        icon.src = info.iconPath;
    }

    let textRows = document.createElement("div");
    textRows.classList.add("index-item-text-rows");

    let titleRow = document.createElement("div");
    titleRow.classList.add("index-item-title-row");

    let title = document.createElement("span");
    title.classList.add("index-item-title");
    title.innerText = info.name;

    let description = document.createElement("span");
    description.classList.add("index-item-text");
    description.innerText = info.description;
    
    anchor.appendChild(row);
    row.appendChild(body);
    body.appendChild(icon);
    body.appendChild(textRows);
    textRows.appendChild(titleRow);
    textRows.appendChild(description);

    titleRow.appendChild(title);

    return anchor;
}