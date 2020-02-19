Vue.component('movie-card', {
  props: ['image','title'],
  template:`
    <div>
    <h2>{{ title }} </h2>
      <img width="200" :src="image" v-bind:alt="title" />      
    </div>
  `
})
var vm = new Vue({
  el: '#app',
  data:{
    peliculas:[
      { 'title':'Retribucion','image':'https://i.ytimg.com/vi/JRW-9XkOO3s/maxresdefault.jpg'},
      {'title':'Libertad','image':'https://i.ytimg.com/vi/gn1pz0rnNHs/sddefault.jpg'}
    ]
  }
})
