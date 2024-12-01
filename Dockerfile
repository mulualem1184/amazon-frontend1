# Use the latest Node.js 20 image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker caching for dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining application files into the container
# Ensure you copy the entire project, including the 'src' folder and any other necessary files.
COPY . .

# If the application requires a build step (for example, if you're building a React app), uncomment the line below
# RUN npm run build

# Expose the port your application listens on
EXPOSE 3000

# Set environment variable for the port
# ENV PORT 3000

# Set the default command to run the application
# If your entry point is a file inside the src folder, use the correct path.
CMD ["node", "src/index.js"] 
