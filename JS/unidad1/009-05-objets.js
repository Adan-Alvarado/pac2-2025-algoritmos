"use strict";

//Objeto literal
const producto={
    nombre:'Semitas',
    precio: 35,
    disponible: true,
    imagen:'semita.jpg',
}

const medidas= {
    peso: '2kg',
    medidas: '0.5m'
}

console.log(producto);
console.log(medidas);


const resultado= Object.assign(producto, medidas);
//console.log(resultado);

//Spread Operator o Rest Operator

const resultado2 = {...producto, ...medidas}
const resultado3 = {...producto, medidas}

console.log(resultado2);
console.log(resultado3);
