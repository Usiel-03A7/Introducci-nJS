// more Array methods 
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']

const carrito = [
    {nombre: 'monitor 20"', precio: 2500},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'mause', precio: 250},
    {nombre: 'hub usb', precio: 100},
    {nombre: 'audifonos', precio: 600},
    {nombre: 'silla gamer', precio: 5000},
    {nombre: 'tapete gamer', precio: 300}
]
meses.forEach(function (mes){
  if(mes == 'marzo'){
      console.log('si existe el mes :'+ mes)
  }
})

//includes 
// let resultado = meses.includes('diciembre') // sirve para arreglos simples
// console.log(resultado)

//some es ideal para arreglo de objetos 
let resulta2 = carrito.some(function(producto){
    return producto.nombre === 'tapete gamer'
})
console.log(resulta2)

resul = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)
console.log(resul)

// filter
 ress = carrito.filter(function(producto){
     return producto.precio<1000
 })
 console.table(ress)
 ress = carrito.filter(function(producto){
     return producto.nombre !== 'mause'
 })
 console.table(ress)