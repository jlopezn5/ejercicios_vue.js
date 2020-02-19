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
		],
		carrito : []
		},
	
	methods: {
			ordenarJuegos(){
				this.juegos.sort();
			},
			estaComprado(titulo){
				var encontrado=-1;
				for (var i = 0; i < this.carrito.length && encontrado==-1; i++) {
					if (this.carrito[i].titulo==titulo){
						encontrado=i;
					}
				}				
				return encontrado;
			},
			localizaJuego(titulo){
				var encontrado=-1;
				for (var i = 0; i < this.juegos.length && encontrado==-1; i++) {
					if (this.juegos[i].titulo==titulo){
						encontrado=i;
					}
				}				
				return encontrado;
			},
			comprarJuego(juego,index){
				juego.existencias = juego.existencias-1;		
				var posicion=this.estaComprado(juego.titulo);				
				if (posicion==-1)	
					this.carrito.push({titulo:juego.titulo,existencias:1});	
				else
					this.carrito[posicion].existencias++;
			},
			devolverJuego(juego,index){
				juego.existencias = juego.existencias-1;		
				var posicion = this.localizaJuego(juego.titulo);
				
				this.juegos[posicion].existencias++;
				if (juego.existencias==0){
					this.carrito.splice(index,1);
				}
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
				};
				this.carrito=[];				
			}
		},

	computed:{
			juegosEnAlmacen: function(){
				return this.juegos.filter((juego)=> juego.existencias>0);
			},
			totalJuegosCarrito: function(){
				var total=0;
				for (var i = 0; i < this.carrito.length; i++) {

					total+=this.carrito[i].existencias;
				}
				return total;
			},
			totalJuegos: function(){
				var total=0;
				for (var i = 0; i < this.juegos.length; i++) {

					total+=this.juegos[i].existencias;
				}
				return total;
			}
		}
});