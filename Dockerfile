FROM node:18.16.1
WORKDIR /app
ENV PORT 3000
COPY package*.json ./
ENV MODEL_URL 'https://storage.googleapis.com/model-test11/models/model.json'
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]
