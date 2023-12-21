# Use the OpenJDK image from Docker Hub as the base image
FROM openjdk:17-jdk-slim

# Update package list, install netcat and mysql-client, and clean up
RUN apt-get update && apt-get install -y netcat curl && rm -rf /var/lib/apt/lists/*

# Create a volume pointing to /tmp
VOLUME /tmp

# Add the wait-for-it script to the container
COPY src/main/docker/wait-for-it.sh /wait-for-it.sh

# Make the script executable
RUN chmod +x /wait-for-it.sh

# Copy the application's jar file into the container
COPY target/product-service-0.0.1-SNAPSHOT.jar /opt/product-service/app.jar

# Environment variable for Product service port, adjust if necessary
ENV SERVER_PORT=8086

# Expose the port for the Product service
EXPOSE 8086

# Set the working directory to the location of the jar file
WORKDIR /opt/product-service/

# Configure the container to run the application, waiting for the products_db to be ready first
ENTRYPOINT ["/bin/sh", "-c", "/wait-for-it.sh && java -Djava.security.egd=file:/dev/./urandom -Xms512m -Xmx1g -jar /opt/product-service/app.jar"]
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "/opt/product-service/app.jar"]
