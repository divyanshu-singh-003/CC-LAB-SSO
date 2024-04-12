# Use Node.js as base image
FROM node:latest

# Set the working directory in the container
WORKDIR /SS0

# Copy package.json and package-lock.json from main folder to container
COPY package*.json ./

# Install dependencies for main folder
RUN npm install

# Change directory to frontend folder
WORKDIR /SS0/frontend

# Copy package.json and package-lock.json from frontend folder to container
COPY frontend/package*.json ./

# Install dependencies for frontend folder
RUN npm install

# Expose the port on which the frontend app will run (if needed)
EXPOSE 3000

# Command to run npm run dev in frontend folder
CMD ["npm", "run", "dev"]
