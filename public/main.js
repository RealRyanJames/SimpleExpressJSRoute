"use strict";
function generateStringR() {
    return Math.floor(Math.random() * 255);
}
function generateStringG() {
    return Math.floor(Math.random() * 255);
}
function generateStringB() {
    return Math.floor(Math.random() * 255);
}
function onClickHex() {
    const r = generateStringR();
    const g = generateStringG();
    const b = generateStringB();
    const hexStringHTMLR = document.getElementById("colorR");
    const hexStringHTMLG = document.getElementById("colorG");
    const hexStringHTMLB = document.getElementById("colorB");
    const hexStringHTMLHex = document.getElementById("hexCode");
    hexStringHTMLR.textContent = `R: ${r}`;
    hexStringHTMLG.textContent = `G: ${g}`;
    hexStringHTMLB.textContent = `B: ${b}`;
    hexStringHTMLHex.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
const button = document.getElementById("button");
button.addEventListener("click", onClickHex);
