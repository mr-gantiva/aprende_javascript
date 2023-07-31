const prompt = require('prompt-sync')();

console.log("****************CALCULADORA****************");
console.log("Seleccione la operación a realizar: ");
console.log("1-SUMAR \n2-RESTAR \n3-MULTIPLICAR \n4-DIVIDIR \n5-SALIR");
calculadora();


function calculadora() {
    let fin = false;
    let opcion = 0;
    
    while (opcion != 5) {
        opcion = parseInt(prompt("Opción: "));
        switch (opcion) {
            case 1:
                sumar();
                break;
            case 2:
                restar();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividir();
                break;
            case 5:
                fin = true;
                console.log("Programa finalizado");
                break;
        }
    }
}


function solicitarNumero() {
    let valor = parseInt(prompt("Introduzca un número: "));
    return valor;
}
function sumar() {
    let num1 = solicitarNumero();
    let num2 = solicitarNumero();
    console.log("Resultado suma %s", (num1 + num2));
}

function restar() {
    let num1 = solicitarNumero();
    let num2 = solicitarNumero();
    console.log("Resultado resta %s", (num1 - num2));
}

function multiplicar() {
    let num1 = solicitarNumero();
    let num2 = solicitarNumero();
    console.log("Resultado multiplicación %s", (num1 * num2));
}

function dividir() {
    let num1 = solicitarNumero();
    let num2 = solicitarNumero();
    console.log("Resultado división %s", (num1 / num2));
}

