"use strict";
function getRGBTitle() {
    return "Welcome to: RGB  Route";
}
window.onload = () => {
    let PAGE_TITLE = document.getElementById("title");
    PAGE_TITLE.textContent = getRGBTitle().toUpperCase();
};
