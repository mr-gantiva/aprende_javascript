console.log("\n------Creando una clase simple------");
class Punto {
    constructor(X, Y)
    {
        this.X = X;
        this.Y = Y;
    }
}
let punto = new Punto(3,3);
console.log(punto);

console.log("\n------Agregando a la clase el metodo mostrarPunto para que muestre la información almacenada------");

class Punto2 {
    constructor(X, Y)
    {
        this.X = X;
        this.Y = Y;
    }
    mostrarPunto(){
        console.log("El punto es (%s, %s)",this.X, this.Y);
    }
}
let punto2 = new Punto2(3,3);
punto2.mostrarPunto();
let punto3 = new Punto2(8,7);
punto3.mostrarPunto();


