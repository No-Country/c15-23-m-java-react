package c15_23_m_java_react.com.auth_service.controllers;

import c15_23_m_java_react.com.auth_service.dto.LoginRequest;
import c15_23_m_java_react.com.auth_service.dto.LoginResponse;
import c15_23_m_java_react.com.auth_service.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        String token = authenticationService.authenticateUser(request.getUsername(), request.getPassword());
        if (token != null) {
            return ResponseEntity.ok(new LoginResponse(token));
        }
        return ResponseEntity.badRequest().build();
    }
}
