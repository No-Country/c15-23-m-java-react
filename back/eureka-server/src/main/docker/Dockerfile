FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/eureka-server-*.jar /opt/eureka-server/app.jar
EXPOSE 8082
WORKDIR /opt/eureka-server/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.eureka-server.jar"]