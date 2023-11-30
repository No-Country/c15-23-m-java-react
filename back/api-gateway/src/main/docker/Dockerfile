FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/api-gateway-*.jar /opt/api-gateway/app.jar
EXPOSE 8083
WORKDIR /opt/api-gateway/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.api-gateway.jar"]

