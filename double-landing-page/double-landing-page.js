const container = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");


leftEl.addEventListener("mouseover", () => {
    container.classList.add("active-left")
});

leftEl.addEventListener("mouseout", () => {
    container.classList.remove("active-left")
});

rightEl.addEventListener("mouseover", () => {
    container.classList.add("active-right")
});

rightEl.addEventListener("mouseout", () => {
    container.classList.remove("active-right")
});

