document.getElementById("menu_all").style.flex = 0.6;
let slideIndex = 0;
let timeOut;
nav_OnClick();

function nav_OnClick() {
  let i;
  let slides = document.getElementsByClassName("slide_img");
  let lines = document.getElementsByClassName("line");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < lines.length; i++) {
    lines[i].className = lines[i].className.slice(0, 4);
    //lines[i].className -= "move";
    console.log(lines[i].className);
  }
  slides[slideIndex - 1].style.display = "flex";
  lines[slideIndex - 1].className += " move";
  timeOut = setTimeout(nav_OnClick, 3000);
}
function left_navOnClick() {
  clearTimeout(timeOut);
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = 3;
  }
  nav_OnClick();
}
function right_navOnClick() {
  clearTimeout(timeOut);
  nav_OnClick();
}
function line_nav(para) {
  clearTimeout(timeOut);
  slideIndex = para;
  nav_OnClick();
}
