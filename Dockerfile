# Use the latest Node.js 20 image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker caching for dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application files into the container
COPY . ./

# If the application requires a build step, uncomment the line below
# RUN npm run build

# Expose the port your application listens on
EXPOSE 3000


# Set the default command to run the application
CMD ["node", "index.js"]
