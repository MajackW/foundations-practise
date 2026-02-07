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
function evaluate(exp){
    let operands = ["-", "+"];
    let operators = ["-","+","/","x","^"];
    let num1 = "+";
    let num2 = "";
    let operand = "";
    let i = 0;
    while(i < exp.length){
        conditionNeg = (exp.at(i) === "-" && num1 === "+" ||
                        exp.at(i) === "+" && num1 === "-")
        conditionPos = (exp.at(i) === "-" && num1 === "-")
        if(operators.includes(exp.at(i)) && num1 === ""){
            num1 += exp.at(i);
        }else if (conditionPos){
            num1 = "+";
        }else if(conditionNeg){
            num1 = "-"
        }else if(!(operators.includes(exp.at(i))) && (operators.includes(num1) || isNumeric(exp.at(i-1)))){
            num1 += exp.at(i);
        }else if(operators.includes(exp.at(i)) && isNumeric(num1.at(-1))){
            operand = exp.at(i);
        }else if(operand != "" && num2 === ""){
            num2 += exp.at(i);
        }
        i++;
    }
    num1 = Number(num1);
    num2 = Number(num2);
    display("clear");
    display(num1+num2);
    console.log(num1);
    console.log(operand);
    console.log(num2);

}
function isNumeric(val){
    const num = Number(val);
    return !Number.isNaN(num);
}
