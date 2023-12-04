package c15_23_m_java_react.com.product_service.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @JsonProperty("name")
    private String name;

    @NotBlank
    @JsonProperty("brand")
    private String brand;

    @NotBlank
    @JsonProperty("description")
    private String description;

    @NotBlank
    @JsonProperty("stock")
    private Integer availableStock;

    @NotBlank
    @JsonProperty("status")
    private Boolean status;

    @NotBlank
    @JsonProperty("discount")
    private Double discount;

    //Si puede tener varios tipos entonces debería hacer una relación con otra tabla
    @NotBlank
    @JsonProperty("type")
    private String type;

    @NotBlank
    @JsonProperty("height")
    private Double height;

    @NotBlank
    @JsonProperty("width")
    private Double width;

    //TODO: {private String imageLink} Buscar una forma de almacenar el link de una imagen


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

    public Integer getAvailableStock() {
        return availableStock;
    }

    public void setAvailableStock(Integer availableStock) {
        this.availableStock = availableStock;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
}
