const sloganUnah = function(){
    console.log('#ProgramaPUMA');
}

const sloganUnah2 = () => console.log('#ProgramaPUMA');



sloganUnah();
sloganUnah2();

const aprendiendo = function(lenguaje, tema){
    console.log(`Aprendiendo ${lenguaje} ${tema}`);
}

const aprendiendo2 =(lenguaje, tema) => console.log(`Aprendiendo ${lenguaje} ${tema}`);

aprendiendo('JavaScripts', 'Arrow Functions');
aprendiendo2('JavaScripts', 'Arrow Functions');


// EJERCICIO
const reproductor={
reproducir: (id) => console.log(`Reproduciendo canción con id: ${id}`),
pausar :() => console.log('Pausando....'),
createPlaylist : (nombre) => console.log(`Playlist ${nombre} creada`),
reproducirPLaylist : (nombre) =>  console.log(`Reproduciendo la playlist ${nombre}`)
};

reproductor.reproducir(120);
reproductor.pausar();
reproductor.createPlaylist('Hacer deploy sin llorar');
reproductor.reproducirPLaylist('Hacer deploy sin llorar');

reproductor.borrarCancion = (id) => console.log(`Cancion con id: ${id} borrar`);

reproductor.borrarCancion(100);