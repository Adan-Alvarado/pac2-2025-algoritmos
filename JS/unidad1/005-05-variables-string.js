const producto = "Monitor de 20 pulgadas";

//Remplazar texto por otro

console.log(producto);
console.log(producto.replace('pulgadas','"'));

//Extraer una parte de una cadena de texto
console.log('Slice;');
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

//Alternativa a Slice

console.log('SUBSTRING');
console.log(producto.substring(0, 10));
console.log(producto.substring(8));
console.log(producto.substring(2, 3));


console.log('CHAR AT:');
console.log(producto.charAt(3));





