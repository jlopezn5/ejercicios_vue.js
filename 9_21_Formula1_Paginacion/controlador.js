var vm = new Vue({
	el: "#app",
	data: {
		datos : [],
		filtro: '',
		limit:10,
		offset:0
	},
	mounted() {
		this.cargaPilotos();
	},
	methods: {
		cargaPilotos: function(){
			var url='https://ergast.com/api/f1/drivers.json?limit='+this.limit+'&offset='+this.offset;
			console.log(url);
			this.$http.get(url).then((respuesta)=> {
				this.datos=respuesta.body.MRData.DriverTable.Drivers;
			})
		},
		siguiente : function(){
			this.offset+=10;
			this.cargaPilotos();
		},
		anterior : function(){
			if (this.offset>=10){
				this.offset-=10;
				this.cargaPilotos();
			}
		}
	},
	computed: {
		pilotosFiltrado: function () {
			return this.datos.filter((item) => item.givenName.includes(this.filtro));
		}
	}
})