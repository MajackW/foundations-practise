const screen = document.querySelector(".display-screen")
let answer = 0;
let expression = "";
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
        expression = "";
    } else if(value === "equal" && expression.length != 0){
        evaluate(expression);
    } else {
        expression += value;
        console.log(expression);
        const text = document.createElement("p");
        text.classList.add("text");
        text.textContent =value;
        screen.appendChild(text);
    }

}
function checkValues(container){
    const content = container.textContent;
}