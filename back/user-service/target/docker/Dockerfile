FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.user-service.jar /opt/com.user-service/
EXPOSE 8080
WORKDIR /opt/com.user-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.user-service.jar"]
