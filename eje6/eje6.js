var app = new Vue({
    el: '#parteReactivaVue',
    data: {
        nombreUsuario: 'Victor Medina',
        lstAlumnos:[
            {
                id_alumno: 100,
                nombreAlumno: 'Everardo Contreras',
            },
            {
                id_alumno: 101,
                nombreAlumno: 'Armando Lopez',
            },
            {
                id_alumno: 102,
                nombreAlumno: 'Francisco Torres',
            }
        ]

    },
    methods:{
        agregarAlumno: function (){
            this.lstAlumnos.push({
                id_alumno: 55,
                nombreAlumno: this.nombreUsuario
            })
            
            
        }
    }
})