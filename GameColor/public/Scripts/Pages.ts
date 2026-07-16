function colors(func: (name: string) => string, str: string): string {
  return func(str);
}

function RandomColor() {
  const randColor = ["red", "green", "blue"];
  const length = Math.floor(Math.random() * randColor.length);
  return randColor[length];
}

function getColorBal(balColor: (name: string) => string, colorName: string) {
  balColor(colorName);
}

function clickColorButton(doc: HTMLElement) {
  const clickBtnColor = RandomColor();
  if (clickBtnColor == "red") {
    doc.style.backgroundColor = "red";
  } else if (clickBtnColor == "green") {
    doc.style.backgroundColor = "green";
  } else if (clickBtnColor == "blue") {
    doc.style.backgroundColor = "blue";
  }
}

console.log(RandomColor());

function upper(txt: string): string {
  return txt.toUpperCase();
}

const buttonR = document.getElementById("red") as HTMLButtonElement;

const clickBtnColor = RandomColor();

buttonR.addEventListener("click", () => {
  clickColorButton(document.body);
});

// alert("Hello World");

const buttonG = document.getElementById("green") as HTMLButtonElement;

buttonG.addEventListener("click", () => {
  clickColorButton(document.body);
});

const buttonB = document.getElementById("blue") as HTMLButtonElement;

buttonB.addEventListener("click", () => {
  clickColorButton(document.body);
});

window.onload = () => {
  let PAGE_TITLE = document.getElementById("title") as HTMLElement;
  PAGE_TITLE.textContent = colors(upper, "Welcome to: RGB Route");
};
