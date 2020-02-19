Vue.component('persona',{
  props: ['nombre','edad','imagen'],
  template:`
  <div>
    <h2>{{ nombre }} tiene {{ edad }} años</h2> 
    <img width="200" :src="imagen" /> 
    </div>
  `
})

var vm=new Vue({
  el: "#app"
})