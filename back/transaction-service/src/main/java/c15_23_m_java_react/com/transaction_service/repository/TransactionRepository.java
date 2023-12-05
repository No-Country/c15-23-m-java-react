
package c15_23_m_java_react.com.transaction_service.repository;

import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TransactionRepository extends JpaRepository<TransactionEntity, Long> {
	TransactionEntity findByUsuario_id(Long usuario_id);
	
	
}
