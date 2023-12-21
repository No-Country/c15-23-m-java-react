package c15_23_m_java_react.com.transaction_service.exception;

public class UserNotFoundException extends RuntimeException {
    
    public UserNotFoundException(String message){
		super(message);
	}
}
