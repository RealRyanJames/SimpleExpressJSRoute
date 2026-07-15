type ButtonEl = HTMLButtonElement;

function generateString(): number {
  return Math.floor(Math.random() * 255);
}

function onClickHex() {
  const r = generateString();
  const g = generateString();
  const b = generateString();
  const hexStringHTMLR = document.getElementById("colorR") as HTMLElement;
  const hexStringHTMLG = document.getElementById("colorG") as HTMLElement;
  const hexStringHTMLB = document.getElementById("colorB") as HTMLElement;
  hexStringHTMLR.textContent = `R: ${r}`;
  hexStringHTMLG.textContent = `G: ${g}`;
  hexStringHTMLB.textContent = `B: ${b}`;
}

const button: ButtonEl = document.getElementById("button") as ButtonEl;

button.addEventListener("click", onClickHex);
