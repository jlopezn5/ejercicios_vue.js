Vue.component('jose',{
	template: '<h1>Jose es el mejor</h1>'
})
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 'data' es técnicamente una función, por lo que Vue no
  // se quejará, pero estamos devolviendo la misma referencia
  // de objeto en cada instancia de componente
  data: function () {
    return { counter: 0 }
  }
})
new Vue({
  el: '#demo'
})
