new Vue({
    el: "main",
    data: {
        nombre: "",
        apellidos: "",
        email: ""
    },
    methods: {
    	camposCompletos: function(){
    		return this.nombre!="" && this.apellidos!="" && this.email!="";
    	}
    }
});