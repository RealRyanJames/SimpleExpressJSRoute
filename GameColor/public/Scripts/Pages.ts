function getRGBTitle() {
  return "Welcome to: RGB  Route";
}

window.onload = () => {
  let PAGE_TITLE = document.getElementById("title") as HTMLElement;
  PAGE_TITLE.textContent = getRGBTitle().toUpperCase();
};
