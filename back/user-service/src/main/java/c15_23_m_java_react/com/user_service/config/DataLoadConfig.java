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
            user.setEmail("john.doe@example.com");
            user.setNombre("john");
            user.setApellido("doe");
            user.setDni((long)37945315);
            user.setEstado(true);
            user.setDireccion("Caos");
            
            userRepository.save(user);
            
            for (int i = 1; i <= 14; i++) {
                UserEntity newUser = new UserEntity();
                newUser.setUsername("user" + i);
                newUser.setPassword(encoder.encode("password" + i));
                newUser.setEmail("user" + i + "@example.com");
                newUser.setNombre("User" + i);
                newUser.setApellido("Surname" + i);
                newUser.setDni((long) (37945315 + i));
                newUser.setEstado(true);
                newUser.setDireccion("Address " + i);
                
                userRepository.save(newUser);
            }
        };

    }
}
