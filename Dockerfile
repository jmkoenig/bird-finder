# Dockerfile
FROM node:18.16.1

# Create destination directory
RUN mkdir -p /usr/src/bird-finder
WORKDIR /usr/src/bird-finder

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app to container directory
COPY . /usr/src/bird-finder/

# Expose port 3000
EXPOSE 3000

# Set Nuxt server development host to resolve host address outside of local machine
ENV NUXT_HOST=0.0.0.0

# Run app in dev mode
CMD npm run dev