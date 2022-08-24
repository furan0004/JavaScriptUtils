import pageData from "./pagedata.json" assert {type: "json"};
import itemList from "./styles/master.json" assert {type: "json"};


(function(){
    a();


})();


async function importItemmStyles(){
    for(let i = 0; i < itemList.length; i++){
        let style = await import(itemList[i].path, {assert: {type: "css"}}).then(module => {
            document.adoptedStyleSheets.push(style);
        }).catch(err => {
            console.log(err.message);
        });
    }
}

function a(){
    for(let i = 0; i < itemList.length; i++){
        let style = import(itemList[i].path, {assert: {type: "css"}});
        document.adoptedStyleSheets.push(style);
    }
}