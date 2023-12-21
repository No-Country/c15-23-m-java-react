package c15_23_m_java_react.com.transaction_service.transactionService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import c15_23_m_java_react.com.transaction_service.dtos.UserDto;



@FeignClient(name = "user-service", url = "${USER_SERVICE_URL}")
public interface UserClient {
    
    @GetMapping("/users/{id}")
    UserDto getUsertDto(@PathVariable("id") Long id);
}
