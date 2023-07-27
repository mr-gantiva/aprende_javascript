let fechaactual = new Date();
let fechapasada = new Date(2016,1,21,20,30,0,0);
console.log("Fecha actual:", fechaactual.toString());
console.log("Fecha pasada:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20,30,0);
console.log("Fecha pasada 2:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20,30);
console.log("Fecha pasada 3:", fechapasada.toString());
fechapasada = new Date(2016,1,21,20);
console.log("Fecha pasada 4:", fechapasada.toString());
fechapasada = new Date(2016,1,21);
console.log("Fecha pasada 5:", fechapasada.toString());
fechapasada = new Date(2016,1);
console.log("Fecha UTC:", fechaactual.toUTCString())


/*
    -getFullYear: devuelve el valor del año como entero de 4 dígitos.
    -getMonth: devuelve el valor del mes. Recuerda que el valor
    devuelto va de 0 a 11.
    -getDate: devuelve el valor del día en valor de 1 a 31.
    -getHours: devuelve el valor de la hora en valor de 0 a 23.
    -getMinutes: devuelve el valor de los minutos en valor de 0 a 59.
    -getSeconds: devuelve el valor de los segundos en valor de 0 a
    59.
    -getMilliseconds: devuelve el valor de los milisegundos en valor
    de 0 a 999.
    -getDay: devuelve el valor del día de la semana en valor de 0 a 6.
    -El valor 0 será el domingo, el 1 el lunes, etc.
*/

let fecha = new Date();
console.log("Fecha: ", fecha);
console.log("Fecha a cadena: ", fecha.toString());
console.log("Año: ", fecha.getFullYear());
console.log("Mes: ", fecha.getMonth());
console.log("Día: ", fecha.getDate());
console.log("Hora: ", fecha.getHours());
console.log("Minutos: ", fecha.getMinutes());
console.log("Segundos: ", fecha.getSeconds());
console.log("Milisegundos: ", fecha.getMilliseconds());
console.log("Día de la semana: ", fecha.getDay());

/* 
    -setFullYear: modifica el valor del año. El valor pasado como
    parámetro tiene que ser un entero de 4 dígitos.
    -setMonth: modifica el valor del mes. El valor pasado como
    parámetro tiene que ser un valor de 0 a 11.
    -setDate: modifica el valor del día. El valor pasado como
    parámetro tiene que ser un valor de 1 a 31.
    -setHours: modifica el valor de la hora. El valor pasado como
    parámetro tiene que ser un valor de 0 a 23.
    -setMinutes: modifica el valor de los minutos. El valor pasado
    como parámetro tiene que ser un valor de 0 a 59.
    -setSeconds: modifica el valor de los segundos. El valor pasado
    como parámetro tiene que ser un valor de 0 a 59.
    -setMilliseconds: modifica el valor de los milisegundos. El valor
    pasado como parámetro tiene que ser un valor de 0 a 999.
*/
let fecha2 = new Date();
console.log("Fecha:", fecha2.toString());
fecha2.setFullYear(2000);
console.log("Fecha (Año):", fecha2.toString());
fecha2.setMonth(0);
console.log("Fecha (Mes):", fecha2.toString());
fecha2.setDate(1);
console.log("Fecha (Día):", fecha2.toString());
fecha2.setHours(8);
console.log("Fecha (Hora):", fecha2.toString());
fecha2.setMinutes(30);
console.log("Fecha (Minutos):", fecha2.toString());
fecha2.setSeconds(54);
console.log("Fecha (Segundos):", fecha2.toString());
fecha2.setMilliseconds(333);
console.log("Fecha (Milisegundos):", fecha2.toString());
console.log(fecha2);