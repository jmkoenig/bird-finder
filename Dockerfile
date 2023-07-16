# Dockerfile
FROM node:18.16.1

# Set working directory
WORKDIR /usr/src/bird-finder

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app files to container directory
COPY ./ ./

# Expose port 3000
EXPOSE 3000

# Set Nuxt server development host to resolve host address outside of local machine
# From https://nuxtjs.ir/faq/host-port
ENV NUXT_HOST=0.0.0.0

# Run app in dev mode
CMD npm run dev