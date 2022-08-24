import pageData from "./pagedata.json" assert {type: "json"};
import itemList from "./styles/master.json" assert {type: "json"};

//import css
import itemStyle_0 from "/litlinkcopy/styles/simple_row.css" assert {type: "css"};
import itemStyle_1 from "/litlinkcopy/styles/dynamic_pane.css" assert {type: "css"};
import itemStyle_2 from "/litlinkcopy/styles/string_pane.css" assert {type: "css"};

document.adoptedStyleSheets.push(itemStyle_0);
document.adoptedStyleSheets.push(itemStyle_1);
document.adoptedStyleSheets.push(itemStyle_2);

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


(function(){
    document.title = pageData.title || `${pageData.name}のプロフィール`;
    document.body.style.background = pageData.appearance.background;

    let iconLink = document.createElement("link");
    iconLink.rel = "icon";
    iconLink.href = pageData.appearance.icon;
    

    //
    line = document.createElement("div");
    line.id = "line";

    //top
    let profileHolder = document.createElement("div");
    profileHolder.classList.add("profile");

    let iconHolder = document.createElement("div");
    iconHolder.classList.add("profile-icon-holder");

    profile.icon = document.createElement("img");
    profile.icon.classList.add("profile-icon");
    profile.icon.src = pageData.appearance.icon;

    profile.name = document.createElement("div");
    profile.name.classList.add("profile-name");
    profile.name.innerText = pageData.name;

    profile.tagShow = document.createElement("div");
    profile.tagShow.classList.add("profile-tag-show");
    console.log(typeof pageData.tags, pageData.tags);
    profile.tagShow.innerText = pageData.tags.join(" / ");

    profile.socials = document.createElement("div");
    profile.socials.classList.add("profile-socials");
    
    let keys = Object.keys(pageData.social);
    for(let i = 0; i < keys.length; i++){
        let anchor = document.createElement("a");
        anchor.classList.add("profile-social-icon-anchor");
        anchor.href = pageData.social[keys[i]];
        
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
    profile.description.innerText = `Description\n${pageData.description}`;


    line.appendChild(profileHolder);
    iconHolder.appendChild(profile.icon);
    profileHolder.appendChild(iconHolder);
    profileHolder.appendChild(profile.name);
    profileHolder.appendChild(profile.tagShow);
    profileHolder.appendChild(profile.socials);
    profileHolder.appendChild(profile.description);

    //main stream
    for(let i = 0; i < pageData.items.length; i++){
        let item = createItem(pageData.items[i]);
        line.appendChild(item);
    }

    document.body.appendChild(line);
})();


async function importItemmStyles(){
    for(let i = 0; i < itemList.length; i++){
        
    }
}

function createItem(info){
    let item = document.createElement("div");
    item.classList.add("pane");

    switch(info.type){
        case "simple-row":
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
            title.classList.add("simple-row-title");
            title.innerText = info.title;

            let description = document.createElement("span");
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
            break;
    }

    return item;
}