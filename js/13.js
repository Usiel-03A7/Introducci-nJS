// unir objetos en uno sin perder el original 
const producto = {
    NombreProducto: 'Monitor de 20" ',
    precio: 300,
    disponible: true
}
const medidas = { 
    peso: '1kg',
    medida: '1 m'
}
const nuevoP = {...producto, ... medidas} //unir ambos objetos en uno sin modificar los originales

console.log(nuevoP )
console.log(producto)