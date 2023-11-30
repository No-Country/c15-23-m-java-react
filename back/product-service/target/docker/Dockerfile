FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.product-service.jar /opt/com.product-service/
EXPOSE 8080
WORKDIR /opt/com.product-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.product-service.jar"]
