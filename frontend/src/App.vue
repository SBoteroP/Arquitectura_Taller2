<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <UsuariosLista />
  <ProductosLista />
</template>

<script>
import UsuariosLista from './components/UsuariosLista.vue'
import ProductosLista from './components/ProductosLista.vue'
export default {
  name: 'App',
  components: {
    UsuariosLista,
    ProductosLista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>