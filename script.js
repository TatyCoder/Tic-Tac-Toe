const row1 = ["", "", ""];

const row2 = ["", "", ""];

const row3 = ["", "", ""];

const render = () => {
    for (let i = 0; i < row1.length; i++) {
        const element = row1[i];
        const cell = document.querySelector("#r1c" + (i+1));
        cell.setAttribute("src", element + ".png");
    }
    
    for (let i = 0; i < row2.length; i++) {
        const element = row2[i];
        const cell = document.querySelector("#r2c" + (i+1));
        cell.setAttribute("src", element + ".png");
    }
    
    for (let i = 0; i < row3.length; i++) {
        const element = row3[i];
        const cell = document.querySelector("#r3c" + (i+1));
        cell.setAttribute("src", element + ".png");
    }
}

const clearBoard = () => {
    for (let i = 0; i < row1.length; i++) {
        row1[i] = "Blank";
    }
    for (let i = 0; i < row2.length; i++) {
        row2[i] = "Blank";
    }
    for (let i = 0; i < row3.length; i++) {
        row3[i] = "Blank";
    }
}

clearBoard();

let currentPlayer = "";

const chooseX = document.querySelector("#buttonX");

chooseX.addEventListener("click", () => {
    currentPlayer = "X";
    document.querySelector("#playerSelection").setAttribute("style", "display: none");
    document.querySelector("#board").setAttribute("style", "display: block");
});

const chooseO = document.querySelector("#buttonO");

chooseO.addEventListener("click", () => {
    currentPlayer = "O";
    document.querySelector("#playerSelection").setAttribute("style", "display: none");
    document.querySelector("#board").setAttribute("style", "display: block");
});

const clickCell = (row, column) => {
    row[column] = currentPlayer;
    if (currentPlayer === "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
    render();
}

render();