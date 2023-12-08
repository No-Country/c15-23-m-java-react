# Use the OpenJDK image from Docker Hub as the base image
FROM openjdk:17-jdk-slim

# Create a volume pointing to /tmp
VOLUME /tmp

# Copy the application's jar file into the container
COPY target/product-service-0.0.1-SNAPSHOT.jar /opt/product-service/app.jar

# Copy the wait-for-it script to the container
COPY src/main/docker/wait-for-it.sh /wait-for-it.sh

# Make the script executable
RUN chmod +x /wait-for-it.sh

# Environment variable for Product service port, adjust if necessary
ENV SERVER_PORT=8085

# Expose the port for the Product service
EXPOSE 8085

# Set the working directory to the location of the jar file
WORKDIR /opt/product-service/

# Configure the container to run the application, waiting for the products_db to be ready first
ENTRYPOINT ["/wait-for-it.sh", "products_db:3306", "--"]
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar"]
