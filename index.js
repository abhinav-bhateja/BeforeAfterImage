const slider = document.querySelector(".slider");
const before = document.querySelector(".imgContainerBefore");
const after = document.querySelector(".imgContainerAfter");
const container = document.querySelector(".container");

const drag = (e) => {
    let xPos = e.layerX;
    let yPos = e.layerY;

    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";

}

container.addEventListener('mousemove', drag);