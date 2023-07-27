let cadena = "En un lugar de la mancha";
console.log("Número de caracteres:", cadena.length)
console.log("Carácter en la posición 4: ", cadena.charAt(4));
console.log("Carácter en la posición 8: ", cadena.charCodeAt(8));
console.log("Carácter en la posición 19: ", cadena[19]);


let cadena2 = "En un lugar de la mancha";
/*
E n - u n - l u g a r  -  d  e  -  l  a  -  m  a  n  c  h  a
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
*/



console.log("Cadena:", cadena2);
console.log("Posición de la cadena 'lugar' (indexOf):", cadena2.indexOf("lugar"));
console.log("Posición de la cadena 'lugar' (search):", cadena2.search("lugar"));
cadena2 = "¿En qué lugar aparece la palabra 'lugar'?";
console.log("Cadena:", cadena2);
console.log("indexOf 'lugar' sin segundo parámetro:", cadena2.indexOf("lugar"));
console.log("indexOf 'lugar' con segundo parámetro 20:", cadena2.indexOf("lugar",20));
console.log("lastIndexOf 'lugar' sin segundo parámetro:", cadena2.lastIndexOf("lugar"));
console.log("lastIndexOf 'lugar' con segundo parámetro 20:", cadena2.lastIndexOf("lugar",20));


let cadena3 = "Coche, Moto, Avión, Helicóptero";
console.log("Cadena:", cadena3);
console.log("slice 7 - 11:", cadena3.slice(7,11));
console.log("slice 13 - final:", cadena3.slice(13));
console.log("slice (-18) - (-13):", cadena3.slice(-18,-13));
console.log("substring 7 - 11:", cadena3.substring(7,11));
console.log("substring 13 - final:", cadena3.substring(13));
console.log("substr 7 - 4:", cadena3.substr(7,4));
console.log("substr 13 - final:", cadena3.substr(13));


let cadena4 = "en un lugar de la mancha";
console.log("Cadena:", cadena4);
console.log("Cadena mayúsculas:", cadena4.toUpperCase());
cadena4 = "EN UN LUGAR DE LA MANCHA";
console.log("Cadena:", cadena4);
console.log("Cadena minúsculas:", cadena4.toLowerCase());

let cadena5 = "uno, dos, tres";
console.log("Cadena:", cadena5);
cadena5 = cadena5.concat(", cuatro, cinco");
console.log("Cadena:", cadena5);
let cadena6 = "seis, siete";
cadena5 = cadena5.concat(", ", cadena6);
console.log("Cadena:", cadena5);
cadena5 = cadena5.replace("dos", "two");
console.log("Cadena reemplazada:", cadena5);
cadena5 = cadena5.replace("Uno", "one");
console.log("Cadena que no reemplaza Uno:", cadena5);


let cadena7 = " uno, dos tres ";
console.log("Cadena:", cadena7, ".");
cadena7 = cadena7.trim();
console.log("Cadena:", cadena7, ".");
console.log("¿Empieza por uno?:", cadena7.startsWith("uno"));
console.log("¿Empieza por dos?:", cadena7.startsWith("dos"));
console.log("¿Termina por tres?:", cadena7.endsWith("tres"));
console.log("¿Termina por dos?:", cadena7.endsWith("dos"));


let numero1 = 79;
let numero2 = 4.56;
console.log("Entero convertido a string:", numero1.toString());
console.log("Real convertido a string:", numero2.toString());