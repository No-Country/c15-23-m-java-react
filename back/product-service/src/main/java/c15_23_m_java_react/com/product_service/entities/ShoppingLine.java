package c15_23_m_java_react.com.product_service.entities;

import javax.persistence.*;


@Entity
@Table(name = "shopping_line")
public class ShoppingLine {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "line_id")
    private Long lineID;

    private Long userID;

    //TODO: Realizar relación a producto - Una ShoppingLine tiene un producto - Un producto puede estar en muchas ShoppingLines
    @ManyToOne()
    @JoinColumn(name = "product_id")
    private Product product;

    private Integer quantity;

    public ShoppingLine() {
    }

    public Long getLineID() {
        return lineID;
    }

    public void setLineID(Long lineID) {
        this.lineID = lineID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
