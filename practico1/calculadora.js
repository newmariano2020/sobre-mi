var buttonBox = document.querySelector(".button-box");
var resultInput = document.getElementById("input");
var valuesArray = [];
var currentNumber = "";
var operatorSelected = false; // Agregar esta bandera para verificar si se seleccionó un operador

console.log('Script loaded');

const sumar = (num1, num2) => {
    return num1 + num2;
}
const restar = (num1, num2) => {
    return num1 - num2;
}
const dividir = (num1, num2) => {
    return num1 / num2;
}
const multiplicar = (num1, num2) => {
    return num1 * num2;
}

function realizarOperacion(operador) {
    var num2 = parseFloat(currentNumber);
    var num1 = parseFloat(valuesArray[valuesArray.length - 1]);
    console.log("num1:", num1);
    console.log("operador:", operador);
    console.log("num2:", num2);

    switch (operador) {
        case '+':
            valuesArray.push(sumar(num1, num2));
            break;
        case '-':
            valuesArray.push(restar(num1, num2));
            break;
        case '/':
            valuesArray.push(dividir(num1, num2));
            break;
        case '*':
            valuesArray.push(multiplicar(num1, num2));
            break;
        default:
            console.log("Operador no válido");
            break;
    }

    currentNumber = "";
    var resultado = valuesArray[valuesArray.length - 1];
    resultInput.value = resultado;
    console.log(resultado)
}

buttonBox.addEventListener("click", function(event) {
    var clickedButton = event.target;
    var valor = clickedButton.value;

    if (!isNaN(parseFloat(valor)) || valor === '.') {
        if (!operatorSelected) {
            currentNumber += valor;
            resultInput.value = currentNumber; // Actualizar el valor del campo de entrada
        } else {
            currentNumber += valor;
            resultInput.value = currentNumber; // Actualizar el valor del campo de entrada
        }
    } else if (valor === '=') {
        if (operatorSelected && currentNumber !== "") {
            var operador = valuesArray.pop();
            realizarOperacion(operador); // Realizar operación con el operador previamente seleccionado
            operatorSelected = false; // Reiniciar la bandera de operador seleccionado
        }
    } else if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
        if (!operatorSelected) {
            operatorSelected = true;
            valuesArray.push(parseFloat(currentNumber));
            currentNumber = "";
            valuesArray.push(valor);
        }
    }
});