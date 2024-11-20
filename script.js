const body = document.querySelector("body");
const container = document.querySelector(".container");

/* BUTTONS */
const promptButton = document.createElement("button");
promptButton.setAttribute("id", "btnPrompt");
promptButton.textContent = "Set Grid Dimensions";
body.appendChild(promptButton);
promptButton.addEventListener("click", function () {
    getSize();
});

const black = document.createElement("button");
black.textContent = "black";
black.setAttribute("id", "btnBlack");
body.appendChild(black);
black.addEventListener("click", function () {
    colour = "black";
});

const red = document.createElement("button");
red.textContent = "red";
red.setAttribute("id", "btnRed");
body.appendChild(red);
red.addEventListener("click", function () {
    colour = "red";
});

const blue = document.createElement("button");
blue.textContent = "blue";
blue.setAttribute("id", "btnBlue");
body.appendChild(blue);
blue.addEventListener("click", function () {
    colour = "blue";
});

const erase = document.createElement("button");
erase.textContent = "erase";
erase.setAttribute("id", "btnErase");
body.appendChild(erase);
erase.addEventListener("click", function () {
    colour = "white";
});
/* BUTTONS */

/* Initial grid/variable setup/initialization */
const gridDimension = 960;
let newDimension = 16;
let oldDimension;
let colour = "black";
setGrid();
/* Initial grid/variable setup/initialization */

/* Functions */
function getSize () {
    let tempDimension = prompt("set dimension");
    if (tempDimension > 0 && tempDimension <= 100){
        oldDimension = newDimension;
        newDimension = tempDimension;
        setGrid();
    }
    else
        alert("ERROR: size must be more than 0 and less than 100");
}

function setGrid () {
    if (container.firstElementChild != null){
        for (let i = 1; i <= (oldDimension*oldDimension); i++)
            container.removeChild(container.firstElementChild);
    }
    
    for (let i = 1; i <= (newDimension*newDimension); i++){
        const sq = document.createElement("div");
        sq.classList.add("sq");
        sq.setAttribute("id", "sq"+i);
        sq.style.width = gridDimension/newDimension + "px";
        sq.style.height = gridDimension/newDimension + "px";
        sq.style.margin = "auto";
        container.appendChild(sq);
    }
    body.appendChild(container);

    const sqs = document.querySelectorAll(".sq");
    sqs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = colour;
        });
    });
}
/* Functions */