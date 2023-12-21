package c15_23_m_java_react.com.transaction_service.exception;

public class ProductNotFoundException extends RuntimeException {
    
    public ProductNotFoundException(String message){
		super(message);
	}
}
