# Sử dụng Node.js phiên bản ổn định
FROM node:20.18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng mà ứng dụng sử dụng
EXPOSE 4000

# Lệnh khởi động ứng dụng
CMD ["npm", "run", "dev"]
