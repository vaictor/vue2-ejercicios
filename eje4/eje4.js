var app = new Vue({
    el: '#app',
    data: {
        producto: 'MAC book air',
        ligaProducto: 'comprar.php',
        titleLigaProducto: 'Comprame por favor!',
        siHay: false,
        enBodega: 0,
        materiales: [
            {
                id_material: 250,
                material: 'Lectura 1'
            },
            {
                id_material: 251,
                material: 'Grabación meet de clase'
            },
            {
                id_material: 252,
                material: 'Grabación meet de clase 2'
            }
        ]
    }
})