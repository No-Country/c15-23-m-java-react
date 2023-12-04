package c15_23_m_java_react.com.user_service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import c15_23_m_java_react.com.user_service.entitys.UserEntity;
import c15_23_m_java_react.com.user_service.repository.UserRepository;
import c15_23_m_java_react.com.user_service.roles.Role;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public UserEntity createUser(UserEntity user) 
	{
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }
	
	
	public UserEntity findById(Long id)
	{
		return userRepository.findById(id).orElse(null);
	}
	
	public UserEntity updateUser(UserEntity user)
	{
		return userRepository.save(user);
	}
	
	public UserEntity changeUserStatus(Long id, Boolean newStatus) 
	{
	    UserEntity user = userRepository.findById(id).orElse(null);
	    if (user != null) {
	        user.setEstado(newStatus);
	        userRepository.save(user);
	    }
	    return user;
	}

	public void deleteUser(Long id) 
	{
	    userRepository.deleteById(id);
	}

	
	
	
	
	public boolean authenticateUser(String username, String password) 
	{
        UserEntity user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) 
        {
            return true;
        }
        return false;
    }
	
	
	
	
	
	
	
	
	
	public UserEntity getUserbyUsername(String username)
	{
		return userRepository.findByUsername(username);
	}
	
	public UserEntity getUserbyEmail(String email)
	{
		return userRepository.findByEmail(email);
	}
	
	public UserEntity getUserbyDni(Long dni)
	{
		return userRepository.findByDni(dni);
	}
	
	public UserEntity getUserbyRole(Role role)
	{
		return userRepository.findByRole(role);
	}
	
	public UserEntity findByApellido(String apellido)
	{
		return userRepository.findByApellido(apellido);
	}
}
