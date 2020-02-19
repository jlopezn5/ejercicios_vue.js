// Definir un nuevo componente llamado button-counter
Vue.component('component-helado', {
 props: ['helado'],
 template: `
    <div> 
       <button class="btn btn-success" v-on:click="agregar(helado)" v-if="!helado.seleccionado"> + </button> 
       <button class="btn btn-danger" v-on:click="eliminar(helado)" v-if="helado.seleccionado"> - </button> 
       <span> {{ helado.sabor }} </span> 
       <hr /> 
    </div> 
 `,
 methods: {
    agregar: function(p_helado){
       p_helado.seleccionado = true; 
    },
    eliminar: function(p_helado){ 
       p_helado.seleccionado = false; 
    }
 }
});
var vm = new Vue({ el: '#app' ,
data:{
	helados: [
       {sabor: 'Chocolate', seleccionado: false},
       {sabor: 'Dulce de leche', seleccionado: false},
       {sabor: 'Frutilla', seleccionado: false},
       {sabor: 'Limón', seleccionado: false},
       {sabor: 'Vainilla', seleccionado: false} 
    ] 
}})
