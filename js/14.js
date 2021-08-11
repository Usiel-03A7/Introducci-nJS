// Arreglos 

const numeros = [10,20,30,40,50]

console.table(numeros)

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']

// console.table(meses)

// acceder a un dato de un arreglo



//conocer el total de un arreglo

// console.log(meses.length)
numeros.push(1654)  // Agrega al final  numeros
numeros.unshift(5)  //agrega al inicio


// meses.pop() //quita en cola (al fina)
// meses.shift() //quita  al principio 


    // meses.s plice(1,1)
console.table(numeros)
console.table(meses)

//rest operatior or spread operator

const nuevomeses = [...meses, 'junio'] //así simulas el push
const nuevomeses = ['junio', ...meses] //así simulas el unshift

console.table(nuevomeses)