var vm = new Vue({
	el: "#app",
	data: {
		datos : [],
		filtro: ''
	},
	mounted() {
		this.cargaPilotos();
	},
	methods: {
		cargaPilotos: function(){
			this.$http.get('http://ergast.com/api/f1/drivers.json').then((respuesta)=> {
				this.datos=respuesta.body.MRData.DriverTable.Drivers;
			})
		}
	},
	computed: {
		pilotosFiltrado: function () {
			return this.datos.filter((item) => item.givenName.includes(this.filtro));
		}
	}
})