var app = new Vue({
    el: '#parteReactivaVue',
    data: {
        producto: 'Curso vue ',
        lstMateriales: [
            {
                id_material: 250,
                nombre_material: 'Lectura 1'
            },
            {
                id_material: 251,
                nombre_material: 'Grabación de clase en meet'
            },
            {
                id_material: 252,
                nombre_material: 'Grabación meet de clase 2'
            }
        ],
        lstActividades: [
                'Actiivdad inicial',
                'Actiivdad secundaria',
                'Actiivdad cuerpo',
                'Actiivdad final',
                'Ordinario',
                'Extaordinario'
        ]
    }
})