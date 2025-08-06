FROM node:20-alpine

WORKDIR /app

# Copie les fichiers nécessaires pour l'installation et le build
COPY package*.json ./
COPY vite.config.* ./
COPY tsconfig.* ./
COPY index.html ./index.html      
COPY public ./public
COPY src ./src

# Installe les dépendances
RUN npm install

# Build l'app
RUN npm run build

# Installe 'serve' pour servir les fichiers statiques
RUN npm install -g serve

EXPOSE 3000

# Lance le serveur statique sur le dossier dist
CMD ["serve", "-s", "dist", "-l", "3000"]