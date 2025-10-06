<template>
  <div>
    <h2>Usuarios</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="form.nombre" placeholder="Nombre usuario" type="text" required />
      <input v-model="form.email" placeholder="Email" type="email" required />
      <button class="btn-add" type="submit">{{ editando ? 'Actualizar' : 'Agregar' }}</button>
      <button class="btn-delete" v-if="editando" type="button" @click="cancelarEdicion">Cancelar</button>
    </form>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <span>{{ usuario.nombre }} - {{ usuario.email }}</span>
        <div class="btn-group">
          <button class="btn-edit" @click="editarUsuario(usuario)">Editar</button>
          <button class="btn-delete" @click="eliminar(usuario.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as usuarioController from '../controladores/usuarioController'

const usuarios = ref([])
const form = ref({ nombre: '', email: '' })
const editando = ref(false)
const usuarioEditandoId = ref(null)

async function cargarUsuarios() {
  usuarios.value = await usuarioController.obtenerUsuarios()
}

onMounted(cargarUsuarios)

async function onSubmit() {
  if (editando.value) {
    await usuarioController.modificarUsuario(
        usuarioEditandoId.value,
        form.value.nombre,
        form.value.email
    )
    cancelarEdicion()
  } else {
    await usuarioController.agregarUsuario(form.value.nombre, form.value.email)
  }
  form.value = { nombre: '', email: '' }
  await cargarUsuarios()
}

async function eliminar(id) {
  await usuarioController.borrarUsuario(id)
  await cargarUsuarios()
}

function editarUsuario(usuario) {
  editando.value = true
  usuarioEditandoId.value = usuario.id
  form.value = { nombre: usuario.nombre, email: usuario.email }
}

function cancelarEdicion() {
  editando.value = false
  usuarioEditandoId.value = null
  form.value = { nombre: '', email: '' }
}
</script>