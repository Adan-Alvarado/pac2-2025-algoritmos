function Sumar(a=0, b=0) { //En este momento a y b son parámetros
    console.log(a + b);
}

Sumar(10, 3); //Estos son argumentos

function saludar(nombre = 'Desconocido', apellido ='Vació'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Pedro','Perez');