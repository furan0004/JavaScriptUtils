import prefixes from "./prefixes.json" assert {type: "json"};

var field = document.getElementById("field");
var cache;
var count = 0;

var turnCount = document.getElementById("turnCount");
var turn = 0;

var resetButton = document.getElementById("resetButton");
resetButton.onclick = reset;

var table = document.getElementById("prefixTable");
var tableHeader = ["Symbol", "Name", "Value"];

function initialise(){
    let ch = field.children;
    for(let i = ch.length - 1; i >= 0; i--) ch[i].remove();

    count = 0;
    turn = 0;

    turnCount.innerText = "Ready";
}

function setup(symbols){
    initialise();

    for(let i = 0; i < symbols.length; i++){
        let cardElements = [
            document.createElement("div"),
            document.createElement("div"),
        ];
        let label = document.createElement("p");

        cardElements[0].classList.add("card-container");
        cardElements[1].classList.add("card");

        cardElements[1].onclick = function(){
            let prefix = this.children[0].innerText;
            label.classList.remove("card-label-hide");

            if(cache == null){
                turn++;
                cache = [cardElements[1], prefix];
            }else{
                let sum = 0;
                for(let j = 0; j < prefixes.length; j++) switch(prefixes[j].symbol){
                    case prefix:
                    case cache[1]:
                        sum += j;
                        break;
                }

                let a = cache[0];
                setTimeout(function(){
                    if(sum == prefixes.length - 1){
                        count++;
                        
                        a.remove();
                        cardElements[1].remove();

                        if(count == prefixes.length / 2){
                            alert(`Completed with ${turn} turns.`);
                            
                        }
                    }else{
                        a.children[0].classList.add("card-label-hide");
                        label.classList.add("card-label-hide");
                    }
                }, 300);

                cache = null;
            }

            turnCount.innerText = `Turn ${turn}`;
        };

        
        label.classList.add("card-label");
        label.classList.add("card-label-hide");
        label.innerText = symbols[i];
        
        cardElements[1].appendChild(label);

        cardElements[0].appendChild(cardElements[1]);
        field.appendChild(cardElements[0]);
    }
}

function randomSort(arr){
    let result = [];
    while(arr.length > 0){
        let index = Math.floor(arr.length * Math.random());
        result.push(arr[index]);
        arr.splice(index, 1);
    }

    return result;
}

function newSymbolList(){
    let result = [];
    for(let i = 0; i < prefixes.length; i++) result.push(prefixes[i].symbol);
    result = randomSort(result);

    return result;
}

function reset(){
    setup(newSymbolList());
}

reset();

for(let i = -1; i < prefixes.length; i++){
    let row = document.createElement("tr");

    for(let j = 0; j < 3; j++){
        let cell = document.createElement(i == -1 ? "th" : "td");
        cell.classList.add("table-cell");
        cell.innerText = i == -1 ? tableHeader[j] : prefixes[prefixes.length - 1 - i][tableHeader[j].toLowerCase()];
        row.appendChild(cell);
    }


    table.appendChild(row);
}