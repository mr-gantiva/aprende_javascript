let valortrue = true;
let valorfalse = false;
console.log("Valor true:", valortrue);
console.log("Valor false:", valorfalse);
console.log("Valor true a string:", valortrue.toString());
console.log("Valor false a string:", valorfalse.toString());
valortrue = new Boolean(true);
valorfalse = new Boolean(false);
console.log("Tipo dato boolean con valor true:", valortrue);
console.log("Tipo dato boolean con valor false:", valorfalse);
console.log("Tipo dato boolean con valor true a string:", valortrue.toString());
console.log("Tipo dato boolean con valor false a string:", valorfalse.toString());


/* AND && */
console.log("Valor TRUE AND TRUE:", (valortrue && valortrue).toString());
console.log("Valor TRUE AND FALSE:", (valortrue && valorfalse).toString());
console.log("Valor FALSE AND FALSE:", (valorfalse && valorfalse).toString());

/* OR || */
console.log("Valor TRUE OR TRUE:", (valortrue || valortrue).toString());
console.log("Valor TRUE OR FALSE:", (valortrue || valorfalse).toString());
console.log("Valor FALSE OR FALSE:", (valorfalse || valorfalse).toString());

/* NOT ! */
let valortrue1 = true;
let valorfalse1 = false;
console.log("NOT TRUE:", (!valortrue1).toString());
console.log("NOT FALSE:", (!valorfalse1).toString());


/* Operadores Lógicos */
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Escribe el primer número: '));
let num2 = parseInt(prompt('Escribe el segundo número: '));

console.log("Resultado(",num1,">", num2, "):",(num1>num2));
console.log("Resultado(",num1,">=", num2, "):",(num1>=num2));
console.log("Resultado(",num1,"<", num2, "):",(num1<num2));
console.log("Resultado(",num1,"<=", num2, "):",(num1<=num2));
console.log("Resultado(",num1,"==", num2, "):",(num1==num2));
console.log("Resultado(",num1,"!=", num2, "):",(num1!=num2));