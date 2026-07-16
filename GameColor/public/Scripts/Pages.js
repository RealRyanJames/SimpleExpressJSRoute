"use strict";
function colors(func, str) {
    return func(str);
}
function RandomColor() {
    const randColor = ["red", "green", "blue"];
    const length = Math.floor(Math.random() * randColor.length);
    return randColor[length];
}
function getColorBal(balColor, colorName) {
    balColor(colorName);
}
const clickBtnColor = RandomColor();
function clickColorButton(doc) {
    if (clickBtnColor === "red") {
        doc.style.backgroundColor = "red";
    }
    if (clickBtnColor === "green") {
        doc.style.backgroundColor = "green";
    }
    if (clickBtnColor === "blue") {
        doc.style.backgroundColor = "blue";
    }
}
function upper(txt) {
    return txt.toUpperCase();
}
const buttonR = document.getElementById("red");
buttonR.addEventListener("click", () => {
    clickColorButton(document.body);
});
// alert("Hello World");
const buttonG = document.getElementById("green");
buttonG.addEventListener("click", () => {
    clickColorButton(document.body);
});
const buttonB = document.getElementById("blue");
buttonB.addEventListener("click", () => {
    clickColorButton(document.body);
});
window.onload = () => {
    let PAGE_TITLE = document.getElementById("title");
    PAGE_TITLE.textContent = colors(upper, "Welcome to: RGB Route");
};
