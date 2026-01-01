# 1️⃣ Use official Node image
FROM node:20-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json first
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy the rest of the project
COPY . .

# 6️⃣ Expose your port
EXPOSE 5000

# 7️⃣ Start the app
CMD ["npm", "start"]
