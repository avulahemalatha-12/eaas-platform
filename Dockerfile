FROM node:22-bullseye
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
