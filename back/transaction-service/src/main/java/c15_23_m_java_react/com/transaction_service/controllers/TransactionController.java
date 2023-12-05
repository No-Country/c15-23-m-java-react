
package c15_23_m_java_react.com.transaction_service.controllers;

import c15_23_m_java_react.com.transaction_service.TransactionService.TransactionService;
import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	public ResponseEntity<TransactionEntity> createTransaction(@Valid @RequestBody TransactionEntity transaction){
		TransactionEntity newTransaction =transactionService.createTransaction(transaction);
		return ResponseEntity.status(HttpStatus.CREATED).body(newTransaction);
	}

@PutMapping("/{id}")
public ResponseEntity<TransactionEntity> updateTransaction(@PathVariable Long id, @RequestBody TransactionEntity transaction){
	transaction.setId(id);
	TransactionEntity updateTransaction = transactionService.updateTransaction(transaction);
	return ResponseEntity.status(HttpStatus.ACCEPTED).body(updateTransaction);
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
