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
  Dvalue.textContent = calculator(Dvalue.textContent);
})

buttons[buttons.length - 1].addEventListener("click", () => {
  Dvalue.textContent = "";
})


function calculator(input) {
  const operatorFilter = "+-*/=C";

  function correctNumbers(list) {
    let correctedNumbersList = [];
    let number = "";

    for(let i = 0; i < list.length; i++) {
      if(Number(list[i])) {
        number += (list[i]);
      } else if(operatorFilter.includes(list[i])) {
        correctedNumbersList.push(number);
        number = "";
        correctedNumbersList.push(list[i]);
      }
    }
    return(correctedNumbersList);
  }

  function calculate(list) {
    //multiply and divide
    multipliedAndDivided = list;

    for(let i = 0; i<list.length; i++) {
      if(list[i] === "*" || list[i] === "/") {
        console.log("hello")
        let num = operate(list[i], list[i-1], list[i+1]);
        console.log(num);
        multipliedAndDivided = multipliedAndDivided.slice(list[i-1], list[i+1]);
        console.log(multipliedAndDivided);
      } 
    }



  }
  
  let list = correctNumbers(input.split(""))
  console.log(list);
  calculate(list);
  
}

calculator("2*4/2=");