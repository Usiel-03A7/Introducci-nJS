
const carrito = [
    {
        nombre: 'monitor 20"',
        precio: 2500
    }, {
        nombre: 'Teclado',
        precio: 300
    }, {
        nombre: 'mause',
        precio: 250
    }, {
        nombre: 'hub usb',
        precio: 100
    }, {
        nombre: 'audifonos',
        precio: 600
    }, {
        nombre: 'silla gamer',
        precio: 5000
    }, {
        nombre: 'tapete gamer',
        precio: 300
    }
]
// for each imprimir en consola el foreach

carrito.forEach( producto => console.log(producto.nombre)); // así se imprime 
const arreglo1 = carrito.forEach( producto => console.log(producto.nombre));


//map  crear un nuevo arreglo con caracteristicas usar

carrito.map( producto => console.log(producto.nombre)); //así se imprime 
const arreglo2 = carrito.map( producto => console.log(producto.nombre)); //así se copia el arreglo
console.log("arreglo1");
console.log(arreglo1);
console.log("arreglo2");
console.log(arreglo2);