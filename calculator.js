//Simple math operators
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

buttons[buttons.length - 2].addEventListener("click", () => {
  calculator(Dvalue);
})

buttons[buttons.length - 1].addEventListener("click", () => {
  Dvalue.textContent = "";
})


function calculator(input) {
  console.log(Dvalue);
}


//X amount of numbers and one operator followed by X amount of numbers

