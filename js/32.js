// Async / await

function descargarNC() {
    return new Promise(resolve => {
        console.log('descargando clienmtes espere...')

        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 1000);
    })
}
async function app() {
    try {
        const resultado = await descargarNC();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app();
console.log('éste codigo no se bloquea')