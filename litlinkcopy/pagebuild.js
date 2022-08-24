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
    profile.innerText = Array.prototype.concat(new Array(), pageData.tags).join(" / ");

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


    iconHolder.appendChild(profile.icon);
    line.appendChild(iconHolder);
    line.appendChild(profile.name);
    line.appendChild(profile.tagShow);
    line.appendChild(profile.socials);
    line.appendChild(profile.description);

    //main stream
    for(let i = 0; i < pageData.items.length; i++){
        let item = createItem(pageData.items[i]);
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


            break;
    }

    return item;
}