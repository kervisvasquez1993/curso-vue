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
