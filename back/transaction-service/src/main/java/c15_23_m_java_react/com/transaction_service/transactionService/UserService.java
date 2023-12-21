package c15_23_m_java_react.com.transaction_service.transactionService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;

import c15_23_m_java_react.com.transaction_service.dtos.UserDto;

@Service
public class UserService {
    
    private final UserClient userClient;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserClient userClient) {
        this.userClient = userClient;
    }

    public UserDto getUserDto(Long id) {
        logger.info("Fetching user with ID: {}", id);
        try {
            return userClient.getUsertDto(id);
        } catch (Exception ex) {
            logger.error("Error fetching user with ID: {}", id, ex);
            throw ex;
        }
    }

    
}

