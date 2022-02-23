var app = new Vue({
    el: '#parteReactivaVue',
    data: {
        producto: 'MAC book air',
        logoDefault: '../eje2/assets/educ-notificacion.png',
        numHoras: 0,
        lstLogos: [
            {
                id: 1,
                rutaLogo: '../eje2/assets/educ-notificacion.png',
                nombreLogo: 'Logo de notificaciones'
            },
            {
                id: 2,
                rutaLogo: '../eje2/assets/educ.svg',
                nombreLogo: 'Logo de educ'
            }
        ]
    },
    methods:{
        agregarHoras: function (){
            this.numHoras++;
        },
        cambiarLogo: function(nuevoLogo){
            this.logoDefault = nuevoLogo;
            console.log(nuevoLogo);
        }
    }
})