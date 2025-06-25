const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con id: ${id}`);
    },
    pausar: function (){
        console.log('Pausando....');
    },
    createPlaylist: function(nombre){
        console.log(`Playlist ${nombre} creada`);
    },
    reproducirPLaylist : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
};

reproductor.reproducir(120);
reproductor.pausar();
reproductor.createPlaylist('Hacer deploy sin llorar');
reproductor.reproducirPLaylist('Hacer deploy sin llorar');

reproductor.borrarCancion = function(id){
    console.log(`Cancion con id: ${id} borrar`);
}

reproductor.borrarCancion(100);