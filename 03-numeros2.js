/*
solicitar al usuario que introduzca los dos números. Para realizar las
operaciones aritméticas es necesario convertir la información que introduce
*/



const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadomultiplicacion = numero1 * numero2;
let resultadodivision = numero1 / numero2;
let resultadomodulo = numero1 % numero2;
let resultadoexponente = numero1 ** numero2;

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Resultado suma:",resultadosuma);
console.log("Resultado resta:",resultadoresta);
console.log("Resultado multiplicacion:",resultadomultiplicacion);
console.log("Resultado división:",resultadodivision);
console.log("Resultado módulo:",resultadomodulo);
console.log("Resultado exponente:",resultadoexponente);