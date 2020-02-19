new Vue({
    el: "#app",
    data: {
        nombre: "",
        sexo: 'chico',
        experiencia_php: 0
    },
    methods: {
        singUp: function () {

            console.log("Registrado el usuario: " + this.nombre);
        },
        experienciaUp: function () {
            if (this.experiencia_php < 10)
                this.experiencia_php++;
            else
                console.error("No se puede tener más experiencia de 10 años.");
        },
        experienciaDown: function () {
            if (this.experiencia_php > 0)
                this.experiencia_php--;
            else
                console.error("No se puede tener menos experiencia")
        }
    }
});