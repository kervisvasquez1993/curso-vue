var app = new Vue({
    el:'.vue',
    data:{
        mensaje: 'hola mundo desde vue',
        src: 'pago.png'
    },
    //interpolar metodos con vue //
    methods: {
        mostrarMensaje : function(){
            return this.mensaje
        },
        hola : function(){
            return 'hola con methods'
        }
    }
    ///// fin de metodos ////////
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
