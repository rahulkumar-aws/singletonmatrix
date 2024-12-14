# Use Node.js 18 as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only package.json for installing dependencies first (leverages Docker cache)
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application into the container
COPY . .

# Expose the development server port
EXPOSE 3000

# Default command for the container (can be overridden by docker-compose.yml)
CMD ["yarn", "start", "--host", "0.0.0.0"]