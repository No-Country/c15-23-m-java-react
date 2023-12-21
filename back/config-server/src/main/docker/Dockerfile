# Use the OpenJDK image from Docker Hub as the base image
FROM openjdk:17-jdk-slim

# Create a volume pointing to /tmp
VOLUME /tmp

# Copy the application's jar file into the container
COPY target/config-server-0.0.1-SNAPSHOT.jar /opt/config-server/app.jar

# Environment variable for Config server port, adjust if necessary
ENV SERVER_PORT=8888

# Expose the default Config server port
EXPOSE 8888

# Set the working directory to the location of the jar file
WORKDIR /opt/config-server/

# Configure the container to run the Config server application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar"]
