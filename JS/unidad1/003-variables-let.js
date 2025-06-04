// console.log('Desde un archivo con let');

// Variables con let desde ES6, para tener una forma
// más precisa de declarar variables

function ejemplo(){
    let x= 12;
    if(true){
        let x=23;
        console.log(x);
    }

    console.log(x);

}

//ejemplo();

let producto ="semita";
producto = 20;
producto = true;
producto = null;

console.log(producto);


let precio;

precio=30;
console.log(precio);