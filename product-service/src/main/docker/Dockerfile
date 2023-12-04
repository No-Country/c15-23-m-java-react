FROM openjdk:17-jdk-slim

VOLUME /tmp
COPY target/product-service-*.jar /opt/product-service/app.jar
EXPOSE 8086
WORKDIR /opt/product-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "app.jar", "com.product-service.jar"]