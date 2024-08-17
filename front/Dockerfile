# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Next.js アプリケーションをビルド
RUN npm run build

# Stage 2: Run the application in a lightweight container
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール（production dependencies only）
COPY package*.json ./
RUN npm install --production

# ビルドしたアプリケーションをコピー
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# ポートを指定
EXPOSE 3000

# Next.js アプリケーションを起動
CMD ["npm", "run", "start"]
