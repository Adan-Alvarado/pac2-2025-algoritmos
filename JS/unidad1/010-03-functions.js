iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
     terceraFuncion('Juan', 'Perez');
}

function terceraFuncion(usuario){
    console.log('Autenticando usuario.... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
    cuartaFuncion();
}

let total = 0;
function agregarCarrito(precio){
    return total  += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

agregarCarrito(350);
agregarCarrito(120);
agregarCarrito(320);

const totalPagar = calcularImpuesto();

console.log(`total: ${total}`);
console.log(`total a pagar: ${totalPagar}`);
