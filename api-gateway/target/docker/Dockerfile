FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.api-gateway.jar /opt/com.api-gateway/
EXPOSE 8080
WORKDIR /opt/com.api-gateway/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.api-gateway.jar"]
