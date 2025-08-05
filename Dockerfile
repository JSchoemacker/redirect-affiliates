FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json .
RUN npm install  --ignore-scripts
COPY . .

EXPOSE 3001
CMD ["npm", "run", "dev"]
