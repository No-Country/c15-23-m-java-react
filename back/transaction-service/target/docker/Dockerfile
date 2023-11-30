FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.transaction-service.jar /opt/com.transaction-service/
EXPOSE 8080
WORKDIR /opt/com.transaction-service/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.transaction-service.jar"]
