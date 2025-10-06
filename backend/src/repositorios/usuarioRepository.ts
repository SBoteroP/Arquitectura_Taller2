// @ts-ignore
import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

// @ts-ignore
export class UsuarioRepository {
    async findAll(): Promise<Usuario[]> {
        return prisma.usuario.findMany();
    }

    async findById(id: number): Promise<Usuario | null> {
        return prisma.usuario.findUnique({ where: { id } });
    }

    async create(data: Omit<Usuario, 'id'>): Promise<Usuario> {
        return prisma.usuario.create({ data });
    }

    async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
        return prisma.usuario.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Usuario | null> {
        return prisma.usuario.delete({ where: { id } });
    }
}