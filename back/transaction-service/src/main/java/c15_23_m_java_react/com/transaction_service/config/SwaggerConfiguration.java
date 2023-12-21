package c15_23_m_java_react.com.transaction_service.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

private static final Logger LOGGER = LoggerFactory.getLogger(SwaggerConfiguration.class);

    @Bean
    public GroupedOpenApi publicApi() {
        LOGGER.info("Initializing Swagger...");
        return GroupedOpenApi.builder()
                .group("public")
                .pathsToMatch("/**")
                .build();
    }	
}
