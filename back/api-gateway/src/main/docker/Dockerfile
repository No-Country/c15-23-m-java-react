# Use the OpenJDK image from Docker Hub as the base image
FROM openjdk:17-jdk-slim

# Create a volume pointing to /tmp
VOLUME /tmp

# Copy the application's jar file into the container
COPY target/api-gatewayr-0.0.1-SNAPSHOT.jar /opt/api-gateway/app.jar

# Environment variable for server port, adjust if necessary
ENV SERVER_PORT=8083

# Expose the server port
EXPOSE 8083

# Set the working directory to the location of the jar file
WORKDIR /opt/api-gateway/

# Configure the container to run the server application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar"]
