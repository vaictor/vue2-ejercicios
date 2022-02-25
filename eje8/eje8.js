var app = new Vue({
    el: '#parteReactivaVue',
    data: {
        nombreUsuario: 'Victor Medina',
        caratulas: ''
    },
    mounted (){
        axios
            .get('http://deveduc.ddns.net:88/listadocursos/agenda/galerias.json')
            .then(response  => (this.caratulas = response.data.galerias))
    },
    methods:{
    }
})