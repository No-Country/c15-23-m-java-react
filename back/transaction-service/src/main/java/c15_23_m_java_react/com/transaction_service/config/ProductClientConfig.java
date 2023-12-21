package c15_23_m_java_react.com.transaction_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.RequestInterceptor;

@Configuration
public class ProductClientConfig {
    @Bean
    public RequestInterceptor requestInterceptor() 
    {
        return requestTemplate -> {
            // Placeholder for future API key/token
            requestTemplate.header("Authorization", "Bearer " + "API_KEY");
        };
    }
}
