/*
Sentencia if
*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Escribe un número menor que 10: '));
if(numero>=10)
{
console.log("¡El número que has escrito es mayor o igual que 10!")
}else {
    console.log("¡El número que has escrito es menor que 10!");
}
console.log("Has escrito el número", numero);



const prompt2 = require('prompt-sync')();
let num1 = parseInt(prompt2("Escribe el primer número: "));
let num2 = parseInt(prompt2("Escribe el segundo número: "));

if (num1 > num2) {
    console.log("El primer número es mayor que el segundo");
} else if (num2 > num1) {
    console.log("El segundo número es mayor que el primero");
} else {
    console.log("Ambos números son iguales");
}

/*
Sentencia Switch
*/

const prompt3 = require('prompt-sync')();

console.log('Códigos promocionales: ORO, PLATA, BRONCE ó PLATINO');
let codigo = prompt3('Introduzca su código promocional para saber su descuento: ');

switch(codigo) {
    case "ORO":
        console.log("El descuento aplicado es del 25%");
        break;
    case "PLATA":
        console.log("El descuento aplicado es del 15%");
        break;
    case "BRONCE":
        console.log("El descuento aplicado es del 5%");
        break;
    case "PLATINO":
        console.log("El descuento aplicado es del 40%");
        break;
    default: 
        console.log("Código promocional no válido");
        break;
}

