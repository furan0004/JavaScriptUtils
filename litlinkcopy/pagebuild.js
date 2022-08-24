import pageData from "./pagedata.json" assert {type: "json"};
import itemList from "./styles/master.json" assert {type: "json"};


(function(){
    importItemmStyles();

})();


async function importItemmStyles(){
    for(let i = 0; i < itemList.length; i++){
        let style = getStyle(itemList[i].path);
        console.log(style, Object.keys(style.default));
        document.adoptedStyleSheets.push(style.default.default);
    }
}

async function getStyle(path){
    const {default: aaa} = await import(path, {assert: {type: "css"}}).then(module => {
        console.log(module);
    }).catch(err => {
        console.log(err.message);
    });
}