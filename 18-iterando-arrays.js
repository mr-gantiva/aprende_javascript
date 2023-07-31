console.log("\n------Iterando array usando un bucle for------");
let animales = ["Perro", "Gato", "Periquito","Caballo", "Pez", "Rana", "Conejo"];
console.log(animales);

for(let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

console.log("\n------Iterando array usando dos variantes de bucle for------");
let animalesDobleFor = ["Perro", "Gato", "Periquito", "Conejo"];

for (i in animalesDobleFor) {
    console.log(i,":",animalesDobleFor[i]);
}
for (animal of animalesDobleFor) {
    console.log(animal);
}