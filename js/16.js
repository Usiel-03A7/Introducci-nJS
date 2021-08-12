// Declaracion de la funcion

// Ésta funcion se ejecuta de manera correcta
sumar()

function sumar() {
    console.log(10 + 10)
}

//expersion de la funcion

// Ésta funcion como primero ejecuta la orden y despues pide memoria marca error
suma2();
const suma2 = function () {
    console.log(3.4 + 63)
}