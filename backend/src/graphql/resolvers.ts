// @ts-ignore
import { UsuarioService } from '../servicios/usuarioServicio';
// @ts-ignore
import { ProductoService } from '../servicios/productoServicio';

const usuarioService = new UsuarioService();
const productoService = new ProductoService();

// @ts-ignore
export const resolvers = {
    Query: {
        usuarios: () => usuarioService.getAll(),
        usuario: (_: any, args: { id: number }) => usuarioService.getById(args.id),

        productos: () => productoService.getAll(),
        producto: (_: any, args: { id: number }) => productoService.getById(args.id),
    },
    Mutation: {
        crearUsuario: (_: any, args: { nombre: string; email: string }) =>
            usuarioService.create({ nombre: args.nombre, email: args.email }),
        actualizarUsuario: (_: any, args: { id: number; nombre?: string; email?: string }) =>
            // @ts-ignore
            usuarioService.update(args.id, { nombre: args.nombre, email: args.email }),
        eliminarUsuario: (_: any, args: { id: number }) =>
            usuarioService.delete(args.id),

        crearProducto: (_: any, args: { nombre: string; precio: number }) =>
            productoService.create({ nombre: args.nombre, precio: args.precio }),
        actualizarProducto: (_: any, args: { id: number; nombre?: string; precio?: number }) =>
            // @ts-ignore
            productoService.update(args.id, { nombre: args.nombre, precio: args.precio }),
        eliminarProducto: (_: any, args: { id: number }) =>
            productoService.delete(args.id),
    },
};