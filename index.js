import pageList from "./data/pages.json" assert {type: "json"};
import { importStyles } from "./lib/functions/first.js";

(function(){
    importStyles(["/index.css", "/styles/indexListItem.css"]);

    let line = document.getElementsByClassName("line")[0];
    for(let i = 0; i < pageList.length; i++) if(!pageList[i].hidden){
        let item = createListItem(pageList[i]);
        line.appendChild(item);
    }
})();

function createListItem(info){
    /* initialise */
    let anchor = document.createElement("a");
    let row = document.createElement("div");
    let body = document.createElement("div");
    let icon = document.createElement("img");
    let textRows = document.createElement("div");
    let titleRow = document.createElement("div");
    let title = document.createElement("span");
    let description = document.createElement("span");

    /* set classes */
    anchor.classList.add("index-item-anchor");
    row.classList.add("index-item-row");
    body.classList.add("index-item-body");
    icon.classList.add("index-item-icon");
    textRows.classList.add("index-item-text-rows");
    titleRow.classList.add("index-item-title-row");
    title.classList.add("index-item-title");
    description.classList.add("index-item-text");

    /* other properties */
    anchor.href = info.path;
    title.innerText = info.name;
    description.innerText = info.description;
    
    if(info.iconPath){
        icon.src = info.iconPath;
    }

    /* append */
    anchor.appendChild(row);
    row.appendChild(body);
    body.appendChild(icon);
    body.appendChild(textRows);
    textRows.appendChild(titleRow);
    textRows.appendChild(description);

    titleRow.appendChild(title);

    return anchor;
}