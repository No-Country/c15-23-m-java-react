import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.lang.reflect.Field;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.modelmapper.ModelMapper;

import c15_23_m_java_react.com.transaction_service.dtos.ProductDto;
import c15_23_m_java_react.com.transaction_service.dtos.TransactionDto;
import c15_23_m_java_react.com.transaction_service.dtos.TransactionItemDto;
import c15_23_m_java_react.com.transaction_service.dtos.UserDto;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionItem;
import c15_23_m_java_react.com.transaction_service.repository.TransactionRepository;
import c15_23_m_java_react.com.transaction_service.transactionService.ProductClient;
import c15_23_m_java_react.com.transaction_service.transactionService.ProductService;
import c15_23_m_java_react.com.transaction_service.transactionService.TransactionService;
import c15_23_m_java_react.com.transaction_service.transactionService.UserClient;
import c15_23_m_java_react.com.transaction_service.transactionService.UserService;
import feign.Feign;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class TransactionServiceTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private ProductClient productClient;

    @Mock
    private UserClient userClient;

    @Mock
    private ProductService productService;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private TransactionService transactionService;

    private UserService userService;
    private TransactionEntity transactionEntity;
    private TransactionDto transactionDto;
    private TransactionItemDto transactionItemDto;
    private UserDto userDto;
    private ProductDto productDto;
    private Long transactionId = 1L;
    private Long userId = 1L;
    private Long productId = 1L;

    @BeforeEach
    void setUp() throws ParseException {
        transactionEntity = new TransactionEntity();
        transactionDto = new TransactionDto();
        userDto = new UserDto();
        productDto = new ProductDto();
        userService = new UserService(userClient);

       
        // Initialize TransactionEntity with test data
        transactionEntity.setId(transactionId);
        transactionEntity.setUserEmail("john.doe@example.com");
        transactionEntity.setUserUsername("john.doe");
        transactionEntity.setFecha(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").parse("2023-12-17T03:32:58.386Z"));
        transactionEntity.setImpuestos(0.0);
        transactionEntity.setMontoTotal(545000.0);
        transactionEntity.setMontoDescontado(0.0);
        transactionEntity.setUser_id(1L);

        // Initialize UserDto with test data
        userDto.setUserId(userId);
        userDto.setEmail("john.doe@example.com");
        userDto.setUsername("john.doe");

        // Initialize ProductDto with test data
        productDto.setId(productId);
        productDto.setName("product");
        productDto.setPrice(100.0);
        productDto.setDiscount(10.0);

        
        // Set up the items list with product details
        List<TransactionItemDto> itemDtos = new ArrayList<>();
        TransactionItemDto itemDto1 = new TransactionItemDto();
        itemDto1.setProductId(productId);
        itemDto1.setQuantity(2);
        itemDtos.add(itemDto1);

        TransactionItemDto itemDto2 = new TransactionItemDto();
        itemDto2.setProductId(1L);
        itemDto2.setQuantity(3);
        itemDtos.add(itemDto2);

        transactionDto.setItemDtos(itemDtos);

        // Initialize TransactionDto with userDto and itemDtos
        transactionDto.setUserDto(userDto);
        transactionDto.setItemDtos(itemDtos);
        transactionDto.setImpuestos(0.0);
        transactionDto.setMontoTotal(545000.0);
        transactionDto.setMontoDescontado(0.0);

         // Use reflection to inject the UserService into the TransactionService
        try {
        Field userServiceField = TransactionService.class.getDeclaredField("userService");
        userServiceField.setAccessible(true);
        userServiceField.set(transactionService, userService);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            e.printStackTrace();
            fail("Failed to inject UserService via reflection");
        }

        // Mock the behavior of the ProductService
        when(productService.getProductDto(anyLong())).thenReturn(productDto);
        
        // Mock the behavior of the UserService
        when(userService.getUserDto(anyLong())).thenReturn(userDto);

        // Mocking ModelMapper conversions
        when(modelMapper.map(any(TransactionDto.class), eq(TransactionEntity.class))).thenReturn(transactionEntity);
        when(modelMapper.map(any(TransactionEntity.class), eq(TransactionDto.class))).thenReturn(transactionDto);

        // Mocking Feign client responses
        when(userClient.getUsertDto(userId)).thenReturn(userDto);
        when(productClient.getProductDto(productId)).thenReturn(productDto);


        // Mock the ProductClient and UserClient
        when(userClient.getUsertDto(userId)).thenReturn(userDto);
        when(productClient.getProductDto(productId)).thenReturn(productDto);

        // Mock the ModelMapper for TransactionItemDto to TransactionItem conversion
        when(modelMapper.map(any(TransactionItemDto.class), eq(TransactionItem.class)))
            .thenAnswer(invocation -> {
                TransactionItemDto dto = invocation.getArgument(0);
                TransactionItem item = new TransactionItem();
                item.setProductId(dto.getProductId());
                item.setQuantity(dto.getQuantity());
                // Mock setting price based on the productDto. 
                // In real scenarios, you might need to do a lookup or calculation here.
                item.setPrice(productDto.getPrice());
                return item;
            });

        // Mock the ModelMapper for TransactionDto to TransactionEntity conversion
        when(modelMapper.map(any(TransactionDto.class), eq(TransactionEntity.class)))
            .thenAnswer(invocation -> {
                TransactionDto dto = invocation.getArgument(0);
                TransactionEntity entity = new TransactionEntity();
                entity.setUserEmail(dto.getUserDto().getEmail());
                entity.setUserUsername(dto.getUserDto().getUsername());
                entity.setImpuestos(dto.getImpuestos());
                entity.setMontoTotal(dto.getMontoTotal());
                entity.setMontoDescontado(dto.getMontoDescontado());
                entity.setUser_id(dto.getUserDto().getUserId());
                entity.setItems(dto.getItemDtos().stream()
                    .map(itemDto -> modelMapper.map(itemDto, TransactionItem.class))
                    .collect(Collectors.toList()));
                return entity;
            });

        // Stubbing the other mappings if they are used in the service methods being tested
        when(modelMapper.map(any(TransactionEntity.class), eq(TransactionDto.class)))
        .thenReturn(transactionDto);
    }
    


    @Test
    public void whenCreateTransaction_thenTransactionShouldBeCreated() {
        when(transactionRepository.save(any(TransactionEntity.class))).thenReturn(transactionEntity);

        TransactionEntity createdTransaction = transactionService.createTransaction(transactionDto);

        assertNotNull(createdTransaction, "The created transaction should not be null");
        assertEquals(transactionDto.getUserDto().getEmail(), createdTransaction.getUserEmail(), "The email should match");
    }

    @Test
    public void whenGetTransactionById_withValidId_thenTransactionShouldBeFound() {
        when(transactionRepository.findById(transactionId)).thenReturn(Optional.of(transactionEntity));

        TransactionEntity foundTransaction = transactionService.findById(transactionId);

        assertNotNull(foundTransaction, "The transaction should be found");
        assertEquals(transactionId, foundTransaction.getId(), "The transaction ID should match");
    }

    @Test
    public void whenUpdateTransaction_withValidInfo_thenTransactionShouldBeUpdated() {
        when(transactionRepository.findById(transactionId)).thenReturn(Optional.of(transactionEntity));
        when(transactionRepository.save(any(TransactionEntity.class))).thenReturn(transactionEntity);

        TransactionEntity updatedTransaction = transactionService.updateTransaction(transactionEntity, transactionDto.getItemDtos());

        assertNotNull(updatedTransaction, "The updated transaction should not be null");
        // Assertions on the updated fields
    }

    @Test
    public void whenDeleteTransaction_withValidId_thenTransactionShouldBeDeleted() {
        doNothing().when(transactionRepository).deleteById(transactionId);

        transactionService.deleteTransaction(transactionId);

        verify(transactionRepository, times(1)).deleteById(transactionId);
    }
}

