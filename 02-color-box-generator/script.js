const container = document.querySelector(".squares-container");
const MIN = 0;
const MAX = 256;
function randomNum(min=MIN,max=MAX){
    return Math.floor(Math.random()*(max - min + 1) + min);
} 
function createSquares(container){
    for (let i  = 10; i > 0; i--){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
        container.appendChild(box)
    }
}
function main(container){
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        container.replaceChildren();
        createSquares(container);
    })
}
main(container);