
import itemList from "./master.json" assert {type: "json"};

//import css
import itemStyle_0 from "/litlinkcopy/styles/simple_row.css" assert {type: "css"};
import itemStyle_1 from "/litlinkcopy/styles/dynamic_pane.css" assert {type: "css"};
import itemStyle_2 from "/litlinkcopy/styles/string_pane.css" assert {type: "css"};
import itemStyle_3 from "/litlinkcopy/styles/tile-pane.css" assert {type: "css"};
import itemStyle_4 from "/litlinkcopy/styles/download-pane.css" assert {type: "css"};

document.adoptedStyleSheets.push(itemStyle_0);
document.adoptedStyleSheets.push(itemStyle_1);
document.adoptedStyleSheets.push(itemStyle_2);
document.adoptedStyleSheets.push(itemStyle_3);
document.adoptedStyleSheets.push(itemStyle_4);

//import main css
import indexStyle from "/litlinkcopy/styles/index.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexStyle);

//define elements
var line;

var profile = {
    icon: null,
    name: null,
    tagShow: null,
    socials: null,
    description: null,
};

export function buildPage(pagedata){
    document.title = pagedata.title || `${pagedata.name}のプロフィール`;
    document.body.style.background = pagedata.appearance.background;

    if(pagedata.appearance.favicon != null){
        let iconLink = document.createElement("link");
        iconLink.rel = "icon";
        iconLink.href = pagedata.appearance.favicon;
        document.head.appendChild(iconLink);
    }

    //define container
    line = document.createElement("div");
    line.id = "line";

    //top
    let profileHolder = document.createElement("div");
    profileHolder.classList.add("profile");

    let iconHolder = document.createElement("div");
    iconHolder.classList.add("profile-icon-holder");

    profile.icon = document.createElement("img");
    profile.icon.classList.add("profile-icon");
    profile.icon.src = pagedata.appearance.icon;

    profile.name = document.createElement("div");
    profile.name.classList.add("profile-name");
    profile.name.classList.add("profile-name");
    profile.name.innerText = pagedata.name;

    profile.tagShow = document.createElement("div");
    profile.tagShow.classList.add("profile-tag-show");
    profile.tagShow.innerText = pagedata.tags.join(" / ");

    profile.socials = document.createElement("div");
    profile.socials.classList.add("profile-socials");
    
    let keys = Object.keys(pagedata.social);
    for(let i = 0; i < keys.length; i++){
        let anchor = document.createElement("a");
        anchor.classList.add("profile-social-icon-anchor");
        anchor.href = pagedata.social[keys[i]];
        
        let img = document.createElement("img");
        img.classList.add("profile-social-icon");
        img.src = {
            "twitter": "https://pages.kurosaki.love/res/images/twitter_dark.svg",
            "youtube": "https://pages.kurosaki.love/res/images/youtube_dark.svg",
        }[keys[i]];

        anchor.appendChild(img);
        profile.socials.appendChild(anchor);
    }


    profile.description = document.createElement("div");
    profile.description.classList.add("profile-description");
    profile.description.innerText = pagedata.description;


    line.appendChild(profileHolder);
    iconHolder.appendChild(profile.icon);
    profileHolder.appendChild(iconHolder);
    profileHolder.appendChild(profile.name);
    profileHolder.appendChild(profile.tagShow);
    profileHolder.appendChild(profile.socials);
    profileHolder.appendChild(profile.description);

    //main stream
    for(let i = 0; i < pagedata.items.length; i++){
        let item = createItem(pagedata.items[i]);
        line.appendChild(item);
    }

    document.body.appendChild(line);
}

