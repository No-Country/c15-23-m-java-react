FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/transaction-service-*.jar /opt/transaction-service/app.jar
EXPOSE 8085
WORKDIR /opt/transaction-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.transaction-service.jar"]