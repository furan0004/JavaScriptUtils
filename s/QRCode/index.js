import indexStyle from "./index.css" assert {type: "css"};
document.adoptedStyleSheets.push(indexStyle);

var qrcodeDisplay = document.getElementById("qrcodeDisplay");

var textarea = document.getElementById("subject");
var qrSize = document.getElementById("qrSize");
var ecLevel = document.getElementById("ecLevel");

function reloadQRCode(){
    let text = textarea.value;

    qrcodeDisplay.src = `https://chart.googleapis.com/chart?cht=qr&chs=${qrSize.value}&chl=${encodeURI(text)}&chld=${ecLevel.value}`;
}

(function(){
    textarea.addEventListener("change", reloadQRCode);
    textarea.addEventListener("keypress", function(event){
        if(event.keyCode == 13){
            reloadQRCode();
            event.preventDefault();
        }
    });

    qrSize.addEventListener("change", reloadQRCode);
    ecLevel.addEventListener("change", reloadQRCode);

    textarea.value = "";
    qrSize.selectedIndex = 5;

    reloadQRCode();
})();