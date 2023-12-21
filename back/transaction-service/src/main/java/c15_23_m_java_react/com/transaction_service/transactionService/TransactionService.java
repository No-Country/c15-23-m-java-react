
package c15_23_m_java_react.com.transaction_service.transactionService;


import c15_23_m_java_react.com.transaction_service.dtos.ProductDto;
import c15_23_m_java_react.com.transaction_service.dtos.TransactionDto;
import c15_23_m_java_react.com.transaction_service.dtos.TransactionItemDto;
import c15_23_m_java_react.com.transaction_service.dtos.UserDto;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionItem;
import c15_23_m_java_react.com.transaction_service.exception.UserNotFoundException;
import c15_23_m_java_react.com.transaction_service.repository.TransactionRepository;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class TransactionService {
    
    private static final Logger logger = LoggerFactory.getLogger(TransactionService.class);
    private final TransactionRepository transactionRepository;
    private final ProductService productService;
    private final UserService userService;
    private final ModelMapper modelMapper; 

    public TransactionService(TransactionRepository transactionRepository,
                              ProductService productService,
                              UserService userService,
                              ModelMapper modelMapper) { 
        this.transactionRepository = transactionRepository;
        this.productService = productService;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }


    private void updateTransactionDetails(TransactionEntity transaction, List<TransactionItemDto> itemDtos) {
        Long userId = transaction.getUser_id();
        if (userId == null) {
            logger.error("User ID is null for transaction");
            throw new IllegalArgumentException("User ID is null for transaction");
        }
        
        logger.info("Updating transaction details for user ID: {}", userId);
        UserDto user;
        try {
            user = userService.getUserDto(userId);
        } catch (Exception ex) {
            logger.error("Error fetching user with ID: {}", userId, ex);
            throw ex;
        }

        if (user == null) {
            logger.error("User not found with ID: {}", userId);
            throw new UserNotFoundException("User not found with ID: " + userId);
        }
        transaction.setUserUsername(user.getUsername());
        transaction.setUserEmail(user.getEmail());

        if (!transaction.getItems().isEmpty()) {
            logger.info("Clearing existing items for transaction ID: {}", transaction.getId());
            transaction.getItems().clear();
        }

        List<TransactionItem> transactionItems = convertItemDtosToItems(itemDtos, transaction);
        transaction.getItems().addAll(transactionItems);
        logger.info("Transaction details updated for transaction ID: {}", transaction.getId());
    }

    private void setTransactionUserDetails(TransactionEntity transactionEntity, TransactionDto transactionDto) {
        if (transactionDto.getUserDto() != null && transactionDto.getUserDto().getUserId() != null) {
            transactionEntity.setUser_id(transactionDto.getUserDto().getUserId());
        } else {
            logger.error("User ID is missing in transaction data");
            throw new IllegalArgumentException("User ID is missing in transaction data");
        }
    }
    
    private TransactionEntity convertToEntity(TransactionDto transactionDto) {
        TransactionEntity transactionEntity = modelMapper.map(transactionDto, TransactionEntity.class);
    
        // Set user details in transaction entity
        setTransactionUserDetails(transactionEntity, transactionDto);
    
        if (transactionDto.getItemDtos() != null) {
            List<TransactionItem> transactionItems = convertItemDtosToItems(transactionDto.getItemDtos(), transactionEntity);
            transactionEntity.setItems(transactionItems);
        }
    
        return transactionEntity;
    }
    
    
    private List<TransactionItem> convertItemDtosToItems(List<TransactionItemDto> itemDtos, TransactionEntity transaction) {
        return itemDtos.stream()
        .map(itemDto -> {
            ProductDto product = productService.getProductDto(itemDto.getProductId());
            TransactionItem item = new TransactionItem();
            item.setTransaction(transaction);
            item.setProductId(itemDto.getProductId());
            item.setQuantity(itemDto.getQuantity());
            item.setPrice(product.getPrice()); 
            return item;
        })
        .collect(Collectors.toList());
    }
    
    @Transactional
    public TransactionEntity createTransaction(TransactionDto transactionDto) {
        TransactionEntity transactionEntity = convertToEntity(transactionDto);
        updateTransactionDetails(transactionEntity, transactionDto.getItemDtos());
        return transactionRepository.save(transactionEntity);
    }
    

    public TransactionEntity findById(Long id) {
        return transactionRepository.findById(id).orElse(null);
    }

    public TransactionEntity updateTransaction(TransactionEntity transaction, List<TransactionItemDto> itemDtos) {
        updateTransactionDetails(transaction, itemDtos);
        return transactionRepository.save(transaction);
    }


    public TransactionEntity changeTransactionStatus(Long id, Boolean newStatus) {
        TransactionEntity transaction = transactionRepository.findById(id).orElse(null);
        if (transaction != null) {
            transaction.setEstado(newStatus);
            return transactionRepository.save(transaction);
        }
        return null;
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }
}

	
