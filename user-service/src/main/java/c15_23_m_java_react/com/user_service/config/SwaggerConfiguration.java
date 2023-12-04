package c15_23_m_java_react.com.user_service.config;

import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
