var vm = new Vue({
    el: "#app",
    data: {
        maxPreguntas: 0,
        respondido: false,
        pregunta: '',
        terminado: false,
        aciertos : 0,
        respuestas : [],
        datos : [],
        titulo_pregunta: ''
    },  mounted(){
     // invocar los métodos
     this.cargaPersonas();
    }, methods: {
    	cargaPersonas: function(){
			this.$http.get('getPreguntas.php').then((respuesta)=> {
                this.datos=respuesta.body;
                console.log(this.datos);
                this.iniciar();
			})
    	},
        iniciar: function(){
                this.respondido=false;
                this.correcta=-1,
                this.pregunta=0;
                this.terminado=false;
                this.aciertos=0;
                this.maxPreguntas=this.datos.length;
                this.titulo_pregunta=this.datos[this.pregunta].titulo;
                this.respuestas=[this.datos[this.pregunta].respuesta1,this.datos[this.pregunta].respuesta2,this.datos[this.pregunta].respuesta3];
        },
        comprueba: function(eleccion,indice){
          this.correcta=this.datos[this.pregunta].correcta;
          if (this.respondido==false){
            if (this.datos[this.pregunta].correcta==indice+1){
                this.aciertos++;
            } 
            this.respondido=true;
        }
    },  siguiente: function(){
        if (this.pregunta<this.maxPreguntas-1){
            this.pregunta++;
            this.respondido=false;
            this.titulo_pregunta=this.datos[this.pregunta].titulo;
            this.respuestas=[];
            this.respuestas.push(this.datos[this.pregunta].respuesta1);
            this.respuestas.push(this.datos[this.pregunta].respuesta2);
            this.respuestas.push(this.datos[this.pregunta].respuesta3);            
        } else{
            this.terminado=true;
        }
    }

    }
});
