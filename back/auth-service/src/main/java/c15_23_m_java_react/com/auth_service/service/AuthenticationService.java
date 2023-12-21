package c15_23_m_java_react.com.auth_service.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import c15_23_m_java_react.com.auth_service.dto.UserDTO;


@Service
public class AuthenticationService {
    
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${user-service.url}")
    private String userServiceUrl;

    @Value("${JWT_SECRET}")
    private String jwtSecret;

    @Value("${JWT_EXPIRATION_MS}")
    private int jwtExpirationMs;

    public String authenticateUser(String username, String password)
    {
        UserDTO user = restTemplate.getForObject(userServiceUrl + "/users/" + username, UserDTO.class);
        if (user != null && passwordEncoder.matches(password, user.getPassword()))
        {
            return generateJwtToken(user);
        }
        return "Falló la autenticación";
    }

    private String generateJwtToken(UserDTO user) {
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
}
