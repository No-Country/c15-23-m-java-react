package c15_23_m_java_react.com.transaction_service.exception;

public class TransactionNotFoundException extends RuntimeException {
	
	public TransactionNotFoundException(String message){
		super(message);
	}
	
}
