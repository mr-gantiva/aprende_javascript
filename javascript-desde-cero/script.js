function mostrar() {
    document.getElementById("seleccionable").innerHTML = Date();
}

/**EJEMPLO CON FILTER**/

let arrayNombres = [
    {nombre: 'Pedro', apellido: 'Gonzalez'},
    {nombre: 'Maria', apellido: 'Gonzalez'},
    {nombre: 'Lucia', apellido: 'Gonzalez'},
    {nombre: 'Ricardo', apellido: 'Perez'},
    {nombre: 'Glottis', apellido: 'Juarez'},
    {nombre: 'Fernanda', apellido: 'Fernandez'}
]

const resultado = arrayNombres.filter(x => x.apellido == 'Gonzalez');

for(let index = 0; index < resultado.length; index++) {
    const element = resultado[index];
    console.log(element.nombre);
}

/**EJEMPLO DE ARRAY CON SORT**/
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(number.sort((x,y) => x-y));

/*Sort con objetos*/
let vehiculo = [
    {auto: 'FIAT', anio: 2020},
    {auto: 'BMW', anio: 2019},
    {auto: 'RENAULT', anio: 2021},
    {auto: 'FORD', anio: 2023},    
]
console.log(vehiculo.sort((x,y) => x.anio-y.anio));


/**EJEMPLO DE UN ARRAY RECORRIDO CON CICLO FOR**/
const array = ['Despertarse', 'Comer','Estudiar','Dormir'];
/*
array[0] = 'Curso de HTML'
array[1] = [1,2,3,4,5]
array[2] = {nombre: 'Pedro'}
*/
let texto = '';
for(let index = 0; index < array.length; index++) {
    texto += "<li>" + array[index] + "</li>"
}
document.getElementById('seleccionArray').innerHTML = texto


/**EJEMPLO DE ARRAY CON JOIN**/
const arrayFrutas = ['Manzana', 'Naranja', 'Limón','Pera','Ciruela','Kiwi'];

document.getElementById('selectArrayFrutas').innerHTML = arrayFrutas.join(', ');


