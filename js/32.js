// Async / await

function descargarNC() {
    return new Promise(resolve => {
        console.log('descargando clienmtes espere...')

        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 1000);
    })
}
function descargarUltimos() {
    return new Promise(resolve => {
        console.log('descargando pedidos espere...')

        setTimeout(() => {
            resolve('los pedidos fueron descargados')
        }, 1000);
    })
}
async function app() {
    try {
        // const clientes = await descargarNC();
        // const pedidos = await descargarUltimos(); 
        // console.log(clientes)
        // console.log(pedidos)
        const resultado = await Promise.all([  descargarNC(), descargarUltimos() ]); //arreglo de promises Promise.all
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app();
