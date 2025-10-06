<template>
  <div>
    <h2>Productos</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="form.nombre" placeholder="Nombre producto" type="text" required />
      <input v-model.number="form.precio" placeholder="Precio" type="number" required />
      <button class="btn-add" type="submit">{{ editando ? 'Actualizar' : 'Agregar' }}</button>
      <button class="btn-delete" v-if="editando" type="button" @click="cancelarEdicion">Cancelar</button>
    </form>
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        <span>{{ producto.nombre }} - ${{ producto.precio }}</span>
        <div class="btn-group">
          <button class="btn-edit" @click="editarProducto(producto)">Editar</button>
          <button class="btn-delete" @click="eliminar(producto.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as productoController from '../controladores/productoController'

const productos = ref([])
const form = ref({ nombre: '', precio: null })
const editando = ref(false)
const productoEditandoId = ref(null)

async function cargarProductos() {
  productos.value = await productoController.obtenerProductos()
}

onMounted(cargarProductos)

async function onSubmit() {
  if (editando.value) {
    await productoController.modificarProducto(
        productoEditandoId.value,
        form.value.nombre,
        parseFloat(form.value.precio)
    )
    cancelarEdicion()
  } else {
    await productoController.agregarProducto(
        form.value.nombre,
        parseFloat(form.value.precio)
    )
  }
  form.value = { nombre: '', precio: null }
  await cargarProductos()
}

async function eliminar(id) {
  await productoController.borrarProducto(id)
  await cargarProductos()
}

function editarProducto(producto) {
  editando.value = true
  productoEditandoId.value = producto.id
  form.value = { nombre: producto.nombre, precio: producto.precio }
}

function cancelarEdicion() {
  editando.value = false
  productoEditandoId.value = null
  form.value = { nombre: '', precio: null }
}
</script>