FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/config-server-*.jar /opt/config-server/app.jar
EXPOSE 8888
WORKDIR /opt/config-server/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.config-server.jar"]