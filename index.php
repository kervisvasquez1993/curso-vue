<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    
    <div class="vue">
     <span>{{mensaje}}</span>
     <br>
     <span>{{mostrarMensaje()}}</span>
     <br>
     <span>{{hola()}}</span>
     <br>

     <button v-on:click="mensaje = 'este es el nuevo mensaje22'"> cambiar mensaje </button>
     <button v-on:click="destruir"> destruir  </button>

     <img v-bind:src="src">
    </div>

    <br>
    <div class="vue2">
        <button v-on:click="primero++">Incrementar primero</button>
        <button v-on:click="seg++">Incrementar segu</button>
        <button v-on:click="ter++">Incrementar tercero</button>
        <button v-on:click="cuar++">Incrementar cuarto</button>
        <p>prim {{primero}}</p>
        <p>seg {{seg}}</p>
        <p>ter {{ter}}</p>
        <p>cuar {{cuar}}</p>
        <p>total {{total}}</p>
        
        

        
    </div>


    
    <script src="js/script.js"></script>
</body>
</html>