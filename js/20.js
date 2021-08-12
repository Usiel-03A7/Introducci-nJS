// Métpdps de propiedad 
const reproductor = {
    reproducir : function (id) {
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar : function(){
        console.log(`Pausado...`);
    },
    crearPlaylist : function (nombre){
        console.log(`creando la play list ${nombre}`);
    },
    reproducirPlaylist : function (nombre){
        console.log(`reproduciendo la play list ${nombre}`);
    }

}
reproductor.borrarCaciones = function( id ){
    console.log(`se ha borrado la cancion ${id}`);
}
reproductor.reproducir(657);
reproductor.pausar();
reproductor.borrarCaciones(22)
reproductor.crearPlaylist('Heavy metal');
reproductor.reproducirPlaylist('Heavy metal');