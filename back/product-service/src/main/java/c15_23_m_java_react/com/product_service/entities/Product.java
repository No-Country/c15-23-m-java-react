package c15_23_m_java_react.com.product_service.entities;



import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="products", schema = "products_db")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "product_id")
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String brand;

    @NotNull
    private String description;

    @NotNull
    private Double price;

    @NotNull
    private Integer availableStock;

    @NotNull
    private Boolean active;

    //se calcula el precio descontado en frontend
    @NotNull
    private Double discount;

    //Si puede tener varios tipos entonces debería hacer una relación con otra tabla
    @NotNull
    private String category;

    @NotNull
    private Double height;

    @NotNull
    private Double width;

    @Column(length = 750)
    private String imageLink;



    public Product() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getAvailableStock() {
        return availableStock;
    }

    public void setAvailableStock(Integer availableStock) {
        this.availableStock = availableStock;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(Double width) {
        this.width = width;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}
