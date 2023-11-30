FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/user-service-*.jar /opt/user-service/app.jar
EXPOSE 8084
WORKDIR /opt/user-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.user-service.jar"]