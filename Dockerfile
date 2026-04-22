# Step 1: Build the app
FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:stable-alpine
# Vite builds to 'dist' by default
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Cloud Run provides the PORT env var, but Nginx usually uses 80. 
# We'll use a custom config or simply tell Cloud Run to use 80.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
