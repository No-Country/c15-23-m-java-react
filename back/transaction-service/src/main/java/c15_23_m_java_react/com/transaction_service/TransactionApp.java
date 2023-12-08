package c15_23_m_java_react.com.transaction_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableDiscoveryClient
public class TransactionApp {
    public static void main(String[] args) {
        SpringApplication.run(TransactionApp.class, args);
    }

    
}