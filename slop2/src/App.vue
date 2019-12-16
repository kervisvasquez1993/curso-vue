<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary"
              @:click="clickBotton">
        Iniciar Sesión
      </button>
      <button class="btn btn-primary"
              @:click="clickBotton">
        cambiar Contraseña
      </button>
      <component :is="componentSelect"></component>
    </div>
  </div>
</template>

<script>
  import formulario from "./componets/formulario";
  import iniciarSesion from "./componets/iniciarSesion";
  import cambiarClave from "./componets/cambiarClave";

  export default
  {
    components:{
      formulario:formulario,
      iniciarSesion: iniciarSesion,
      cambiarClave: cambiarClave
    },
    data(){
      return{
        componentSelect: 'cambiarClave'
      }
    },
    methods: {
      clickBotton(){
        if(this.componentSelect != iniciarSesion ) {
          return this.componentSelect = 'iniciarSesion'
        }
        else{
          return this.componentSelect = 'cambiarContraseña'
        }
      }
    }




  }
</script>

<style scoped>
  h3{
    color: red;
  }
</style>
