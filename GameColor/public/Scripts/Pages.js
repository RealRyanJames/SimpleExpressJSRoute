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
function clickColorButton(doc) {
    const clickBtnColor = RandomColor();
    if (clickBtnColor == "red") {
        doc.style.backgroundColor = "red";
    }
    else if (clickBtnColor == "green") {
        doc.style.backgroundColor = "green";
    }
    else if (clickBtnColor == "blue") {
        doc.style.backgroundColor = "blue";
    }
}
console.log(RandomColor());
function upper(txt) {
    return txt.toUpperCase();
}
const buttonR = document.getElementById("red");
const clickBtnColor = RandomColor();
buttonR.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    // if (clickBtnColor == "red") {
    //   document.body.style.backgroundColor = "red";
    // }
});
// alert("Hello World");
const buttonG = document.getElementById("green");
buttonG.addEventListener("click", () => {
    if (clickBtnColor == "green") {
        document.body.style.backgroundColor = "green";
    }
});
const buttonB = document.getElementById("blue");
buttonB.addEventListener("click", () => {
    if (clickBtnColor == "blue") {
        document.body.style.backgroundColor = "blue";
    }
});
window.onload = () => {
    let PAGE_TITLE = document.getElementById("title");
    PAGE_TITLE.textContent = colors(upper, "Welcome to: RGB Route");
};
