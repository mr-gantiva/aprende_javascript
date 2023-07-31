function saludar() {
    console.log("¡Hola Time of Software!");
}

saludar();

const prompt = require('prompt-sync')();

let valorLeido = parseInt(prompt("Introduce un número: "));
esMayorQueCero(valorLeido);


function esMayorQueCero(valor) {
    if (valor > 0) {
        console.log("El valor introducido es mayor que cero");
    }else {
        console.log("El valor ingresado no es mayor que cero");
    }
}

const prompt2 = require('prompt-sync')();

let sum1 = parseInt(prompt2("Ingrese el primer número: "));
let sum2 = parseInt(prompt2("Ingrese el segundo número: "));
console.log("Resultado: %s", sumar(sum1,sum2));

function sumar(num1, num2) {
    return num1 + num2;
}


/*
Función anidada
*/

const prompt3 = require('prompt-sync')();

function solicitarNumero() {
    let valor2 = parseInt(prompt3("Introduzca un número: "));
    return valor2;
}
function sumar2() {
    let number1 = solicitarNumero();
    let number2 = solicitarNumero();
    console.log("Resultado suma %s", (number1 + number2));
}

sumar2();
