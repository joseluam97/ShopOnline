FROM node:18-alpine

WORKDIR /app

# 1. Instalar versión actualizada de npm
RUN npm install -g npm@9

# 2. Copiar TODOS los archivos de tu proyecto al contenedor
COPY . .

# 3. Borrar el candado antiguo para forzar la lectura de los workspaces
RUN rm -f package-lock.json

# 4. Instalar dependencias limpias (ahora sí enlazará el tema y la extensión)
RUN npm install

# 5. Compilar la tienda entera (Back + Front)
RUN npm run build

# 6. Exponer el puerto por defecto de Evershop
EXPOSE 3000

# 7. Encender el servidor
CMD ["npm", "run", "start"]