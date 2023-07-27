/*
While
*/

let i = 1;
while (i<10) {
    console.log(i)
    i++;
}

const prompt = require('prompt-sync')();

let valor = 0;
let fin = false;

while(!fin) {
    valor = parseInt(prompt("Introduzca un número mayor que 100: "));
    if(valor > 100) {
        fin = true;
    }
    else {
        console.log("El valor introducido no es mayor que 100");
    }
}
console.log("Fin del programa.");


/*
For
*/

for(let i = 1; i < 10 ; i++) {
    console.log(i);
}

/**
Do While
*/

const prompt2 = require('prompt-sync')();
let valor2 = 0;

do{
    valor2 = parseInt(prompt("Ingrese un número mayor que 100: "));
    if(valor2 <= 100) {
        console.log("El valor ingresado no es mayor que 100");
    }
}while (valor2 <=100);

console.log("Fin del programa");

/* BUCLES ANIDADOS */

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 5; j++) {
        console.log("item1 = %s, item2 = %s",i,j);
    }
}

console.log("Bucle anidado while - for")
let x = 0;
while(x < 3) {
    for(let y = 0; y < 5; y++) {
        console.log("item1 = %s, item2 = %s", x,y);
    }
    x++;
}

console.log("Bucle anidado while - while");

let a = 0;

while(a < 3) {
    let b = 0;
    while(b < 5) {
        console.log("item1 = %s, item2 = %s", a,b);
        b++;
    }
    a++;
}