let animales = ["Perro","Gato","Periquito","Conejo"];
let equipos = new Array("FC Barcelona", "Atletico de Madrid", "Real Madrid");
console.log(animales);
console.log(equipos);

/*
Acceder a los elementos del Array
*/

console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);
console.log(animales[3]);

animales[1]= "Caballo";
animales[3]= "Cangrejo";
console.log(animales);

/*
Metodos para Arrays
push: añade un elemento al final del array
pop: elimina el último elemento del array. El elemento eliminado es devuelto como resultado de la ejecución
shift: elimina el primer elemento del array.El elemento eliminado es devuelto como resultado de la ejecución
unshift: añade un elemento como primer elemento del array
splice: metodo que permite añadir y eliminar elementos del array.
concat: método que devuelve la concatenación del array que ejecuta el método con los arrays o elementos que pasan por parámetros
reverse: método que invierte el orden de los elementos del array.
slice: método que obtiene un array a partir del array original.
*/
console.log("*************EJEMPLO CON METODOS PARA ARRYS*************\n")
let animales2 = ["Perro","Gato","Periquito","Conejo"];
console.log("Número de elementos: ",animales2.length);
console.log(animales2);

console.log("\n------Agregando un elemento al final con push------");
animales2.push("Caballo");
console.log("Número de elementos: ",animales2.length);
console.log(animales2);

console.log("\n------Eliminando el último elemento al final con pop------");
let eliminado = animales2.pop();
console.log("Elemento eliminado: ",eliminado);
console.log("Número de elementos: ",animales2.length);
console.log(animales2);

console.log("\n------Eliminando el primer elemento con shift------");
let eliminadoShift = animales2.shift();
console.log("Elemento eliminado: ", eliminadoShift);
console.log(animales2);

console.log("\n------Agregando un elemento al principio con unsfhift------");
animales2.unshift("Caballo");
console.log(animales2);

console.log("\n------Usando metodo splice------");
let animales3 = ["Perro", "Gato", "Periquito"];
console.log(animales3);
console.log("Agregando los elementos Caballo y Pez a partir de la ubicación 1 sin eliminar nada");
animales3.splice(1,0,"Caballo", "Pez");
console.log(animales3);
animales3.splice(2, 1, "Rana", "Tiburon"); 


console.log("\n------Usando metodo concat------");
let animalesConcat = ["Perro","Gato","Periquito"];
let animalesConcat2 = new Array("Caballo", "Pez");
let animalesConcat3 = ["Rana","Conejo"];
console.log(animalesConcat);
console.log(animalesConcat2);
console.log(animalesConcat3);

let animalesUnion = animalesConcat.concat(animalesConcat2);
console.log(animalesUnion);

let animalesUnion2 = animalesConcat.concat(animalesConcat2,animalesConcat3);
console.log(animalesUnion2);

let animalesUnion3 = animalesConcat2.concat("Ballena");
console.log(animalesUnion3);


console.log("\n------Usando metodo reverse------");
let animalesReverseSlice = ["Perro", "Gato", "Periquito","Caballo", "Pez", "Rana", "Conejo"];
console.log(animalesReverseSlice);
console.log(animalesReverseSlice.reverse());

console.log("\n------Usando metodo slice------");
let subanimales = animalesReverseSlice.slice(2,5);
console.log(subanimales);
let subanimales2 = animalesReverseSlice.slice(4);
console.log(subanimales2);





