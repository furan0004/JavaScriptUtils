const prefixes = [
    {
        symbol: "q",
        name: "quecto",
        value: "10^(-30)",
    },
    {
        symbol: "r",
        name: "ronto",
        value: "10^(-27)",
    },
    {
        symbol: "y",
        name: "yocto",
        value: "10^(-24)",
    },
    {
        symbol: "z",
        name: "zepto",
        value: "10^(-21)",
    },
    {
        symbol: "a",
        name: "atto",
        value: "10^(-18)",
    },
    {
        symbol: "f",
        name: "femto",
        value: "10^(-15)",
    },
    {
        symbol: "p",
        name: "pico",
        value: "10^(-12)",
    },
    {
        symbol: "n",
        name: "nano",
        value: "10^(-9)",
    },
    {
        symbol: "μ",
        name: "micro",
        value: "10^(-6)",
    },
    {
        symbol: "m",
        name: "milli",
        value: "10^(-3)",
    },
    {
        symbol: "c",
        name: "centi",
        value: "10^(-2)",
    },
    {
        symbol: "d",
        name: "deci",
        value: "10^(-1)",
    },
    {
        symbol: "da",
        name: "deca",
        value: "10^1",
    },
    {
        symbol: "h",
        name: "hecto",
        value: "10^2",
    },
    {
        symbol: "k",
        name: "kilo",
        value: "10^3",
    },
    {
        symbol: "M",
        name: "mega",
        value: "10^6",
    },
    {
        symbol: "G",
        name: "giga",
        value: "10^9",
    },
    {
        symbol: "T",
        name: "tera",
        value: "10^12",
    },
    {
        symbol: "P",
        name: "peta",
        value: "10^15",
    },
    {
        symbol: "E",
        name: "exa",
        value: "10^18",
    },
    {
        symbol: "Z",
        name: "zetta",
        value: "10^21",
    },
    {
        symbol: "Y",
        name: "yotta",
        value: "10^24",
    },
    {
        symbol: "R",
        name: "ronna",
        value: "10^27",
    },
    {
        symbol: "Q",
        name: "quetta",
        value: "10^30",
    },
];

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


fixTopBar("SI-Prefix Concentration");
reset();

for(let i = -1; i < prefixes.length; i++){
    let row = document.createElement("tr");

    for(let j = 0; j < 3; j++){
        let cell = document.createElement(i == -1 ? "th" : "td");
        cell.classList.add("table-cell");
        cell.innerText = i == -1 ? tableHeader[j] : prefixes[i][tableHeader[j].toLowerCase()];
        row.appendChild(cell);
    }


    table.appendChild(row);
}