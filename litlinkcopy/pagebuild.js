
import itemList from "./master.json" assert {type: "json"};

import { restrictLength } from "/lib/functions/stringOrder.js";
import { copyToClipboard } from "/lib/functions/first.js";

//import css
import itemStyle_0 from "/litlinkcopy/styles/simple_row.css" assert {type: "css"};
import itemStyle_1 from "/litlinkcopy/styles/dynamic_pane.css" assert {type: "css"};
import itemStyle_2 from "/litlinkcopy/styles/string_pane.css" assert {type: "css"};
import itemStyle_3 from "/litlinkcopy/styles/grid-pane.css" assert {type: "css"};
import itemStyle_4 from "/litlinkcopy/styles/download-pane.css" assert {type: "css"};
import itemStyle_5 from "/litlinkcopy/styles/share-dialogue.css" assert {type: "css"};

document.adoptedStyleSheets.push(itemStyle_0);
document.adoptedStyleSheets.push(itemStyle_1);
document.adoptedStyleSheets.push(itemStyle_2);
document.adoptedStyleSheets.push(itemStyle_3);
document.adoptedStyleSheets.push(itemStyle_4);
document.adoptedStyleSheets.push(itemStyle_5);

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
    profile.icon.addEventListener("click", function(){
        showShareDialogue(document.title);
    });

    profile.name = document.createElement("div");
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

    switch(info.type){
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

        default:
            return document.createElement("div");
    }

    return item;
}

function showShareDialogue(title = "", url = location.href){
    let screen = document.createElement("div");
    screen.classList.add("share-screen");
    screen.addEventListener("click", function(event){
        if(event.target == screen) event.target.remove();
    });

    let container = document.createElement("div");
    container.classList.add("share-dialogue");

    let titleView = document.createElement("div");
    titleView.classList.add("share-dialogue-title");
    titleView.innerText = title;

    let urlView = document.createElement("div");
    urlView.classList.add("share-dialogue-url");

    let urlText = document.createElement("span");
    urlText.innerText = url;

    let urlCopy = document.createElement("img");
    urlCopy.classList.add("share-dialogue-url-icon");
    urlCopy.src = "https://utils.kurosaki.love/res/images/hyperlink.svg";
    urlCopy.addEventListener("click", function(){
        copyToClipboard(urlText.innerText);
    });

    let qrcodeContainer = document.createElement("div");
    qrcodeContainer.classList.add("share-dialogue-qrcode-container");

    let qrcodeView = document.createElement("img");
    qrcodeView.classList.add("share-dialogue-qrcode");
    qrcodeView.src = `https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${encodeURI(url)}&choe=UTF-8`;


    screen.appendChild(container);
    container.appendChild(titleView);
    container.appendChild(urlView);
    container.appendChild(qrcodeContainer);

    urlView.appendChild(urlText);
    urlView.appendChild(urlCopy);

    qrcodeContainer.appendChild(qrcodeView);
    
    document.body.insertBefore(screen, document.body.children[0]);
}