Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        producto: 'MAC book air',
        rutaLogo: 'assets/educ-notificacion.png',
        ligaProducto: '/controlller/comprar.php',
        titleLigaProducto: '¡Comprame por favor!'
    }
})