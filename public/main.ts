import { getOnClient } from "../DB/DB";

type ButtonEl = HTMLButtonElement;
type Num = number;

function generateStringR(): number | string {
  return Math.floor(Math.random() * 255);
}

function generateStringG(): number | string {
  return Math.floor(Math.random() * 255);
}

function generateStringB(): number | string {
  return Math.floor(Math.random() * 255);
}

async function onClickHex() {
  const r = generateStringR();
  const g = generateStringG();
  const b = generateStringB();
  const hexStringHTMLR = document.getElementById("colorR") as HTMLElement;
  const hexStringHTMLG = document.getElementById("colorG") as HTMLElement;
  const hexStringHTMLB = document.getElementById("colorB") as HTMLElement;
  const hexStringHTMLHex = document.getElementById("hexCode") as HTMLElement;
  hexStringHTMLR.textContent = `R: ${r}`;
  hexStringHTMLG.textContent = `G: ${g}`;
  hexStringHTMLB.textContent = `B: ${b}`;
  hexStringHTMLHex.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  const rgbCode = `R: ${r}, G: ${g}, B: ${b}`;
  const hexCode = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  await getOnClient(rgbCode.toString(), "");
  await getOnClient(hexCode.toString(), "");
}

const button: ButtonEl = document.getElementById("button") as ButtonEl;

button.addEventListener("click", onClickHex);
