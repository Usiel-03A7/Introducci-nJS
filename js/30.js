// Promises
const usuarioAt = new Promise((resolve, reject) =>{
    const auth = true;
    if (auth) {
        resolve('Usuario autenticado'); // el promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // el promise no se cumple
    }
})
console.log(usuarioAt);
// # valores para el Promise
// :1: Pending : Pendiente 
// :2: fulfilled : que se realizó con éxito
// :3: rejected : Rechazado 
usuarioAt 
    .then( resuldato =>  console.log(resuldato))
    .catch( error => console.log(error))