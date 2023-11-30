package c15_23_m_java_react.com.user_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import c15_23_m_java_react.com.user_service.entitys.UserEntity;
import c15_23_m_java_react.com.user_service.roles.Role;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

	UserEntity findByUsername(String username);
	UserEntity findByEmail(String email);
	UserEntity findByDni(Long dni);
	UserEntity findByApellido(String apellido);
	UserEntity findByRole(Role role);
}
