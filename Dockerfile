# node版本號
FROM node:18-alpine as builder
# 工作目錄
WORKDIR /webbyerp
# 添加所有檔案到工作目錄中
ADD . /webbyerp
# run(用ci替代npm install)
# RUN npm install && npm run build && npm install -g http-server
RUN npm ci
RUN npm run build
# port
# EXPOSE 3000
# 容器啟動後、執行http-server(用nginx取代)
# CMD http-server ./build -p 3000
FROM nginx:alpine
COPY --from=builder /webbyerp/build /usr/share/nginx/html