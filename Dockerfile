# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy your website files to the Nginx web root directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# No need for CMD as the default CMD for Nginx image is already to run Nginx
