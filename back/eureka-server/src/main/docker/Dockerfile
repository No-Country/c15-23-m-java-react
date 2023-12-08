# Use the OpenJDK image from Docker Hub as the base image
FROM openjdk:17-jdk-slim

# Create a volume pointing to /tmp
VOLUME /tmp

# Copy the application's jar file into the container
COPY target/eureka-server-0.0.1-SNAPSHOT.jar /opt/eureka-server/app.jar

# Environment variable for Eureka server port, adjust if necessary
ENV SERVER_PORT=8761

# Expose the default Eureka server port
EXPOSE 8761

# Set the working directory to the location of the jar file
WORKDIR /opt/eureka-server/

# Configure the container to run the Eureka server application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar"]
