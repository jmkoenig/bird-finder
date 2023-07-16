# Build the docker image and run the container
all: build run

# Build docker image with name bird-finder
build:
	docker build -t bird-finder .

# Create docker container from bird-finder image and run it on port 3000
run:
	docker run -p 3000:3000 --name=bird-finder bird-finder

# Stop running container
stop:
	docker container stop bird-finder

# Remove the container
remove-container:
	docker container rm bird-finder

# Remove the image
remove-image:
	docker image rm bird-finder

# Remove the container and the image
remove: remove-container remove-image