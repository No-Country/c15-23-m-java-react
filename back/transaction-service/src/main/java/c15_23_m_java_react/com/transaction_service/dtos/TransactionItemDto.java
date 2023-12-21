package c15_23_m_java_react.com.transaction_service.dtos;

import java.util.List;

public class TransactionItemDto {
    private Long productId;
    private Integer quantity;
    private List<TransactionItemDto> itemDtos;


    public Long getProductId() {
        return this.productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }


    public List<TransactionItemDto> getItemDtos() {
        return this.itemDtos;
    }

    public void setItemDtos(List<TransactionItemDto> itemDtos) {
        this.itemDtos = itemDtos;
    }

}
