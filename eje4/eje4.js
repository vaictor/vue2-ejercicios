var app = new Vue({
    el: '#parteReactivaVue',
    data: {
        producto: 'MAC book air',
        materiales: [
            {
                id_material: 250,
                nombre_material: 'Lectura 1'
            },
            {
                id_material: 251,
                nombre_material: 'Grabación meet de clase'
            },
            {
                id_material: 252,
                nombre_material: 'Grabación meet de clase 2'
            }
        ],
        actividades: [
                'Actiivdad inicial',
                'Actiivdad secundaria',
                'Actiivdad cuerpo',
                'Actiivdad final'
        ]
    }
})