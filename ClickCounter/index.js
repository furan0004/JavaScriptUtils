const title = "Click Counter";
const duration = 10000;

var counter = document.getElementById("counter");
var display = document.getElementById("display");
var resultDisplay = document.getElementById("result");
var count = 0;

counter.onclick = function(){
    if(count == 0) setTimeout(function(){
        let row = document.createElement("div");
        row.classList.add("resultRow");

        let icon = document.createElement("div");
        icon.classList.add("resultIcon");

        let iconLabel = document.createElement("p");
        iconLabel.classList.add("resultIconLabel");
        iconLabel.innerText = `${Math.floor(10 * (count / (duration / 1000)))/10}/s`;

        let labelBack = document.createElement("div");
        labelBack.classList.add("resultRowLabelBack");

        let label = document.createElement("p");
        label.classList.add("resultRowLabel");
        label.innerText = `${count} count in ${duration / 1000} seconds`;

        icon.appendChild(iconLabel);
        row.appendChild(icon);
        labelBack.appendChild(label);
        row.appendChild(labelBack);
        resultDisplay.children[0].after(row);

        count = 0;
        display.innerText = "Click to count again";

        alert("Finish!");
    }, duration);

    count++;
    display.innerText = count;
};

fixTopBar(title);