package c15_23_m_java_react.com.user_service.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import c15_23_m_java_react.com.user_service.UserService.UserService;
import c15_23_m_java_react.com.user_service.entitys.UserEntity;
import c15_23_m_java_react.com.user_service.roles.Role;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	
	@PostMapping
    public ResponseEntity<UserEntity> createUser(@Valid @RequestBody UserEntity user) {
        UserEntity newUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser); // 201 Created
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable Long id, @RequestBody UserEntity user) {
        user.setId(id);
        UserEntity updatedUser = userService.updateUser(user);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUser);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("#id == authentication.principal.id || hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<UserEntity> changeUserStatus(@PathVariable Long id, @RequestParam Boolean newStatus) {
        UserEntity updatedUser = userService.changeUserStatus(id, newStatus);
        return ResponseEntity.ok(updatedUser);
    }


//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest)
//    {
//    	boolean isAuthenticated = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());
//        if (isAuthenticated) 
//        {
//            // Aca en el futuro se integrara el JWT
//            return ResponseEntity.ok().body("Usuario autenticado con éxito");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
//        }
//    	
//    }
    
    
	
    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Long id) {
        UserEntity user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/by-username/{username}")
    public ResponseEntity<UserEntity> getUserByUsername(@PathVariable String username) {
        UserEntity user = userService.getUserbyUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    
    @GetMapping("/by-dni/{dni}")
    public ResponseEntity<UserEntity> getUserByDni(@PathVariable Long dni) {
        return ResponseEntity.ok(userService.getUserbyDni(dni));
    }

    @GetMapping("/by-email")
    public ResponseEntity<UserEntity> getUserByEmail(@RequestParam String email) {
        return ResponseEntity.ok(userService.getUserbyEmail(email));
    }

    @GetMapping("/by-role/{role}")
    public ResponseEntity<UserEntity> getUserbyRole(@PathVariable Role role) {
        return ResponseEntity.ok(userService.getUserbyRole(role));
    }

    @GetMapping("/by-apellido/{apellido}")
    public ResponseEntity<UserEntity> findByApellido(@PathVariable String apellido) {
        return ResponseEntity.ok(userService.findByApellido(apellido));
    }

	
}
