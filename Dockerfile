FROM node:20-alpine

WORKDIR /app

RUN npm install -g npm@9
COPY . .
RUN rm -f package-lock.json
RUN npm install

# 1. Creamos la carpeta 'dist' vacía que Evershop exige en Producción
RUN mkdir -p extensions/sample-extension/dist themes/sample-theme/dist

# 2. Fijamos el modo producción
ENV NODE_ENV=production

# 3. Compilamos el diseño
RUN npm run build

EXPOSE 3000

# 4. Le damos 10 segundos a la base de datos para despertar, creamos el admin y arrancamos
CMD sh -c "sleep 10 && npx evershop user:create --email 'admin@atlantika.com' --password 'Admin1234567890' --name 'Admin' || true && npm run start"