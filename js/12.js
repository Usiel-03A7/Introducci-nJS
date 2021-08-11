"use strict" //correr JS de manera estricta 
// Objetos
const producto = {
    NombreProducto: 'Monitor de 20" ',
    precio: 300,
    disponible: true
} 

Object.freeze(producto) //no permite modificar el estado add o delete
Object.seal(producto) //Si permite modificar propiedades existentes pero no añade ni elimina

producto.imagen = 'imagen.jog' // use Strict pule el código para mejor preformas lo cual haría quitar ésta linea
                               


console.log(producto)