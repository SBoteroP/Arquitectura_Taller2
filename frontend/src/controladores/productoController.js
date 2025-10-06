import * as productoService from '../modelos/productoService'

export async function obtenerProductos() {
    const res = await productoService.fetchProductos()
    return res.data.productos
}

export async function agregarProducto(nombre, precio) {
    const res = await productoService.crearProducto(nombre, precio)
    return res.data.crearProducto
}

export async function modificarProducto(id, nombre, precio) {
    const res = await productoService.actualizarProducto(id, nombre, precio)
    return res.data.actualizarProducto
}

export async function borrarProducto(id) {
    const res = await productoService.eliminarProducto(id)
    return res.data.eliminarProducto
}