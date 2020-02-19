const vm = new Vue({
	el : 'main',
	mounted(){
		this.cargarPersonas();
	},
	data:{
		personas:[]
	},
	methods:{
		cargarPersonas(){
			axios
			  .get('https://randomuser.me/api/?results=10')
			  .then(response => (this.personas = response.data.results))
			
			}
		}
	
});