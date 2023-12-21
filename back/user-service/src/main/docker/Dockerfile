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
COPY target/user-service-0.0.1-SNAPSHOT.jar /opt/user-service/app.jar

# Enviromental variable
ENV SERVER_PORT=8084

# Expose port 8084 for the service
EXPOSE 8084

# Set the working directory to the location of the jar file
WORKDIR /opt/user-service/

# Configure the container to run the application
# Using the exec form of ENTRYPOINT and CMD
ENTRYPOINT ["/bin/sh", "-c", "/wait-for-it.sh && java -Djava.security.egd=file:/dev/./urandom -Xms512m -Xmx1g -jar /opt/user-service/app.jar"]
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "/opt/user-service/app.jar"]