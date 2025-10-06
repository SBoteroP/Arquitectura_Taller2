// @ts-ignore
import { UsuarioRepository } from '../repositorios/usuarioRepository';
// @ts-ignore
import { Usuario, Prisma } from '@prisma/client';

const usuarioRepository = new UsuarioRepository();

// @ts-ignore
export class UsuarioService {
    getAll(): Promise<Usuario[]> {
        return usuarioRepository.findAll();
    }

    getById(id: number): Promise<Usuario | null> {
        return usuarioRepository.findById(id);
    }

    async create(data: Omit<Usuario, 'id'>): Promise<Usuario> {
        try {
            return await usuarioRepository.create(data);
        } catch (error: any) {
            // Prisma error de unique constraint
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new Error('Ya existe un usuario con ese email.');
            }
            throw error;
        }
    }

    update(id: number, data: Partial<Omit<Usuario, 'id'>>): Promise<Usuario> {
        // @ts-ignore
        return usuarioRepository.update(id, data);
    }

    delete(id: number): Promise<Usuario> {
        // @ts-ignore
        return usuarioRepository.delete(id);
    }
}