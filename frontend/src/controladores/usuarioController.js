import * as usuarioService from '../modelos/usuarioService'

export async function obtenerUsuarios() {
    const res = await usuarioService.fetchUsuarios()
    return res.data.usuarios
}

export async function agregarUsuario(nombre, email) {
    const res = await usuarioService.crearUsuario(nombre, email)
    return res.data.crearUsuario
}

export async function modificarUsuario(id, nombre, email) {
    const res = await usuarioService.actualizarUsuario(id, nombre, email)
    return res.data.actualizarUsuario
}

export async function borrarUsuario(id) {
    const res = await usuarioService.eliminarUsuario(id)
    return res.data.eliminarUsuario
}