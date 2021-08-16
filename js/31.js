const boton = document.querySelector('#boton')
boton.addEventListener('click', function () {
    Notification.requestPermission()
        .then(resultado => console.log(`el resultado es ${resultado}`))
})
if (Notification.permission == 'granted') {
    new Notification('Esta es una maldita notificación', {
        icon: 'img/LOGO.jpg',
        body: "Sígue chingandole al curso, maricón."
    }); 
} 