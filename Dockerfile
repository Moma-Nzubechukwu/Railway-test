# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Expose port (Railway sets PORT automatically)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
