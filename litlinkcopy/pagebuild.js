import pageData from "./pagedata.json" assert {type: "json"};
import itemList from "./styles/master.json" assert {type: "json"};


(function(){
    importItemmStyles();


})();


async function importItemmStyles(){
    for(let i = 0; i < itemList.length; i++){
        let style = await import(itemList[i].path, {assert: {type: "css"}}).then(module => {
            console.log(module);
            document.adoptedStyleSheets.push(module);
        }).catch(err => {
            console.log(err.message);
        });
    }
}