FROM node:18-alpine
WORKDIR /app
RUN npm install -g npm@9
COPY package*.json .
# Copy your custom theme.
COPY themes ./themes

# Copy your custom extensions.
COPY extensions ./extensions

# Copy your config.
COPY config ./config

# DO NOT copy the media folder. It will be handled by a volume.

# Copy your public files.
COPY public ./public

# We must copy translations to the image as they are required for the build
#COPY translations ./translations

# Run npm install.
RUN npm install

# Build assets.
RUN npm run build

EXPOSE 80
CMD ["npm", "run", "start"]