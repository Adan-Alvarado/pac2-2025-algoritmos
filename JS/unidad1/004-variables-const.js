console.log('Desde un archivo con const');

/**
 * Las variables con const se usan para definir variables que cambiaran a lo largo dek ciclo de vida de la aplicación
 * 
 * Las variables con const también tienen un ambito de bloque.
 * 
 */

function ejemplo(){
    const x=15;

    if(true){
        const x=30;
        console.log(x);
    }
    
    x = 16;

    console.log(x);
}

ejemplo();

const producto="semitas";

producto="café";
