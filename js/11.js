// Objeto
const producto = {
    NombreProducto: 'Monitor de 20" ',
    precio: 300,
    disponible: true
}
// Forma anterior 
const precioProducto = producto.precio
console.log(precioProducto)

// Distructuring
const {precio,disponible} = producto

console.log(precio)
console.log(disponible)