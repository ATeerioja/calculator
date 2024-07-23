//Simple math operators
const num1 = "";
const num2 = "";
const operator = "";


let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
  //Check which operator to use
  if(operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

let Dvalue = document.querySelector("#inputField");
const buttons = document.querySelectorAll("button");

for(let i = 0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    Dvalue.append(buttons[i].textContent);
  })
}


function calculator() {

}
