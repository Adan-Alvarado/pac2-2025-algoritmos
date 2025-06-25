 const meses=['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio'];

//meses[0]='Nuevo Mes'
//meses[10]='Octubre'

meses.push('Julio'); //agregar elementos al final del arreglo
meses.unshift('Nuevo Mes')


const carrito = []; 

const producto ={
    nombre: 'semitas',
    precio: 35,
    cantidad: 1
};

const producto2 ={
    nombre: 'café',
    precio: 180,
    cantidad: 1
};

carrito.push(producto, producto2);
//carrito.push(producto2);

console.log(meses);
console.log(carrito);
 