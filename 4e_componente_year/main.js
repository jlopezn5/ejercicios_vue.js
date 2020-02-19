Vue.component("years-exp", {
    template: "#years_template",
    props : ["years","tech"],
    methods: {
        experienciaUp: function () {
            console.log(this.years);
            if (this.years < 10)
                this.years++;
            else
                console.error("No se puede tener más experiencia de 10 años.");
        },
        experienciaDown: function () {
            if (this.years > 0)
                this.years--;
            else
                console.error("No se puede tener menos experiencia")
        }
    }
});

new Vue({
    el: "#app",
    data: {
        years_php : 10,
        years_js : 150,
    }
});