const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-allclear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

function clear(){
  currentOperand= "";
  previousOperand= "";
  operation = undefined;
  console.log('foi')
}

function updateDiplay(){
    previousOperandTextElement.innerHTML = previousOperand;
    currentOperandTextElement.innerHTML = currentOperand;
}



function Calculator(){
    allClearButton.addEventListener("click", () => {
        
    })
}