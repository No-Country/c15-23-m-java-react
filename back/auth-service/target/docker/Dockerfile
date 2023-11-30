FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.auth-service.jar /opt/com.auth-service/
EXPOSE 8080
WORKDIR /opt/com.auth-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.auth-service.jar"]
