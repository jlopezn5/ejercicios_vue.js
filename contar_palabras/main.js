var app=new Vue({
       el: '#aplicacion',
       data:{ 
         comentarios:'',
         palabras: ''
       },
    methods:{
        cuentaPalabras: function(){
            this.palabras = this.comentarios.split(" ");
          
        }
    }
   })
