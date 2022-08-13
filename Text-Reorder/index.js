const TOC = [
    "Invert",
    "Reorder",
    "Shuffle",
    "Repeat",
    "Shift",
    "Replace",
];

var toc = document.getElementById("toc");
var buttons = document.getElementsByTagName("button");
var resultFields = [];

(function(){
    for(let i = 0; i < TOC.length; i++){
        let row = document.createElement("div");

        let anchor = document.createElement("a");
        anchor.href = `#${TOC[i].toLowerCase()}`;
        anchor.innerText = TOC[i];

        row.appendChild(anchor);
        toc.appendChild(row);
    }


    let fields = [];
    fields = Array.prototype.concat.apply(fields, document.getElementsByTagName("textarea"));
    fields = Array.prototype.concat.apply(fields, document.getElementsByTagName("input"));

    for(let i = 0; i < fields.length; i++) switch(true){
        case fields[i].placeholder == "Target" || fields[i].tagName.toLowerCase() == "input":
            let listener = function(event){
                let name = event.target.name;
                let fieldsByName = document.getElementsByName(name);
                let options = [];
                for(let j = 2; j < fieldsByName.length; j++) options.push(fieldsByName[j].value);
            
                switch(TOC.indexOf(name.charAt(0).toUpperCase() + name.substring(1, name.length))){
                    case 0:
                        fieldsByName[1].value = invert(fieldsByName[0].value);
                        break;
            
                    case 1:
                        fieldsByName[1].value = reorder(fieldsByName[0].value, parseInt(options[0]));
                        break;

                    case 2:
                        fieldsByName[1].value = shuffleCharacters(fieldsByName[0].value);
                        break;
                        
                    case 3:
                        fieldsByName[1].value = repeat(fieldsByName[0].value, parseInt(options[0]));
                        break;

                    case 4:
                        fieldsByName[1].value = shift(fieldsByName[0].value, parseInt(options[0]));
                        break;

                    case 5:
                        fieldsByName[1].value = fieldsByName[0].value.replaceAll(options[0], options[1]);
                        break;
                }
            };

            fields[i].addEventListener("change", listener);
            fields[i].addEventListener("keypress", function(event){
                if(event.keyCode == 13 && !event.shiftKey){
                    listener(event);
                    event.preventDefault();
                }
            });

            console.log(fields[i]);

            break;

        case fields[i].placeholder == "Result":
            fields[i].readOnly = true;
            fields[i].addEventListener("click", function(){
                let text = fields[i].value;
                fields[i].select();
                fields[i].setSelectionRange(0, text.length);
                navigator.clipboard.writeText(text);
            });
            break;
    }
})();


function invert(str){
    let result = "";
    for(let i = 0; i < str.length; i++) result += str.charAt(str.length - 1 - i);

    return result;
}

function reorder(target, rule){
    let result = "";
    for(let i = 0; i < rule; i++) for(let j = 0; j < Math.ceil(target.length/rule); j++){
        let index = j * rule + i;
        if(index >= target.length) break;

        result += target.charAt(index);
    }

    return result;
}

function shuffleCharacters(str){
    str = str.split("");
    let result = [];
    while(str.length > 0){
        let index = Math.floor(str.length * Math.random());
        result.push(str[index]);
        str.splice(index, 1);
    }

    return result.join("");
}

function repeat(str, count = 1){
    let result = "";
    for(let i = 0; i < count; i++) result += str;

    return result;
}

function shift(str, disp){
    disp = ((disp % str.length) + str.length) % str.length;
    return str.substring(disp, str.length) + str.substring(0, disp);
}