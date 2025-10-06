FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Genera Prisma Client (antes de compilar TypeScript)
RUN npx prisma generate
# Compila el proyecto TypeScript
RUN npm run build

FROM node:18 AS production

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# Copia el build y Prisma client generado
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/prisma ./prisma

# Expone el puerto
EXPOSE 3000

# Comando para arrancar
CMD ["node", "dist/index.js"]