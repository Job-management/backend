FROM node:16-alpine

WORKDIR /app/backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

#docker build -t my-image:version --force-rm -f Dockerfile .
# docker run  -p 4000:3009 my-image:1.0
#docker tag ten-hinh-anh:tag ten-nguoi-dung/ten-hinh-anh:tag
#docker push ten-nguoi-dung/ten-hinh-anh:tag

