<template>


      <formulario>
        <div slot="titulo">
          <h3>Iniciar Sesión</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo"> Correo Electronico</label>
            <input type="email" class="form-control" id="correo" placeholder="Escribe tu correo">
          </div>

          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input type="password" class="form-control"
                   id="clave" placeholder="Escribe tu Contraseña">
          </div>
        </div>
        <div slot="boton">
          <buttom class="btn btn-primary">Iniciar sesión</buttom>
        </div>
      </formulario>


</template>

<script>
import formulario from "./formulario";
  export default
  {
    components:{
      formulario:formulario
    }


  }
</script>

<style scoped>
  h3{
    color: red;
  }
</style>
