FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/auth-service-*.jar /opt/auth-service/app.jar
EXPOSE 8084
WORKDIR /opt/auth-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.auth-service.jar"]
