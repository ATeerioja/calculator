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
  let list = correctNumbers(input.split(""));

  //To do division and multiplication first we need to get need
  //to calculate how many appear in the calculation
  multiplyAndDivide = calculateOperators(list, "*") + calculateOperators(list, "/");

  for(let i = 0; i<multiplyAndDivide; i++) {
    list = (operateOnce(list, "*", "/"));
  }

  addAndReduce = calculateOperators(list, "+") + calculateOperators(list, "-");

  for(let i = 0; i<addAndReduce; i++) {
    list = (operateOnce(list, "+", "-"));
  }

  function operateOnce (list, operator1, operator2) {
    for(let i = 0; i < list.length; i++) {
      if(list[i] === operator1 || list[i] === operator2) {
        let tempArray = [];
        let num = operate(list[i], Number(list[i-1]), Number(list[i+1]));
        
        for(let x = 0; x < list.length; x++) {
          if(x === i-1 || x === i+1) {

          } else if(x === i) {
            tempArray.push(num);
          } else {
            tempArray.push(list[x]);
          }
        }

        return(tempArray);

      }
    }
  }
 
  function calculateOperators(list, operator) {
    i = 0;
  
    for(char of list) {
      if(char === operator) {
        i++;
      }
    }

    return i;
  }

  function correctNumbers(list) {
    const operatorFilter = "+-/*=C"

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

  return(String(list[0]));
  
}