const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");

buttonPrev.onclick = () => {
  viewPage1();
};
buttonNext.onclick = () => {
  viewPage2();
};

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    viewPage1();
  }
  if (event.key === "ArrowRight") {
    viewPage2();
  }
});

function viewPage1() {
  page1.style.display = "flex";
  page2.style.display = "none";
}
function viewPage2() {
  page2.style.display = "flex";
  page1.style.display = "none";
}
