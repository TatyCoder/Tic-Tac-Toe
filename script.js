const row1 = ["", "", ""];

const row2 = ["", "", ""];

const row3 = ["", "", ""];

let message = "Game started!";

let state = "Not started";

const render = () => {

    for (let i = 0; i < row1.length; i++) {
        const element = row1[i];
        const cell = document.querySelector("#r1c" + (i + 1));
        cell.setAttribute("src", element + ".png");
    }

    for (let i = 0; i < row2.length; i++) {
        const element = row2[i];
        const cell = document.querySelector("#r2c" + (i + 1));
        cell.setAttribute("src", element + ".png");
    }

    for (let i = 0; i < row3.length; i++) {
        const element = row3[i];
        const cell = document.querySelector("#r3c" + (i + 1));
        cell.setAttribute("src", element + ".png");
    }

    if (currentPlayer !== "") {
        document.querySelector("#playerSelection").setAttribute("style", "display: none");
        document.querySelector("#board").setAttribute("style", "display: block");
    } else {
        document.querySelector("#playerSelection").setAttribute("style", "display: block");
        document.querySelector("#board").setAttribute("style", "display: none");
    }

    document.querySelector("#message").innerText = message;
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
    state = "started";
    render();
});

const chooseO = document.querySelector("#buttonO");

chooseO.addEventListener("click", () => {
    currentPlayer = "O";
    state = "started";
    render();
});

const clickCell = (row, column) => {
    if (state === "finished") {
        return;
    }

    if (row[column] !== "Blank") {
        return;
    }

    row[column] = currentPlayer;

    validate();

    if (currentPlayer === "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }

    if (state !== "finished") {
        message = `${currentPlayer} turn!`;
    }

    render();
}

const validateRows = (array) => {
    const result = array.filter(mark => mark === currentPlayer);
    if (result.length === 3) {
        message = `${currentPlayer} won. Game over!`;
        state = "finished";
    }
}

const validateColumns = (index) => {
    if (row1[index] === currentPlayer && row2[index] === currentPlayer && row3[index] === currentPlayer) {
        message = `${currentPlayer} won. Game over!`;
        state = "finished";
    }
}

const validateDiagonal = () => {
    if ((row1[0] === currentPlayer && row2[1] === currentPlayer && row3[2] === currentPlayer) ||
        (row1[2] === currentPlayer && row2[1] === currentPlayer && row3[0] === currentPlayer)) {
        message = `${currentPlayer} won. Game over!`;
        state = "finished";
    }
}

const validate = () => {
    // Validating rows:
    validateRows(row1);
    validateRows(row2);
    validateRows(row3);
    // Validating columns:
    validateColumns(0);
    validateColumns(1);
    validateColumns(2);

    // Validating diagonal:
    validateDiagonal();

    // Validating tie:
    if (row1.every((currentValue) => currentValue !== "Blank") &&
        row2.every((currentValue) => currentValue !== "Blank") &&
        row3.every((currentValue) => currentValue !== "Blank")) {
        message = "Players tie. Game over!";
        state = "finished";
    }
}

const restartGame = () => {
    clearBoard();
    message = "Game started!";
    state = "Not started";
    currentPlayer = "";
    render();
}

render();