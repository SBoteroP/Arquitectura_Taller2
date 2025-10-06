CREATE DATABASE IF NOT EXISTS tu_basedatos;
USE tu_basedatos;

CREATE TABLE IF NOT EXISTS Usuario (
                                       id INT AUTO_INCREMENT PRIMARY KEY,
                                       nombre VARCHAR(80),
    email VARCHAR(80)
    );

CREATE TABLE IF NOT EXISTS Producto (
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        nombre VARCHAR(80),
    precio FLOAT
    );

INSERT INTO Usuario (nombre, email) VALUES
                                        ('Juan Pérez', 'juan@correo.com'),
                                        ('Maria Lopez', 'maria@correo.com'),
                                        ('Pedro Gómez', 'pedro@correo.com');

INSERT INTO Producto (nombre, precio) VALUES
                                          ('Laptop', 1200.50),
                                          ('Mouse', 25.99),
                                          ('Teclado', 45.00);