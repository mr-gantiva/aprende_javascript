console.log("Mensaje con comillas dobles");
console.log('Mensaje con comillas simples');
console.log("Mensaje con comillas dobles conteniendo 'comillas simples'");
console.log('Mensaje con comillas simples conteniendo "comillas dobles"');


console.log("Mensaje con \"comillas dobles\"");
console.log('Mensaje con \'comillas simples\'');

/*
Caracteres especiales JavaScript
    -Barra inversa: se representa por el carácter \\
    -Nueva línea: se representa por el carácter \n
    -Retorno de carro: se representa por el carácter \r
    -Tabulación vertical: se representa por el carácter \v
    -Tabulación: se representa por el carácter \t
    -Retroceso: se representa por el carácter \b
    -Avance de página: se representa por el carácter \f
*/

console.log("Esta es una cadena compuesta\npor dos líneas y que incluye \\");
console.log("");
console.log("Cadena con dos líneas\n\ty la segunda tabulada");
console.log("");
console.log("Cadena con dos líneas\n\vy la segunda tabulada verticalmente");




/* CADENAS DE TEXTO - CONCATENAR */

let cadena1 = "Cadena 1" + " Cadena 2";
console.log(cadena1);
let cadena2 = cadena1 + " Cadena 3";
console.log(cadena2);
let cadena3 = cadena1 + " " + cadena2;
console.log(cadena3);

/* CADENAS DE TEXTO - SEPARAR EN VARIAS LINEAS */

let cadena = "Esta es una cadena que la hemos \
dividido en varias líneas porque \
si no lo hiciéramos el código no \
se podría leer fácilmente";
console.log(cadena);