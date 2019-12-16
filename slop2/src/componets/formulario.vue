<template>
  <form class="form">
    <slot name="titulo"></slot><!--trae informacion desde el template al componente-->
    <slot name="elementos"></slot>
    <slot name="boton"></slot>

  </form>
</template>

<script>
    export default {
      props:['titulo'],
        name: "formulario"
    }
</script>

<style scoped>
  h3 {
    color: green;
  }
</style>
