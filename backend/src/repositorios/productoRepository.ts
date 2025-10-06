// @ts-ignore
import { PrismaClient, Producto } from '@prisma/client';

const prisma = new PrismaClient();

// @ts-ignore
export class ProductoRepository {
    async getAll(): Promise<Producto[]> {
        return prisma.producto.findMany();
    }

    async getById(id: number): Promise<Producto | null> {
        return prisma.producto.findUnique({ where: { id } });
    }

    async create(data: Omit<Producto, 'id'>): Promise<Producto> {
        return prisma.producto.create({ data });
    }

    async update(id: number, data: Partial<Omit<Producto, 'id'>>): Promise<Producto> {
        return prisma.producto.update({ where: { id }, data });
    }

    async delete(id: number): Promise<Producto> {
        return prisma.producto.delete({ where: { id } });
    }
}