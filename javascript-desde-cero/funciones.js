console.log("Función que cambia de farenheit a Celsius");

const temperatura = 76;

//FUNCION CLASICA
/*
function transformarACelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}*/

//FUNCION DE FLECHA - Solo funciona cuando
let transformarACelsius = farenheit => (farenheit - 32) * (5 / 9);

const respuesta = transformarACelsius(temperatura);
console.log(`La temperatura en grados Celsius es de: `, parseInt(respuesta));


const a = 5;
const b = 6;

function suma(x,y) {
  return x + y;
}

let respuestaSuma = suma(a,b);

console.log(`La respuesta de ${a} + ${b} es igual a: `, respuestaSuma);
