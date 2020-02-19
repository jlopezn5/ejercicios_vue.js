new Vue({
    el: "#app",
    data: {
        nombre: "",
        sexo: 'chico'        
    },
    methods: {
        reves(){
            return this.nombre.split('').reverse().join('')
        }
    }
});