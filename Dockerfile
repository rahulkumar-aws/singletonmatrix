# Use Node.js 18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the dependency file first to leverage Docker caching
COPY package.json ./

# Install dependencies (generates yarn.lock if missing)
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Expose the port for the development server
EXPOSE 3000

# Default command to start the development server
CMD ["yarn", "start"]