const fecha = new Date();

let mes = fecha.getMonth() + 1;

let resultado = fecha.getDate() + ' ' + mes + ' ' + fecha.getFullYear();

console.log(resultado);