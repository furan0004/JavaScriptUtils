import pageList from "./data/pages.json" assert {type: "json"};

import indexListItemStyle from "./styles/indexListItem.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexListItemStyle);

(function(){
    let line = document.getElementsByClassName("line")[0];
    for(let i = 0; i < pageList.length; i++) if(!pageList[i].hidden){
        let item = createListItem(pageList[i]);
        line.appendChild(item);
    }
})();

function createListItem(info){
    let anchor = document.createElement("a");
    anchor.href = info.path;

    let row = document.createElement("div");
    row.classList.add("index-item-row");

    let body = document.createElement("div");
    body.classList.add("index-item-body");

    let icon = document.createElement("img");
    icon.classList.add("index-item-icon");
    if(info.iconAvailable){
        icon.background = "#000000";
    }else{
        icon.src = info.iconPath | `${info.path}/icon.png`;
    }

    let textRows = document.createElement("div");
    let textRow = [document.createElement("div"), document.createElement("div")];
    textRow[0].classList.add("index-item-text-row");
    textRow[1].classList.add("index-item-text-row");

    let title = document.createElement("span");
    title.classList.add("index-item-title");
    title.innerText = info.name;

    let description = document.createElement("div");
    description.classList.add("index-item-text");
    
    anchor.appendChild(row);
    row.appendChild(body);
    body.appendChild(icon);
    body.appendChild(textRows);
    textRows.appendChild(textRow[0]);
    textRows.appendChild(textRow[1]);

    textRow[0].appendChild(title);
    textRow[1].appendChild(description);

    return anchor;
}