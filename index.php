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

     <img v-bind:src="src">
         </div>


    
    <script src="js/script.js"></script>
</body>
</html>