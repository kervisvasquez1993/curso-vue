<template>

      <formulario>
        <div slot="titulo">
          <h3>Cambiar contraseña</h3>
        </div>
        <div slot="elementos">
         <div class="form-group">
            <label for="clave">Contraseña</label>
            <input type="password" class="form-control"
                   id="clave" placeholder="Escribe tu Contraseña">
          </div>
        </div>
        <div slot="boton">
          <buttom class="btn btn-primary">cambiar clave</buttom>
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

</style>
