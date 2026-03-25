FROM node:20-alpine

WORKDIR /app

# 1. Instalar npm actualizado
RUN npm install -g npm@9

# 2. Copiar archivos
COPY . .

# 3. Borrar el candado para los workspaces
RUN rm -f package-lock.json

ENV NODE_ENV=production

# 4. Instalar TODAS las dependencias (incluidas las de desarrollo necesarias para compilar)
RUN npm install

# 5. ¡LA MAGIA! Forzar a Evershop a compilar los archivos de Producción
RUN NODE_ENV=production npm run build

# 6. Exponer el puerto
EXPOSE 3000

# 7. Crear el usuario administrador y encender la tienda
CMD sh -c "npx evershop user:create --email 'admin@atlantika.com' --password 'Admin1234567890' --name 'Admin' || true && npm run start"