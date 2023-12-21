package c15_23_m_java_react.com.transaction_service.repository;

import c15_23_m_java_react.com.transaction_service.entitys.TransactionEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TransactionRepository extends JpaRepository<TransactionEntity, Long> {


// Basic CRUD operations are already provided by JpaRepository

    // Custom Query to find transactions within a specific total amount range
    @Query("SELECT t FROM TransactionEntity t WHERE t.montoTotal BETWEEN :montoTotalMin AND :montoTotalMax")
    List<TransactionEntity> findByMontoTotalBetween(@Param("montoTotalMin") Double montoTotalMin,
                                                    @Param("montoTotalMax") Double montoTotalMax);

    // Custom Query to find transactions by total amount and status
    @Query("SELECT t FROM TransactionEntity t WHERE t.montoTotal = :montoTotal AND t.estado = :estado")
    List<TransactionEntity> findByMontoTotalAndEstado(@Param("montoTotal") Double montoTotal,
                                                      @Param("estado") Boolean estado);

    // Custom Query to update the transaction status
    @Modifying
    @Query("UPDATE TransactionEntity t SET t.estado = :estado WHERE t.id = :id")
    void updateTransactionStatus(@Param("id") Long id, @Param("estado") Boolean estado);

}
