//Objeto literal
const producto={
    nombre:'Semitas',
    precio: 35,
    disponible: true,
    imagen:'semita.jpg',
}


//agregar
producto.creadoPor= 'Juan Perez';

//Quitar
delete producto.disponible; //No recomendable

console.log(producto);

