package c15_23_m_java_react.com.user_service.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import c15_23_m_java_react.com.user_service.entitys.UserEntity;
import c15_23_m_java_react.com.user_service.repository.UserRepository;

@Configuration
public class DataLoadConfig {
    
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder encoder)
    {
        return args -> {

            UserEntity user = new UserEntity();
            user.setUsername("john.doe");
            user.setPassword(encoder.encode("password"));
            user.setEmail("john.doe@exacmple.com");
            user.setNombre("john");
            user.setApellido("doe");
            user.setDni((long)37781734);
            user.setEstado(true);
            user.setDireccion("Angeleri");
            
            userRepository.save(user);
            
        };

    }
}
