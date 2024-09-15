# 빌드 스테이지
FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "star"]