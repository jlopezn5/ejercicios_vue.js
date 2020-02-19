new Vue({
    el: "#app",
    data: {
        nombre: "indefinido",
        tamanyo : 15
    },
    methods: {
        asignarNombre: function () {
            let nombres = ["juan","pedro","luis","alfonso","alberto","jorge"];
            let aleatorio=Math.floor(Math.random()*nombres.length);
            this.nombre = nombres[aleatorio];            
        }
    }
});