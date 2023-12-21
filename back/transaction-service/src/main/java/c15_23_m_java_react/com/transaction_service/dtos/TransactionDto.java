
package c15_23_m_java_react.com.transaction_service.dtos;

import java.util.List;

public class TransactionDto {

    private ProductDto productoDto;

    private UserDto userDto;

    private List<TransactionItemDto> itemDtos;

    private Double impuestos;

    private Double montoTotal;

    private Double montoDescontado;

    // Getters and setters for productoDto
    public ProductDto getProductoDto() {
        return this.productoDto;
    }

    public void setProductoDto(ProductDto productoDto) {
        this.productoDto = productoDto;
    }

    // Getters and setters for userDto
    public UserDto getUserDto() {
        return this.userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }

    // Getters and setters for itemDtos
    public List<TransactionItemDto> getItemDtos() {
        return this.itemDtos;
    }

    public void setItemDtos(List<TransactionItemDto> itemDtos) {
        this.itemDtos = itemDtos;
    }


    public Double getImpuestos() {
        return this.impuestos;
    }

    public void setImpuestos(Double impuestos) {
        this.impuestos = impuestos;
    }

    public Double getMontoTotal() {
        return this.montoTotal;
    }

    public void setMontoTotal(Double montoTotal) {
        this.montoTotal = montoTotal;
    }

    public Double getMontoDescontado() {
        return this.montoDescontado;
    }

    public void setMontoDescontado(Double montoDescontado) {
        this.montoDescontado = montoDescontado;
    }

}



//public record TransactionDtoEnviado(Long id,
//								Long usuario_id,
//								Producto producto,
//								montoTotal,
//								impuestos,
//								montoDescontado,
//								fecha
//								){
//	public TransactionDtoEnviado(TransactionEntity transaction){
//		this(transaction.getId(),
//			transaction.getUsruaio_id(),
//			transaction.getProducto(),
//			transaction.getMontoTotal(),
//			transaction.getImpuestos(),
//			transaction.getMontoDescontado(),
//			transaction.getFecha()
//		);
//	}
//
//}
//
//public record TransactionDtoRecibido(@NotBlank Long id,
//							@NotBlank Long usuario_id,
//							@NotBlank Producto producto,
//							@NotBlank montoTotal,
//							@NotBlank impuestos,
//							@NotBlank montoDescontado,
//							@Notblank fecha
//							){
//}