
package c15_23_m_java_react.com.transaction_service.controllers;


import c15_23_m_java_react.com.transaction_service.transactionService.TransactionService;

import c15_23_m_java_react.com.transaction_service.dtos.TransactionDto;
import c15_23_m_java_react.com.transaction_service.dtos.TransactionItemDto;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;

import java.util.List;



import org.modelmapper.ModelMapper;
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

@RestController
@RequestMapping("/transactions")
public class TransactionController {
	
	@Autowired
	private TransactionService transactionService;

    @Autowired
    private ModelMapper modelMapper; 

    
    @PostMapping
    public ResponseEntity<TransactionEntity> createTransaction(@RequestBody TransactionDto transactionDto) {
        TransactionEntity createdTransaction = transactionService.createTransaction(transactionDto);
        return new ResponseEntity<>(createdTransaction, HttpStatus.CREATED);
    }

    private TransactionEntity convertToEntity(TransactionDto transactionDto) {
        TransactionEntity transactionEntity = modelMapper.map(transactionDto, TransactionEntity.class);
        // Set items or other complex mappings can go here
        return transactionEntity;
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionEntity> updateTransaction(@PathVariable Long id, @RequestBody TransactionDto transactionDto){
        // Convert TransactionDto to TransactionEntity and retrieve itemDtos
        TransactionEntity transactionEntity = convertToEntity(transactionDto);
        transactionEntity.setId(id); // Set the id to the transactionEntity
        List<TransactionItemDto> itemDtos = transactionDto.getItemDtos();
        
        // Pass the TransactionEntity and itemDtos to the service layer for updating
        TransactionEntity updatedTransaction = transactionService.updateTransaction(transactionEntity, itemDtos);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedTransaction);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("#id == authentication.principal.id || hasRole('ADMIN')")
    public ResponseEntity<?> deleteTransaction(@PathVariable Long id){
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok().build();
    }
	
    @PatchMapping("/{id}/status")
    public ResponseEntity<TransactionEntity> changeTransactionStatus(@PathVariable Long id, @RequestParam Boolean newStatus) {
        TransactionEntity updatedTransaction = transactionService.changeTransactionStatus(id, newStatus);
        return ResponseEntity.ok(updatedTransaction);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionEntity> getTransactionById(@PathVariable Long id) {
        TransactionEntity transaction = transactionService.findById(id);
        if (transaction == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(transaction);
    }
	 
	 
	 
}
