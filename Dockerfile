# 1. Usar una imagen oficial y estable de Node.js (Linux Alpine, muy ligera)
FROM node:20-alpine

# 2. Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar solo los archivos de dependencias primero (optimiza la caché)
COPY package*.json ./

# 4. Instalar las dependencias limpias para Linux
RUN npm install

# 5. Copiar todo el resto de tu código (temas, extensiones, carpeta config...)
COPY . .

# 6. Crear las carpetas que Evershop exige antes de compilar
RUN mkdir -p extensions/sample/dist themes/sample/dist

# 7. Compilar la tienda dentro del contenedor
RUN npx evershop build

# 8. Exponer el puerto por el que Render se conectará
EXPOSE 3000

# 9. Comando final para encender el motor
CMD ["npx", "evershop", "start"]