function btnMulti() {
    document.Calculator.calculationInput.value += "*";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnDivide() {
    document.Calculator.calculationInput.value += "/";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnPlus() {
    document.Calculator.calculationInput.value += "+";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnMinus() {
    document.Calculator.calculationInput.value += "-";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnDecimal() {
    document.Calculator.calculationInput.value += ".";
    document.Calculator.calculationInput.style.textAlign = "right";
}


function btnclear() {
    document.Calculator.calculationInput.value = "";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnModulus() {
    document.Calculator.calculationInput.value += "%";
    document.Calculator.calculationInput.style.textAlign = "right";
}

function btnSqRoot(Calculator) {
    Calculator.calculationInput.value = Math.sqrt(Calculator.calculationInput.value);
}