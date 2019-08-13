var app = new Vue({
    el:'.vue',
    data:{
        mensaje: 'hola mundo desde vue',
        src: 'pago.png'
    },

    beforeCreate : function(){
        console.log('beforeCreate')
    },
    created : function(){
        console.log('created')
    },
    beforeMount: function(){
        console.log('beforeMount')
    },
    mounted : function(){
        console.log('mounted')
    },
    beforeUpdate : function(){
        console.log('beforeUpdate')
    },
    update : function(){
        console.log('Update')
    },
    beforeDestroy : function(){
        console.log('beforeDestroy')
    },
    destroyed : function(){
        console.log('destroyed')
    },
    //interpolar metodos con vue //
    methods: {
        mostrarMensaje : function(){
            return this.mensaje
        },
        hola : function(){
            return 'hola con methods'
        },

        destruir : function(){
            this.$destroy()
        }
    ///// fin de metodos ////////
    }, 



})

///////computed properties/////

var app2 = new Vue({
    el : '.vue2',
    data : {
        nombre : 'kervis',
        primero : 0,
        seg : 0,
        ter : 0,
        cuar : 0,
       
    },
    computed : {
        total : function(){
            return this.primero + this.seg + this.ter + this.cuar 
        }
    }
})


//ciclo de vida de la instancia//

/*
1) beforeCreate()
2) created()
3) beforeMount()
4)mounted()
5)beforeUpdate()
6)update()
7)beforeDestroy()
8)destroyed()
*/



/* ===========================

        CLASE 2 == DIRECTIVAS
    PEQUEÑOS COMANDO QUE PODEMOS CORRES EN NUESTRAS ETIQUETAS HTML
    PARA CAMBIAR EL COMPORTAMIENTO DEL DO O CAMBIAR ATRIBUTO DEL DOM
                    v-

    les podemos pasar valores

    <p v-if="miVar"> MI TEXTO </p> 
        
================================*/





/* =================================



---EVENTOS EN VUE.JS


===================================== */


eventos = new Vue({
    el: '.eventos',
    data : {
        contador : 0,
        x : 0,
        y : 0
    },
    methods: {
        sumarUno : function(){
            this.contador++
        },
        restarUno : function(){
            this.contador--
        },
        alerta : function(mensaje){
          alert(mensaje)   
        },
        mostrarUbicacion : function(evento){
            this.x = evento.clientX
            this.y = evento.clientY
        },
        sumar: function(){
            this.contador++
        }
    }

})