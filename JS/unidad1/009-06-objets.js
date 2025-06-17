"use strict";

//Objeto literal
const producto={
    nombre:'Semitas',
    precio: 35,
    disponible: true,
    imagen:'semita.jpg',
}


function Producto(nombre, precio) {
    this.nombre = nombre; // this el obtiene una propiedad que se llama nombre
    this.precio = precio;
    this.disponible = true;
} 

const producto2= new Producto('Café', 175);

console.log(producto2);


//Object .keys , values and entries
console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));
