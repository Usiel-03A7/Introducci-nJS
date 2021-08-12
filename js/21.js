// Arrow functions (funciones de flecha)

const suma2 = (n1, n2) => console.log(n1 + n2);

suma2(5, 10);
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`) //Cuando solo sea una linea ==> {} son opcionales y si hay 1 parametro
//si hay 1 parametro podemos eliminar ==> () despues del " = "
aprendiendo('JavaScript');

// more Array methods
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']

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
meses.forEach(mes => {
    if (mes == 'marzo') {
        console.log('si existe el mes :' + mes);
    }
})

//some es ideal para arreglo de objetos
let resulta2 = carrito.some(producto => producto.nombre === 'tapete gamer');

resulta2 = carrito.reduce((total, producto) => total + producto.precio, 0);

// filter
resulta2 = carrito.filter(producto => producto.precio < 1000);

resulta2 = carrito.filter(producto => producto.precio > 1000);

resulta2 = carrito.filter(producto => producto.nombre !== 'mause');

console.log(resulta2);
