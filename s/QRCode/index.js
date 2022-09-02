import indexStyle from "./index.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexStyle);

var qrcodeDisplay = document.getElementById("qrcodeDisplay");

var textarea = document.getElementById("subject");
var qrSize = document.getElementById("qrSize");

(function(){
    textarea.addEventListener("change", function(){
        let text = textarea.value;

        qrcodeDisplay.src = `https://chart.googleapis.com/chart?cht=qr&chs=${qrSize.value}&chl=${encodeURI(text)}`;
    });

    textarea.value = "";
})();