package c15_23_m_java_react.com.product_service.dtos;


public class ShoppingLineDTO {
    private Long userID;

    private Long productID;

    private Integer quantity;

    public ShoppingLineDTO() {
    }


    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long product_id) {
        this.productID = product_id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
