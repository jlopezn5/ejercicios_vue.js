Vue.component("mis-noticias",{
	template: '<ul><li v-for="noticia in noticias"><strong><u>{{ noticia.id }}- {{ noticia.title }}</u></strong>: <br> {{ noticia.body }} </li></ul> ',
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
				.then((respuesta) => {
					console.log(respuesta);
					this.noticias=respuesta.data;
				})
	},
	data(){
		return {
		noticias:[],
	}
	},
});

new Vue({
	el: 'main',
});