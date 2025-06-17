"use strict";

//Objeto literal
const producto={
    nombre:'Semitas',
    precio: 35,
    disponible: true,
    imagen:'semita.jpg',
}

//Congelar
//Object.freeze(producto);


//Sellar
Object.seal(producto);


producto.disponible = false;
//delete producto.disponible;
//producto.color ='blanco';


console.log(producto);
console.log(Object.isFrozen(producto));


