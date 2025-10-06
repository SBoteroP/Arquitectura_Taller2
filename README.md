# Arquitectura Taller 2

Este proyecto contiene un sistema full-stack (frontend + backend + base de datos) dockerizado y listo para usarse fácilmente.

## Requisitos

- Tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución en tu máquina.

## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/SBoteroP/Arquitectura_Taller2.git
   ```

2. **Ingresar a la carpeta `docker`:**
   ```bash
   cd /docker
   ```

3. **Compilar y levantar todos los servicios (frontend, backend y base de datos):**
   ```bash
   docker-compose up --build
   ```

4. **Acceder a la aplicación:**

   - **Frontend:** [http://localhost:8080](http://localhost:8080)
   - **Backend (API GraphQL):** [http://localhost:3001/graphql](http://localhost:3001/graphql)
   - **Base de datos MySQL:** puerto `3307` (usuario/contraseña según `docker-compose.yml`)


> Si es la primera vez, el proceso puede tardar unos minutos mientras se descargan las imágenes y se compilan los contenedores.

---

## Notas

- Si necesitas detener los servicios:
  ```bash
  docker compose down
  ```
- Si quieres limpiar contenedores antiguos:
  ```bash
  docker compose down --remove-orphans
  ```

---

¡Listo! Solo necesitas tener Docker abierto, seguir estos pasos y tendrás el sistema funcionando en tu máquina.
