FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY . .
RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app
RUN apk add --no-cache tini

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/uploads ./uploads

USER node

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/main"]
