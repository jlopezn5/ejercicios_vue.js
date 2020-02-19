const vm = new Vue({
	el : '#app',
	data:{
		    nombreColor : "",
            valorHexadec : "",
            "Colores":[{
                    "nombreColor":"rojo",
                    "valorHexadec":"#f00"
                },
                {
                    "nombreColor":"verde",
                    "valorHexadec":"#0f0"
                },
                {
                    "nombreColor":"azul",
                    "valorHexadec":"#00f"
                },
                {
                    "nombreColor":"cyan",
                    "valorHexadec":"#0ff"
                },
                {
                    "nombreColor":"magenta",
                    "valorHexadec":"#f0f"
                },
                {
                    "nombreColor":"amarillo",
                    "valorHexadec":"#ff0"
                },
                {
                    "nombreColor":"negro",
                    "valorHexadec":"#000"
                }
            ]
        
	},
    methods:{
        anadeColor: function(){
            this.Colores.push({
                nombreColor: this.nombreColor,
                valorHexadec: this.valorHexadec
            }),
            this.nombreColor= "",
            this.valorHexadec= ""
        }
    }
});