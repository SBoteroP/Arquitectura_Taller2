import { gql } from 'graphql-tag'
import { apolloClient } from '../apollo'

// Consultas y Mutaciones GraphQL
const GET_USUARIOS = gql`
  query {
    usuarios {
      id
      nombre
      email
    }
  }
`

const CREAR_USUARIO = gql`
  mutation($nombre: String!, $email: String!) {
    crearUsuario(nombre: $nombre, email: $email) {
      id
      nombre
      email
    }
  }
`

const ACTUALIZAR_USUARIO = gql`
  mutation($id: Int!, $nombre: String, $email: String) {
    actualizarUsuario(id: $id, nombre: $nombre, email: $email) {
      id
      nombre
      email
    }
  }
`

const ELIMINAR_USUARIO = gql`
  mutation($id: Int!) {
    eliminarUsuario(id: $id) {
      id
    }
  }
`

export function fetchUsuarios() {
    return apolloClient.query({
        query: GET_USUARIOS,
        fetchPolicy: 'no-cache'
    })
}

export function crearUsuario(nombre, email) {
    return apolloClient.mutate({
        mutation: CREAR_USUARIO,
        variables: { nombre, email }
    })
}

export function actualizarUsuario(id, nombre, email) {
    return apolloClient.mutate({
        mutation: ACTUALIZAR_USUARIO,
        variables: { id, nombre, email }
    })
}

export function eliminarUsuario(id) {
    return apolloClient.mutate({
        mutation: ELIMINAR_USUARIO,
        variables: { id }
    })
}