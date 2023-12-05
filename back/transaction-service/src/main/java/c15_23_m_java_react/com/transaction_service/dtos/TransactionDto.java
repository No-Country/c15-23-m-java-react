
package c15_23_m_java_react.com.transaction_service.dtos;

import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import javax.validation.constraints.NotBlank;


public class TransactionDto {
	
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