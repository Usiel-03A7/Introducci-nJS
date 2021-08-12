// for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(`el numero ${i} es par`)
//     }else{
//         console.log(`el numero ${i} es impar`)
//     }
// }
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

for (let i = 0; i < carrito.length; i++) {
    console.log(`Dato numero ${i}`)
    console.log(carrito[i])    

}


// while loop
console.log("while")
let i =0;

while (i<carrito.length) { //primero revisa que la condición se cumpla para poder ejecutarse
    console.log(carrito[i].nombre)

    i++;
}

// do while loop (se ejecuta al menos una vez aunque la condición no se cumpla)

console.log("do while");
let o=0;
do {
    
    console.log(carrito[o].precio);
    o++;
} while (o<carrito.length);