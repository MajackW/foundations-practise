let num = 0;

const buttons = document.querySelectorAll("button");
const displayBox = document.querySelector(".display_num");
displayBox.textContent = num;
//window = document.window;

function listener(){
    for(const button of buttons){
        button.addEventListener("click",(event) => {
            updateNum(event.target.id);
        });
    }
    window.addEventListener("keydown",(e) => {
        checkKeyPressed(e);
    });
}

function checkKeyPressed(event){
    if (event.code == "NumpadAdd"){
        updateNum("increment");
    }else if (event.code == "NumpadSubtract"){
        updateNum("decrement");
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