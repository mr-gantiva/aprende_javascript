/*
Operador   -  Descripcion 
    +           Suma
    -           Resta
    *           Multiplicación
    /           División
    %           Módulo
    **          Exponente
    ++          Incremento
    --          Decremento 
*/


/*
realizar una suma, una resta, una
multiplicación, una división, un módulo y un exponente de dos números.
*/

let numero1 = 8;
let numero2 = 3;
let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadomultiplicacion = numero1 * numero2;
let resultadodivision = numero1 / numero2;
let resultadomodulo = numero1 % numero2;
let resultadoexponente = numero1 ** numero2;
console.log("Número 1:", numero1); /* => 8 */
console.log("Número 2:", numero2); /* => 3 */
console.log("Resultado suma:",resultadosuma); /* => 11 */
console.log("Resultado resta:",resultadoresta); /* => 5 */
console.log("Resultado multiplicacion:",resultadomultiplicacion); /* => 24 */
console.log("Resultado división:",resultadodivision); /* => 2.6666666666666665 */
console.log("Resultado módulo:",resultadomodulo);   /* => 2 */
console.log("Resultado exponente:",resultadoexponente); /* => 512 */