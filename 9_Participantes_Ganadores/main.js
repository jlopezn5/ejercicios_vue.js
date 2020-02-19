Vue.component("elegir-ganador",{
	props: ['listado'],
	template: "#elegir-ganador-template",
	methods: {
		elegirGanador(){
			let cantidad = this.participantes.length;
			let indice = Math.floor(Math.random() * cantidad);
			this.ganador = this.participantes[indice];
			this.participantes.splice(indice,1);
			this.ganadores.push(this.ganador);
			this.numGanadores++;
			if (this.numGanadores==this.numJugadores)
				this.fin=true;
			console.log(this.fin);
		}
	},
	
	data(){
		return {
			numGanadores : 0,
			numJugadores : this.listado.length,
			participantes: this.listado,
			ganadores : [],
			fin : false,
			ganador : false
		}
	},
});

new Vue({
	el: 'main',
	data : {
		personas : [
		'Juan', 'Alicia', ' Pedro', 'Javier', 'Marcos'
		]
	}
});