var app =new Vue ({
    el: '#app',
    data: {
        Titulo: 'Lista de tareas',
        tareas : [
            {
                texto : 'Aprende Vue.js ',
                terminada : false
            },
            {
                texto : 'Aprende Angular ',
                terminada : false
            },
            {
                texto : 'Aprende php ',
                terminada : false
            },
        ],
        nuevaTarea : ''
    },
    methods:{
        agregarTarea : function(){
            var texto = this.nuevaTarea.trim()
            if(texto){
                this.tareas.push({
                    texto : texto,
                    terminada : false
                })
            }
            this.nuevaTarea = ''

        },
        borrar : function(indice){
            this.tareas.splice(indice,1)
        }
    }
})