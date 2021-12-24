const row1 = ["O", "X", "Blank"];

const row2 = ["X", "Blank", "O"];

const row3 = ["Blank", "o", "x"];

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

render();