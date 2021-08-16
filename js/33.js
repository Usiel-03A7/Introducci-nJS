async function ontenerEmpl() {

    const archivo = '/js/employed.json';

        // fetch(archivo)
        //     .then(resultado =>  resultado.json() )
        //     .then( datos =>{
        //         const {empleados} = datos;

        //         empleados.forEach(empleado => {
        //         console.log(empleado);

                
        //     })
        // })
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(resultado)
    

}
ontenerEmpl();