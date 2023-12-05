
package c15_23_m_java_react.com.transaction_service.TransactionService;

import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import c15_23_m_java_react.com.transaction_service.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;


public class TransactionService {
	@Autowired
	private TransactionRepository transactionRepository;

	public TransactionEntity createTransaction(TransactionEntity transaction){
		
		return transactionRepository.save(transaction);
	}

	public TransactionEntity findById(Long id)
	{
		return transactionRepository.findById(id).orElse(null);
	}
	
	public TransactionEntity updateTransaction(TransactionEntity transaction)
	{
		return transactionRepository.save(transaction);
	}
	
	public TransactionEntity changeTransactionStatus(Long id, Boolean newStatus) 
	{
	    TransactionEntity transaction = transactionRepository.findById(id).orElse(null);
	    if (transaction != null) {
	        transaction.setEstado(newStatus);
	        transactionRepository.save(transaction);
	    }
	    return transaction;
	}

	public void deleteTransaction(Long id) 
	{
	    transactionRepository.deleteById(id);
	}


	
}
