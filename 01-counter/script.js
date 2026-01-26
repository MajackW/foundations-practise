let num = 0;

const buttons = document.querySelectorAll("button");
const displayBox = document.querySelector(".display_num");
displayBox.textContent = num;

function listener(){
    for(const button of buttons){
        button.addEventListener("click",(event) => {
            updateNum(event.target.id);
        });
    }
}
function updateNum(operation){
    if (operation === "increment" && num < 100){
        num++;
    }else if(operation === "decrement" && num > 0){
        num--;
    }else if (operation === "reset"){
        num = 0;
    }
    updateDisplay();
}
function updateDisplay(){
    displayBox.textContent = num;
}
listener();