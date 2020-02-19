const eventBus = new Vue();

Vue.component("listado-productos", {
	props: ['productos'],
	template: `<section>
				<h1>Artículos disponibles</h1>
					<ul>
						<li v-for="producto in productos">
							{{ producto.nombre }} -
							<small>{{ producto.precio.toFixed(2) }}</small>
							<button @click="eliminarProducto(producto.precio)">-</button>
							<button @click="anadirProducto(producto.precio)">+</button>
						</li>
					</ul>
					<button @click="resetear()">Limpiar carrito</button>
				</section>`,
	methods: {
		anadirProducto(precio) {

			eventBus.$emit('anadir', precio);
		},
		eliminarProducto(precio) {

			eventBus.$emit('eliminar', precio);
		},
		resetear() {
			eventBus.$emit('reset');
		}
	},
});

Vue.component("carrito-compra", {
	template: `<section>
					<h1>Carrito</h1>
					<h1> {{ total.toFixed(2) }} €</h1>
					<h3> {{ cantidadProductos }} productos </h3>
				</section>`,
	data() {
		return {
			cantidadProductos: 0,
			total: 0
		}
	},
	created() {
		eventBus.$on('anadir', (precio) => {
			console.log(precio);
			this.cantidadProductos++;
			this.total += precio;
		}),
			eventBus.$on('eliminar', (precio) => {
				if (this.total - precio > 0) {
					this.cantidadProductos--;
					this.total -= precio;
				}
			}),
			eventBus.$on('reset', () => {
				this.cantidadProductos = 0;
				this.total = 0;
			})
	}
});
new Vue({
	el: 'main',
	data: {
		productos: [
			{ nombre: 'libro ES6', precio: 39, cantidad: 10 },
			{ nombre: 'Portatil', precio: 1300, cantidad: 10 },
			{ nombre: 'Café', precio: 2, cantidad: 10 },
			{ nombre: 'auriculares', precio: 80, cantidad: 10 },
			{ nombre: 'moleskine', precio: 19, cantidad: 10 }
		]
	}
});