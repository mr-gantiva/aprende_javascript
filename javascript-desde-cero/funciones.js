console.log("Función que cambia de farenheit a Celsius");

const temperatura = 76;

//FUNCION CLASICA
/*
function transformarACelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}*/

//FUNCION DE FLECHA - Solo funciona cuando
let transformarACelsius = (farenheit) => (farenheit - 32) * (5 / 9);

const respuesta = transformarACelsius(temperatura);
console.log(`La temperatura en grados Celsius es de: `, parseInt(respuesta));