function createItem(info){
    let item = document.createElement("div");
    item.classList.add("pane");

    console.log(info);
    switch(info.type){
        case "simple-row":
            {
                item.classList.add("simple-row");

                let anchor = document.createElement("a");
                anchor.href = info.url;

                let body = document.createElement("div");
                body.classList.add("simple-row-body");
                
                let icon = document.createElement("img");
                icon.classList.add("simple-row-icon");
                icon.src = info.icon;

                let textRowHolder = document.createElement("div");
                textRowHolder.classList.add("simple-row-text-row-holder");

                let textRows = [document.createElement("div"), document.createElement("div")];
                textRows[0].classList.add("simple-row-text-row");
                textRows[1].classList.add("simple-row-text-row");

                let title = document.createElement("span");
                title.classList.add("def-font");
                title.classList.add("simple-row-title");
                title.innerText = info.title;

                let description = document.createElement("span");
                description.classList.add("def-font");
                description.classList.add("simple-row-description");
                description.innerText = info.description;

                anchor.appendChild(item);
                item.appendChild(body);
                body.appendChild(icon);
                body.appendChild(textRowHolder);
                textRowHolder.appendChild(textRows[0]);
                textRowHolder.appendChild(textRows[1]);
                textRows[0].appendChild(title);
                textRows[1].appendChild(description);

                return anchor;
            }
            break;

        case "dynamic-pane":
            {
                item.classList.remove("pane");
                item.classList.add("dynamic-pane");
                item.style.background = (info.background.substring(0, 1) == "#") ? info.background : `url(${info.background})`;
                item.style.backgroundSize = "cover";
                item.style.backgroundPosition = "center";

                let anchor = document.createElement("a");
                anchor.classList.add("dynamic-pane-anchor");
                anchor.href = info.url;

                let cover = document.createElement("div");
                cover.classList.add("dynamic-pane-cover");

                let titleRow = document.createElement("div");
                titleRow.classList.add("dynamic-pane-title-row");

                let title = document.createElement("span");
                title.classList.add("dynamic-pane-title");
                title.innerText = info.title;

                let mainPane = document.createElement("div");
                mainPane.classList.add("dynamic-pane-main");

                let iconRow = document.createElement("div");
                iconRow.classList.add("dynamic-pane-icon-row");

                let icon = document.createElement("img");
                icon.classList.add("dynamic-pane-icon");
                if(info.icon != null){
                    icon.src = info.icon;
                }else{
                    icon.style.visibility = "hidden";
                }

                let messageRow = document.createElement("div");
                messageRow.classList.add("dynamic-pane-message-row");

                let message = document.createElement("span");
                message.classList.add("dynamic-pane-message");
                message.innerText = info.message;

                let descriptionRow = document.createElement("div");
                descriptionRow.classList.add("dynamic-pane-description-row");
                
                let description = document.createElement("span");
                description.classList.add("dynamic-pane-description");
                description.innerText = info.description;

                anchor.appendChild(item);
                item.appendChild(cover);
                cover.appendChild(titleRow);
                titleRow.appendChild(title);
                cover.appendChild(mainPane);
                mainPane.appendChild(iconRow);
                iconRow.appendChild(icon);
                mainPane.appendChild(messageRow);
                messageRow.appendChild(message);
                mainPane.appendChild(descriptionRow);
                descriptionRow.appendChild(description);

                return anchor;
            }
            break;

        case "string-pane":
            {
                let titleRow = document.createElement("div");
                titleRow.classList.add("string-pane-title-row");

                let title = document.createElement("span");
                title.classList.add("def-font");
                title.classList.add("string-pane-title");
                title.innerText = info.title;

                let description = document.createElement("span");
                description.classList.add("def-font");
                description.classList.add("string-pane-description");
                description.innerText = info.description;

                item.appendChild(titleRow);
                titleRow.appendChild(title);
                item.appendChild(description);
            }
            break;

        case "tile-pane":
            {
                let rows = 3, columns = 4;
                let tileMargin = 4;

                let tileHolder = document.createElement("div");
                tileHolder.classList.add("tile-pane");
                tileHolder.style.aspectRatio = columns / rows;
                tileHolder.style.gridTemplate = `${100 / rows}% / ${100 / columns}%`;


                for(let i = 0; i < rows * columns; i++){
                    let pos = {
                        x: i % columns,
                        y: Math.floor(i / columns),
                    };

                    let tile = document.createElement("div");
                    tile.classList.add("tile-pane-item");
                    tile.style.background = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"][i % 6];
                    tile.style.gridRow = pos.y;
                    tile.style.gridColumn = pos.x;
                    
                    tileHolder.appendChild(tile);
                }

                item.appendChild(tileHolder);
            }
            break;

        case "download-pane":
            {
                let holder = document.createElement("div");
                holder.classList.add("downlaod-pane");

                item.appendChild(holder);
            }
            break;

        default:
            return document.createElement("div");
    }

    return item;
}

function showShareDialogue(title, url){

}