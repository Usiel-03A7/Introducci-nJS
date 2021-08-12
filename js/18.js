// Ésta funcion se ejecuta de manera correcta


function sumar( num1 = 0, num2 = 0 ) { // Los parametros van dentro de la funcion (num1, num2)
    console.log( num1 + num2 );
}
sumar(10,10);  //Argunmentos o valores reales 
sumar(52,52);
sumar(4.65,6.5);  
sumar(7,25);  
sumar(22,4);  
sumar(1)
sumar()
//expersion de la funcion

// Ésta funcion como primero ejecuta la orden y despues pide memoria marca error

const suma2 = function (num1, num2) {
    console.log(num1 + num2)
}
suma2(10,5);