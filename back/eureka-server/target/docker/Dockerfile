FROM dockerfile/java:oracle-java8

VOLUME /tmp
ADD com.eureka-server.jar /opt/com.eureka-server/
EXPOSE 8080
WORKDIR /opt/com.eureka-server/
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-Xms512m", "-Xmx1g", "-jar", "com.eureka-server.jar"]
