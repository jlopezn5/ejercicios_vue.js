const vm = new Vue({
	el : 'main',
	data : {
		juegoNuevo : "",
		cantidad : 5,
		juegos_orig : [
		{ titulo : "Spider-Man", existencias: 5},
		{ titulo : "FIFA 2019", existencias: 5},
		{ titulo : "Fortnite", existencias: 5},
		{ titulo : "Red Dead Redemption 2", existencias: 5},
		{ titulo : "Call of Duty: Black Ops 4", existencias: 5},
		{ titulo : "Destiny 22", existencias: 5},
		],
		juegos :[
			{ titulo : "Spider-Man", existencias: 5},
			{ titulo : "FIFA 2019", existencias: 5},
			{ titulo : "Fortnite", existencias: 5},
			{ titulo : "Red Dead Redemption 2", existencias: 5},
			{ titulo : "Call of Duty: Black Ops 4", existencias: 5},
			{ titulo : "Destiny 22", existencias: 5},
		]
		},
	
	methods: {
			
			comprarJuego(juego,index){
				juego.existencias = juego.existencias-1;				
			},
			anadeJuego(){
				if (this.juegoNuevo==""){
					alert("Debes introducir un nombre en el juego");					
				} else {
					this.juegos.push({titulo:this.juegoNuevo,existencias:this.cantidad});
					this.juegos_orig.push({titulo:this.juegoNuevo,existencias:this.cantidad});
					this.juegoNuevo = "";
					this.cantidad = 5;
				}
			},
			restaurarJuegos(){
				this.juegos=[];
				for ( var i = 0; i< this.juegos_orig.length; i++ ) {
   					this.juegos.push({titulo:this.juegos_orig[i].titulo,existencias:this.juegos_orig[i].existencias});
				}
				console.log("restaurado");
			}
		},

	computed:{
			juegosEnAlmacen: function(){
				return this.juegos.filter((juego)=> juego.existencias>0);
			}
		}
});