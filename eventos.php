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
      
  <div class="eventos">
    <button v-on:click="sumarUno">sumar uno</button>
    <button v-on:click="restarUno">restar uno</button>
    <hr>
    {{contador}}
    <hr>
    <button v-on:click="alerta('esta es la alerta')">mostaralert</button>
    <hr>
    <div style="height: 300px" v-on:mousemove="mostrarUbicacion"></div>
    x: {{x}}, y{{y}}
  </div>


    
    <script src="js/script.js"></script>
</body>
</html> 