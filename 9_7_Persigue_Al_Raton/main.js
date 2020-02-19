new Vue({
    el: "main",
    data: {
        cont: 0,
        izq: 70,
        arriba: 70
    }, methods: {
    	mover: function(){
	        this.cont++;
	        this.izq+=50;
	        if (this.izq>475){
	            this.arriba+=100;
	            this.izq=50;
	        }
	        if (this.cont>=45){
	            this.izq=70;
	            this.arriba=70;
	            this.cont=0;
	        }
    }
    }
});