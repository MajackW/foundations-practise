const screen = document.querySelector(".display-screen")
let answer = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        display(e.target.value);
        checkValues(screen);
    })
})

function display(value){
    if (value === "clear"){
        screen.replaceChildren();
    } else if(value === "equal"){
        ;
    } else {
        const text = document.createElement("p");
        text.classList.add("text");
        text.textContent =value;
        screen.appendChild(text);
    }

}
function checkValues(container){
    const content = container.textContent;
    console.log(content);
}