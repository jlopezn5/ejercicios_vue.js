var vm = new Vue({
    el: "#app",
    data: {
        names : [],
        nombre : '',
        apellidos : '',
        email : ''
    },
    mounted() {
        this.cargaContactos();
    },
    methods: {
        cargaContactos: function(){
            this.$http.post('contactos.php',{'operacion':'leer'}).then((respuesta)=> {
                this.names=respuesta.data;
            })
        },
        addNom : function(){
            if (this.nombre=="" || this.apellidos=="" || this.email==""){
                alert("Todos los campos son oblitatorios!!")
            } else {
                  this.$http.post('contactos.php',
                            {'operacion':'insertar',
                            'nombre': this.nombre,
                            'apellidos': this.apellidos,
                            'email' : this.email
                            },
                            ).then((respuesta)=> {
                        this.names=respuesta.data;
                        this.nombre="";
                        this.apellidos="";
                        this.email=""
                    })  
            }
        },
        delNom : function(contacto){
            if (confirm("¿Seguro que quieres eliminar a "+ contacto.nombre + " " + contacto.apellidos+"?")){
               this.$http.post('contactos.php',
                        {'operacion':'eliminar',
                        'nombre': contacto.nombre
                        },
                        ).then((respuesta)=> {
                    this.names=respuesta.data;
                })    
            }
        }
    }
})
