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
    let timeout = null;
    let listener = function(){
        if(timeout == null) timeout = setTimeout(function(){
            let anchor = document.createElement("a");
            anchor.download = `qrcode_${(new Date()).toDateString()}.png`;

            let ajax = new XMLHttpRequest();
            ajax.open("GET", qrcodeDisplay.src, true);
            ajax.responseType = "arraybuffer";
            ajax.onload = function(event){
                const arrayBuffer = ajax.response;
                if(arrayBuffer){
                    const byteArray = new Uint8Array(arrayBuffer);

                    anchor.src = `data:image/png;base64,${encodeURIComponent(String.fromCharCode.apply(null, byteArray).toBase64())}`;
                    anchor.click();
                }
            };
            ajax.send();

            canceller();
        }, 1000);
    };
    let canceller = function(){
        if(timeout != null) clearTimeout(timeout);
    };

    qrcodeDisplay.addEventListener("mousedown", listener);
    qrcodeDisplay.addEventListener("touchstart", listener);
    qrcodeDisplay.addEventListener("mouseup", canceller);
    qrcodeDisplay.addEventListener("touchend", canceller);

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