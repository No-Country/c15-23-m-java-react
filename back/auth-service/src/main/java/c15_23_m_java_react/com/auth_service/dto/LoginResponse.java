package c15_23_m_java_react.com.auth_service.dto;

public class LoginResponse {
    private String jwtToken;


    public LoginResponse(String jwtToken)
    {
        this.jwtToken=jwtToken;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }


}
