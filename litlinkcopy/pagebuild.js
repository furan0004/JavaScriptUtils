import pageData from "./pagedata.json" assert {type: "json"};
import itemList from "./styles/master.json" assert {type: "json"};

//import css
import itemStyle_0 from "/litlinkcopy/styles/simple_row.css" assert {type: "css"};
import itemStyle_1 from "/litlinkcopy/styles/dynamic_pane.css" assert {type: "css"};
import itemStyle_2 from "/litlinkcopy/styles/string_pane.css" assert {type: "css"};

document.adoptedStyleSheets(itemStyle_0);
document.adoptedStyleSheets(itemStyle_1);
document.adoptedStyleSheets(itemStyle_2);


(function(){

})();


async function importItemmStyles(){
    for(let i = 0; i < itemList.length; i++){
        
    }
}