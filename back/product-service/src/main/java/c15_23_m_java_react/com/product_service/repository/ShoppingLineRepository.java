package c15_23_m_java_react.com.product_service.repository;


import c15_23_m_java_react.com.product_service.entities.ShoppingLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShoppingLineRepository extends JpaRepository<ShoppingLine, Long> {

    @Query(value = "SELECT l FROM ShoppingLine l Where l.userID =?1")
    List<ShoppingLine> getAllShoppingLinesByUserID(Long userID);

}
