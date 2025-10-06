// @ts-ignore
import { gql } from 'apollo-server-express';

// @ts-ignore
export const typeDefs = gql`
  type Usuario {
    id: Int!
    nombre: String!
    email: String!
  }

 type Producto {
    id: Int!
    nombre: String!
    precio: Float!
  }

  type Query {
    usuarios: [Usuario!]!
    usuario(id: Int!): Usuario
    
    productos: [Producto!]!
    producto(id: Int!): Producto
  }

  type Mutation {
    crearUsuario(nombre: String!, email: String!): Usuario!
    actualizarUsuario(id: Int!, nombre: String, email: String): Usuario!
    eliminarUsuario(id: Int!): Usuario!
    
    crearProducto(nombre: String!, precio: Float!): Producto!
    actualizarProducto(id: Int!, nombre: String, precio: Float): Producto!
    eliminarProducto(id: Int!): Producto!
  }
`;