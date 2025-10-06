// @ts-ignore
import { ProductoRepository } from '../repositorios/productoRepository';
// @ts-ignore
import { Producto } from '@prisma/client';

const productoRepository = new ProductoRepository();

// @ts-ignore
export class ProductoService {
    getAll(): Promise<Producto[]> {
        return productoRepository.getAll();
    }

    getById(id: number): Promise<Producto | null> {
        return productoRepository.getById(id);
    }

    create(data: Omit<Producto, 'id'>): Promise<Producto> {
        return productoRepository.create(data);
    }

    update(id: number, data: Partial<Omit<Producto, 'id'>>): Promise<Producto> {
        return productoRepository.update(id, data);
    }

    delete(id: number): Promise<Producto> {
        return productoRepository.delete(id);
    }
}