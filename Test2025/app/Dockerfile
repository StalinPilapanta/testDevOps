FROM node:lts-slim AS builder

WORKDIR /app
# 
COPY package*.json ./

RUN npm install --only=production

COPY . .

FROM node:lts-alpine


WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js ./

EXPOSE 3000

CMD ["node", "server.js"]

