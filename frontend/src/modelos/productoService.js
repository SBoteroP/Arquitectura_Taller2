import { gql } from 'graphql-tag'
import { apolloClient } from '../apollo'

// Consultas y Mutaciones GraphQL para productos
const GET_PRODUCTOS = gql`
  query {
    productos {
      id
      nombre
      precio
    }
  }
`

const CREAR_PRODUCTO = gql`
  mutation($nombre: String!, $precio: Float!) {
    crearProducto(nombre: $nombre, precio: $precio) {
      id
      nombre
      precio
    }
  }
`

const ACTUALIZAR_PRODUCTO = gql`
  mutation($id: Int!, $nombre: String, $precio: Float) {
    actualizarProducto(id: $id, nombre: $nombre, precio: $precio) {
      id
      nombre
      precio
    }
  }
`

const ELIMINAR_PRODUCTO = gql`
  mutation($id: Int!) {
    eliminarProducto(id: $id) {
      id
    }
  }
`

export function fetchProductos() {
    return apolloClient.query({ query: GET_PRODUCTOS, fetchPolicy: 'no-cache' })
}

export function crearProducto(nombre, precio) {
    return apolloClient.mutate({
        mutation: CREAR_PRODUCTO,
        variables: { nombre, precio }
    })
}

export function actualizarProducto(id, nombre, precio) {
    return apolloClient.mutate({
        mutation: ACTUALIZAR_PRODUCTO,
        variables: { id, nombre, precio }
    })
}

export function eliminarProducto(id) {
    return apolloClient.mutate({
        mutation: ELIMINAR_PRODUCTO,
        variables: { id }
    })
}