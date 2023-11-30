import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import c15_23_m_java_react.com.user_service.UserService.UserService;
import c15_23_m_java_react.com.user_service.entitys.UserEntity;
import c15_23_m_java_react.com.user_service.repository.UserRepository;


import static org.mockito.Mockito.*;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;




@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

	@Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    // Setup data for tests
    @BeforeEach
    void setUp() {
        
    }

    @Test
    public void whenCreateUser_thenUserShouldBeCreated() {
        UserEntity newUser = new UserEntity();
        newUser.setUsername("testUser");
        newUser.setPassword("password");
        // Set other necessary fields...

        when(userRepository.save(any(UserEntity.class))).thenReturn(newUser);

        UserEntity createdUser = userService.createUser(newUser);
        assertNotNull(createdUser, "El usuario creado no debe ser null");
        assertEquals("testUser", createdUser.getUsername(), "El nombre de usuario debe coincidir");
    }
    
    @Test
    public void whenGetUserById_withValidId_thenUserShouldBeFound() {
        Long userId = 1L;
        UserEntity existingUser = new UserEntity();
        existingUser.setId(userId);
        existingUser.setUsername("existingUser");

        lenient().when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        UserEntity foundUser = userService.findById(userId);
        assertNotNull(foundUser, "El usuario debe ser encontrado");
        assertEquals(userId, foundUser.getId(), "El ID del usuario debe coincidir");
    }

    @Test
    public void whenGetUserById_withInvalidId_thenUserShouldNotBeFound() {
        Long userId = 2L;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        UserEntity foundUser = userService.findById(userId);
        assertNull(foundUser, "No se debe encontrar un usuario con un ID inexistente");
    }

    @Test
    public void whenUpdateUser_withValidInfo_thenUserShouldBeUpdated() {
        Long userId = 1L;
        UserEntity existingUser = new UserEntity();
        existingUser.setId(userId);
        existingUser.setUsername("existingUser");

        UserEntity updatedInfo = new UserEntity();
        updatedInfo.setUsername("updatedUser");

        lenient().when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));
        lenient().when(userRepository.save(any(UserEntity.class))).thenReturn(updatedInfo);

        UserEntity updatedUser = userService.updateUser(updatedInfo);
        assertNotNull(updatedUser, "El usuario actualizado no debe ser null");
        assertEquals("updatedUser", updatedUser.getUsername(), "El nombre de usuario debe ser actualizado");
    }
    
    @Test
    public void whenDeleteUser_withValidId_thenUserShouldBeDeleted() {
        Long userId = 1L;
        doNothing().when(userRepository).deleteById(userId);

        userService.deleteUser(userId);

        verify(userRepository, times(1)).deleteById(userId);
    }



}
