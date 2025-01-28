# Use the official Node.js image
FROM node:22.13.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Compile TypeScript to JavaScript
RUN npx tsc

# Expose the port the app runs on
EXPOSE 3000

# Define the environment variable DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Start the app using the compiled JavaScript file
CMD ["node", "dist/server.js"]