const auto1 = {
    marca: 'FIAT',
    modelo: 'UNO',
    peso: 1000,
    color: 'Rojo'
}

const auto2 = {
    marca: 'RENAULT',
    modelo: '12',
    peso: 1100,
    color: 'Marron'
}

auto1.marca = 'BMW';
auto1.modelo = 'X5';

console.log(auto1);

console.log('El color del auto1 es: ', auto1.color);
console.log('El color del auto2 es: ', auto2.color);

console.log(auto1["marca"]);


/******************OTRO EJEMPLO********************/

const vendedor = {
    nombre : 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function(){
        return "Pedro ha vendido un auto";
    },
    nombreCompleto : function() {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.vender());