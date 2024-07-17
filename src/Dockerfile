# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the static files
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "5000"]
